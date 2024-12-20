import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Typography } from "@mui/material";
import axios from 'axios';
import Popup from "reactjs-popup";
import FormPopUp from "./FormPopUp";
let rows = []

const columns = [
  { id: "sno", label: "Sno", minWidth: 170 },
  { id: "TestimonialName", label: "Testimonial Title", minWidth: 100 },
  {
    id: "Kids",
    label: "Kids",
    minWidth: 170,
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
  },
];



export default function TestimonialDetails() {
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/v2/kalaimahal/sembanarkiol/kids")
      .then((d) => setData(d.data.data));
  }, [1]);
  if (data) rows = data;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const readData = async () => {
    await axios
      .get("/api/v2/kalaimahal/sembanarkiol/kids")
      .then((d) => setData(d.data.data));
  };

  const createData = async (Data, Id) => {
    const formData = await new FormData();
    console.log("logdata",Data)

    formData.append("name", Data.name);
    formData.append("testimonial", Data.bool);
    formData.append("kids", Data.image);
    await axios.post("/api/v2/kalaimahal/sembanarkiol/kids", formData);
    await readData();
  };

  const updateData = async (Data,id) => {
    const formData = await new FormData();
    console.log("logdata",Data)
    formData.append("name", Data.name);
    formData.append("testimonial", Data.bool);
    formData.append("kids", Data.image);
    formData.append("path", Data.path);
    await axios.put(`/api/v2/kalaimahal/sembanarkiol/kids/${id}`,formData);
    await readData();
  };
  const deleteData = async (id) => {
    await axios.delete(`/api/v2/kalaimahal/sembanarkiol/kids/${id}`);
    await readData();
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <Popup
        trigger={
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "50px",
              right: "50px",
              backgroundColor: "#000",
            }}
          >
            +
          </Button>
        }
        modal
        nested
      >
        {(close) => (
          <FormPopUp
            close={close}
            updateData={{ name: "", description: "" }}
            isBool={true}
            index={-1}
            boolData={false}
            boolName={"For kids"}            inputLabel={"image"}
            update={createData}
          />
        )}
      </Popup>
      <Paper sx={{ width: "90%" }}>
        <TableContainer sx={{ maxHeight: 440, borderRadius: "10px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: "black", color: "white" }}
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length == 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <Typography textAlign={"center"}>no data</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                rows

                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    ({ id, name,testimonial, image, path, align }, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                          <TableCell align={align}>{index + 1}</TableCell>
                          <TableCell align={"left"}>{name}</TableCell>
                          <TableCell align={"left"}>{testimonial?"yes":"no"}</TableCell>
                          <TableCell align={"right"}>
                            <Popup
                              trigger={
                                <Button variant="contained">Edit</Button>
                              }
                              modal
                              nested
                            >
                              {(close) => (
                                <FormPopUp
                                  close={close}
                                  updateData={{
                                    name,
                                  }}
                                  noChange={{ image, path }}
                                  isBool={true}
                                  index={id}
                                  boolData={testimonial}
                                  boolName={"For kids"}
                                  update={updateData}
                                  inputLabel={"image"}
                                />
                              )}
                            </Popup>{" "}
                            <span> </span>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => deleteData(id)}
                            >
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

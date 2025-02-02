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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import PopUpData from "./PopUpData";

let rows = [];

const columns = [
  { id: "sno", label: "Sno", minWidth: 10 },
  { id: "className", label: "Class Name", minWidth: 10 },
  {
    id: "section",
    label: "Section",
    minWidth: 40,
    align: "center",
  },
  { id: "roll", label: "Roll Number", minWidth: 40 },
  { id: "name", label: "Student Name", minWidth: 100 },
  { id: "attendance", label: "Attendance", minWidth: 40 },

  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];

export default function StudentMarkDetails() {
  const navigate = useNavigate();
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/api/v2/kalaimahal/sembanarkiol/student/`)
      .then((d) => setData(d.data.data));
  }, []);
  rows = data;

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
      .get(`/api/v2/kalaimahal/sembanarkiol/student/`)
      .then((d) => setData(d.data.data));
  };

  const createData = async (Data, Id) => {
    console.log(Data);

    await axios.post(
      "/api/v2/kalaimahal/sembanarkiol/student",
      { ...Data, ...{ mark: [] } }
    );

    await readData();
  };

  const updateData = async (Data, Id) => {
    await axios.put(
      `/api/v2/kalaimahal/sembanarkiol/student/${Id}`,
      { ...{ ...Data, ...{ mark: "[]" }}, id: Id }
    );
    await readData();
  };
  const deleteData = async (id) => {
    await axios.delete(
      `/api/v2/kalaimahal/sembanarkiol/student/${id}`
    );
    await readData();
  };
  if (rows == undefined) {
    rows = [];
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          backgroundColor: "#000",
        }}
        onClick={createData}
      >
        +
      </Button>
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
            onClick={createData}
          >
            +
          </Button>
        }
        modal
        nested
      >
        {(close) => (
          <PopUpData
            close={close}
            updateData={{
              className: "",
              section: "",
              roll: "",
              name: "",
              attendance: "",
            }}
            index={-1}
            update={createData}
          />
        )}
      </Popup>
      <Paper sx={{ width: "90%" }}>
        <TableContainer sx={{ maxHeight: 740, borderRadius: "10px" }}>
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
                    (
                      { id, className, section, name, roll, attendance },
                      index
                    ) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{className}</TableCell>
                          <TableCell>{section}</TableCell>
                          <TableCell>{roll}</TableCell>
                          <TableCell>{name}</TableCell>
                          <TableCell>{attendance}</TableCell>
                          <TableCell align={"center"}>
                            <Button
                            sx={{margin:"10px"}}
                              variant="contained"
                              color={"success"}
                              onClick={() => {
                                navigate(`${id}`);
                              }}
                            >
                              Open
                            </Button>
                            <span> </span>
                            <Popup
                              trigger={
                                <Button
                                sx={{margin:"10px"}} variant="contained">Edit</Button>
                              }
                              modal
                              nested
                            >
                              {(close) => (
                                <PopUpData
                                  close={close}
                                  updateData={{
                                    className,
                                    section,
                                    roll,
                                    name,
                                    attendance,
                                  }}
                                  index={id}
                                  update={updateData}
                                />
                              )}
                            </Popup>
                            <span> </span>
                            <Button
                            sx={{margin:"10px"}}
                              variant="contained"
                              color="error"
                              onClick={() => {
                                deleteData(id);
                              }}
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

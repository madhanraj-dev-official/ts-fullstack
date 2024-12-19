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

let rows = [];

const columns = [
  { id: "sno", label: "Sno", minWidth: 10 },
  { id: "name", label: "Name", minWidth: 10 },

  { id: "email", label: "Email", minWidth: 40 },
  { id: "phone", label: "Phone No", minWidth: 100 },
  { id: "experience", label: "Experience", minWidth: 40 },
  {
    id: "apply",
    label: "Apply",
    minWidth: 40,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];

export default function RequirementDetails() {
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/api/v2/kalaimahal/sembanarkiol/requirement/`)
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
      .get(`/api/v2/kalaimahal/sembanarkiol/requirement/`)
      .then((d) => setData(d.data.data));
  };
const download = async (pdf)=>{
    await window.open(`/static/resume/${pdf}`, "_blank");
}
  const deleteData = async (id) => {
    await axios.delete(
      `/api/v2/kalaimahal/sembanarkiol/requirement/${id}`
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
                      { id, name, email, phone, experience,apply,pdf },
                      index
                    ) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{name}</TableCell>
                          <TableCell>{email}</TableCell>
                          <TableCell>{phone}</TableCell>
                          <TableCell>{experience}</TableCell>
                          <TableCell>{apply}</TableCell>
                          <TableCell align={"center"}>
                            <Button
                            sx={{margin:"10px"}}
                              variant="contained"
                              color={"success"}
                              onClick={()=>download(pdf)}
                            >
                              Download
                            </Button>
                            <span> </span>
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

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
import PopUpData from "./PopUpData";
import Popup from "reactjs-popup";

const columns = [
  { id: "sno", label: "Sno", minWidth: 170 },
  { id: "courseName", label: "Course Title", minWidth: 100 },
  {
    id: "CourseDescription",
    label: "Course Description",
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


let rows = []
export default function CourseDetails() {
let [data ,setData]=React.useState([])
  React.useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/course").then((d)=>setData(d.data.data))

    },[1]
  )
  rows=data


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const readData =async ()=>{
    await axios.get("/api/v2/kalaimahal/sembanarkiol/course").then((d)=>setData(d.data.data))
  }

  const createData =async(Data,Id) =>{
    await axios.post("/api/v2/kalaimahal/sembanarkiol/course",Data)
    await readData()
  }

  const updateData =async (Data,Id)=>{
    await axios.put(`/api/v2/kalaimahal/sembanarkiol/course/${Id}`,{...Data,id:Id})
    await readData()
  }
  const deleteData =async (id)=>{
    await axios.delete(`/api/v2/kalaimahal/sembanarkiol/course/${id}`)
    await readData()

  }

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"90vh"}>
      <Popup
        trigger={
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: '50px',
              right: '50px',
              backgroundColor: '#000',
            }}
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
            updateData={{ name:"", description:"" }}
            index={-1}
            update={createData}
          />
        )}
      </Popup>    <Paper sx={{ width: "90%" }}>
      <TableContainer sx={{ maxHeight: 440 ,borderRadius:"10px"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                sx={{backgroundColor:"black",color:"white"}}
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
            {
              rows.length==0?<TableRow ><TableCell colSpan={columns.length}><Typography textAlign={"center"}>no data</Typography></TableCell></TableRow>:rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, name, description },index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell align={"left"}>{description}</TableCell>
                    <TableCell align={"right"}>
                    <Popup
                          trigger={<Button variant="contained">Edit</Button>}
                          modal
                          nested
                        >
                          {(close) => (
                            <PopUpData
                              close={close}
                              updateData={{
                                name,
                                description,
                              }}
                              index={id}
                              update={updateData}
                            />
                          )}
                        </Popup>                      <span> </span>
                      <Button variant="contained" color="error" onClick={()=>{deleteData(id)}}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
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

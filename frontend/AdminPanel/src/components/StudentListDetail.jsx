import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import PopUpData from './PopUpData';

let rows = []
const columns = [
  { id: "sno", label: "Sno", minWidth: 170 },
  { id: "name", label: "Student Name", minWidth: 100 },
  {
    id: "roll",
    label: "Roll no",
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

export default function StudentListDetails() {
  let [data ,setData]=React.useState([])
  let [data1 ,setData1]=React.useState([])
  const {classId}=useParams()
  const navigate = useNavigate()
  React.useEffect(
    ()=>{
      axios.get(`/api/v2/kalaimahal/sembanarkiol/student/${classId}`).then((d)=>setData(d.data.data))


    },[]
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
    await axios.get(`/api/v2/kalaimahal/sembanarkiol/student/${classId}`).then((d)=>setData(d.data.data))
  }

  const createData =async(Data,Id) =>{
    await axios.post(`/api/v2/kalaimahal/sembanarkiol/student/`,{...Data,mark:[]})
    await readData()
  }

  const updateData =async (Data,Id)=>{
    await axios.get(`/api/v2/kalaimahal/sembanarkiol/student/${classId}/${Id}`).then((d)=>setData1(d.data.data))
    await axios.put(`/api/v2/kalaimahal/sembanarkiol/student/${Id}`,{...data1,...Data})
    await readData()
  }
  const deleteData =async (id)=>{
    await axios.delete(`/api/v2/kalaimahal/sembanarkiol/student/${id}`)
    await readData()

  }
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
            <Button variant="contained" sx={{position:"absolute",bottom:"50px",right:"50px",backgroundColor:"#000"}} onClick={createData}>+</Button>
            <Popup
                        trigger={
                          <Button variant="contained" sx={{position:"absolute",bottom:"50px",right:"50px",backgroundColor:"#000"}}>+</Button>

                        }
                        modal
                        nested
                      >
                        {(close) => (
                          <PopUpData
                            close={close}
                            updateData={{
                              name:"",
                              roll:"",
                              attendance:"",
                              classId,
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ name, roll , attendance },index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={roll}>
                      <TableCell>{index+1}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell align={"left"}>{roll}</TableCell>
                      <TableCell align={"right"}>
                        <Button variant="contained" color={"success"} onClick={()=>{navigate(`${roll}`)}}>
                          Open
                        </Button>
                        <span> </span>
                        <Popup
                        trigger={
                          <Button
                            variant="contained"
                            onClick={() => updateData(index)}
                          >
                            Edit
                          </Button>
                        }
                        modal
                        nested
                      >
                        {(close) => (
                          <PopUpData
                            close={close}
                            updateData={{
                              name,
                              roll,
                              attendance,
                              classId,
                            }}
                            index={index}
                            update={updateData}
                          />
                        )}
                      </Popup>
                      <span> </span>
                      <Button variant="contained" color="error" onClick={()=>{deleteData(roll)}}>
                        Remove
                      </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
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

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PopUpData from './PopUpData';
let rows = {};

const studentDetail = {
  marks: [
    { id: 'SubjectName', label: 'Subject Name', minWidth: 170 },
    { id: 'internal', label: 'Internal', minWidth: 100 },
    {
      id: 'external',
      label: 'External',
      minWidth: 170,
      align: 'left',
    },
    {
      id: 'result',
      label: 'result',
      minWidth: 170,
      align: 'left',
    },
    {
      id: 'action',
      label: 'Action',
      minWidth: 170,
      align: 'right',
    },
  ],
};
const { marks } = studentDetail;

export default  function StudentMarkSlugDetails() {
  let [data, setData] = React.useState({});
  const { id, } = useParams();
  React.useEffect(() => {
    axios
      .get(
        `/api/v2/kalaimahal/sembanarkiol/student/${id}`,
      )
      .then((d) => setData(d.data.data));
    rows = { ...data };
  }, []);
  rows = { ...data };
  let { mark } = rows;
  let Mark = [];

  if (mark != null) {
    Mark=mark
  }
  // console.log(JSON.parse(Mark))
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
      .get(
        `/api/v2/kalaimahal/sembanarkiol/student/${id}`,
      )
      .then((d) => setData(d.data.data));
    let rows = { ...data };
    let { mark } = rows;
    if (mark != null) {
      Mark =  [mark];
    }
  };
console.log(mark)
  const createData = async (Data, Id) => {
    let newData = {...rows}
    newData.mark.push(Data)
    await axios.put(
      `/api/v2/kalaimahal/sembanarkiol/student/${id}`,
      newData,
    );
    await readData();
  };

  const updateData = async (Data, Id) => {
    console.log(Data, Id);
    let newData = {...rows}
    newData.mark[Id]=Data
    await axios.put(
      `/api/v2/kalaimahal/sembanarkiol/student/${id}`,
      newData,
    );
    readData();
  };
  const deleteData = async (Id) => {
    let newData = {...data}
    newData.mark.splice(Id,1)
    await axios.put(
      `/api/v2/kalaimahal/sembanarkiol/student/${id}`,
      newData,
    );
    await readData();
  };
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'90vh'}
    >
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
            updateData={{ subjectName:"", internal:"", external:"", result:"" }}
            index={-1}
            update={createData}
          />
        )}
      </Popup>

      <Box
        display={'flex'}
        justifyContent={'space-evenly'}
        width={'90%'}
        margin={'20px'}
      >
        <Typography>
          <b>Student Name :</b> {rows.name}
        </Typography>
        <Typography>
          <b>Roll No :</b> {rows.roll}
        </Typography>
      </Box>
      <Paper sx={{ width: '90%' }}>
        <TableContainer sx={{ maxHeight: 740, borderRadius: '10px' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {marks.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: 'black', color: 'white' }}
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
                Mark.length==0?<TableRow ><TableCell colSpan={studentDetail.marks.length}><Typography textAlign={"center"}>no data</Typography></TableCell></TableRow>:
                // mark.map((m,index)=><TableCell key={index}>hai</TableCell>)
                Mark.map(({ subjectName, internal, external, result }, index) => (
                  <TableRow key={index}>
                    <TableCell>{subjectName}</TableCell>
                    <TableCell>{internal}</TableCell>
                    <TableCell>{external}</TableCell>
                    <TableCell>{result}</TableCell>
                    <TableCell>
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
                              subjectName,
                              internal,
                              external,
                              result,
                            }}
                            index={index}
                            update={updateData}
                          />
                        )}
                      </Popup>
                      <span> </span>
                      <Button variant="contained" color="error" onClick={()=>deleteData(index)}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={marks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <p>{}</p>
    </Box>
  );
}

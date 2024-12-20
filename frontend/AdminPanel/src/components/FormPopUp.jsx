import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { useState ,useRef } from 'react'

// eslint-disable-next-line react/prop-types
function FormPopUp({updateData,index,update,close,inputLabel,isBool=false,boolData,boolName,noChange}) {
  const field = Object.keys(updateData)
  const createFile = useRef()
  const updateFile = useRef()
  const [newData,SetNewData]=useState({...updateData,...noChange})
  const [file,SetFile]=useState({})
  const [bool,SetBool]=useState(boolData)
  const [toggle,SetToggle]=useState(true)
  console.log(newData)
  return (
    <Box className='modal' height={"50vh"} width={"30vw"} sx={{backgroundColor:"#bbb",borderRadius:"10px",padding:"20px"}}>
    <Box component={"form"} encType="multipart/form-data" onSubmit={(e) =>{ e.preventDefault();console.log(file);update( {...newData,...{[inputLabel]:file},bool:bool},index);  close();}}  display={"flex"} flexDirection={"column"} height={"100%"}  justifyContent={"space-evenly"} alignItems={"center"}>
      <Box height={"90%"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        {field.map((label,ind)=><Box key={ind}>
          <TextField label={label} value={newData[label]} required onChange={(e)=>SetNewData({...newData,...{[label]:e.target.value}})}/>
        </Box>)
        }
        {index!=-1?null:<TextField  type='file'   required ref={createFile} onChange={(e)=>SetFile(e.target.files[0])}/>}
        {index==-1?null:<><Typography><Checkbox value={toggle} onClick={()=>SetToggle(!toggle)}/> Change Image</Typography>
          <TextField  type='file' disabled={toggle} ref={updateFile} required onChange={(e)=>SetFile(e.target.files[0])}/></>}
        {isBool?<Box display={"flex"} alignItems={"center"}><Checkbox type={"checkbox"} value={bool} onChange={(e)=>SetBool(!bool)}/><Typography>{boolName}</Typography></Box>:null}
      </Box>
    <Box >
        <Button variant='contained' color='secondary' onClick=
            {() => close()}>
                Cancel
        </Button>
        <span> </span>
        <Button variant='contained' type='submit'>
                {index==-1?"Create":"Update"}
        </Button>
    </Box>
    </Box>
</Box>
  )
}

export default FormPopUp
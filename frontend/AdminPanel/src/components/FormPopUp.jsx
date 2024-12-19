import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function FormPopUp({updateData,index,update,close,inputLabel,noChange}) {
  const field = Object.keys(updateData)
  const [newData,SetNewData]=useState({...updateData,...noChange})
  const [newData1,SetNewData1]=useState(updateData)
  const [toggle,SetToggle]=useState(true)
  console.log(newData)
  return (
    <Box className='modal' height={"50vh"} width={"30vw"} sx={{backgroundColor:"#bbb",borderRadius:"10px",padding:"20px"}}>
    <Box component={"form"} enctype="multipart/form-data" onSubmit={(e) =>{ e.preventDefault();close();toggle ? update( newData1,index):update( newData,index)}}  display={"flex"} flexDirection={"column"} height={"100%"}  justifyContent={"space-evenly"} alignItems={"center"}>
      <Box height={"90%"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        {field.map((label,ind)=><Box key={ind}>
          <TextField label={label} value={newData[label]} required onChange={(e)=>SetNewData({...newData,...{[label]:e.target.value}})}/>
        </Box>)
        }
        {index!=-1?null:<TextField  type='file' required onChange={(e)=>SetNewData({...newData,...{[inputLabel]:e.target.files[0]}})}/>}
        {index==-1?null:<><Typography><Checkbox value={toggle} onClick={()=>SetToggle(!toggle)}/> Change Image</Typography>
          <TextField  type='file' disabled={toggle} required onChange={(e)=>SetNewData1({...newData,...{[inputLabel]:e.target.files[0]}})}/></>}

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
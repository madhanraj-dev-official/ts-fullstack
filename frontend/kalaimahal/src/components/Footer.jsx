import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import HeaderNavigation from './HeaderNavigation'
import {footer} from "../css/components/Footer.module.css"
function Footer() {
  return (
    <Box component={"footer"} height={"50vh"}>
        <Card sx={{height:"100%",backgroundColor:"gray"}}>
            <CardMedia/>
            <CardContent>
                <Box display={"flex"} flexDirection={"column"} width={"6%"} >
                    <Typography>Main Links</Typography>
                    <HeaderNavigation direction={"column"} />
                    </Box>
                
            </CardContent>
        </Card>
    </Box>
  )
}

export default Footer
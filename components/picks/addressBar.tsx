import { Box, Button, Divider, InputAdornment, TextField,Typography } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function AddressBar({type, setType}:{type:boolean; setType:any}) {

    return(
        <Box sx={{display:"flex", border:"1px solid #ccc", borderRadius:"0.2rem", p:2, width:"100%", margin:"auto"}}>
          <Button sx={{backgroundColor:type?"#008A60":"white", color:"black"}} onClick={()=>{setType(true)}}>우리집</Button>
          <Divider orientation="vertical" flexItem sx={{mr:1,ml:1}} />
          <Button sx={{backgroundColor:type?"white":"#008A60"}} onClick={()=>{setType(false)}} >상가, 건물</Button>                   
          <Divider orientation="vertical" flexItem sx={{mr:1,ml:1}} />
          <Typography sx={{flexGrow:"1", mr:1}}>서울시 서초구 </Typography>          
          <Button>주소 설정</Button>
        </Box>
    )
}
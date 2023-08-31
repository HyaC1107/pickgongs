import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { OutlinedInput, InputAdornment, IconButton,InputLabel   } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { useRef, useContext, useState } from "react";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';
import { SignCotext } from './signup';
import { signIn } from 'next-auth/react'

export default function SignupType() {
    const ctx = useContext(SignCotext);
    const router = useRouter();
    
    const [type, setType] = useState<string>("customer");
    const [check, setCheck] = React.useState<boolean>(true);
        


  return (
      <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography className='title3 signupTypeBoxTitle'>
           회원가입 유형은 선택하세요
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{display:"flex", justifyContent:"center",textAlign:"center",gap:"5%"}}>
                  <Button className='typeButton' variant="contained" component="label" 
                    onClick={()=>{
                      setType("customer");
                      setCheck(true);
                    }}
                    sx={{
                      border:check?"1px solid #2CB07B":"1px solid #E2E2E2"
                    }}
                  > 
                    <img className='typeCheck' style={{display:check?"block":"none"}} src="/icons/account/login/typeCheck.png" />
                    <img className='typeIcon' src="/icons/account/customer.png" />
                    <Typography className='text5' sx={{mt:"7%"}}>소비자 회원가입</Typography>
                  </Button >
                  <Button className='typeButton' variant="contained" component="label"
                    onClick={()=>{
                      setType("contractor");
                      setCheck(false);
                    }}
                    sx={{
                      border:check?"1px solid #E2E2E2":"1px solid #2CB07B"
                    }}
                    >
                    <img className='typeCheck' style={{display:check?"none":"block"}} src="/icons/account/login/typeCheck.png" />
                    <img className='typeIcon' src="/icons/account/partner.png"/>
                    <Typography className='text5' sx={{mt:"7%"}}>파트너 회원가입</Typography>
                  </Button >
              </Box>
            </Grid>
          </Grid>
          <Grid className='signupTypeButtonBox' sx={{display:"flex",width:"100%", justifyContent:"center"}}>
              <Button              
                variant="contained"
                className='text4 loginButton'              
                sx={{ 
                  minWidth:"150px",
                  maxWidth:"300px",
                  width:"42%",
                  color:"white", 
                  backgroundColor:"black",  
                  borderRadius:"3rem" 
                }}
                onClick={()=>{
                  if(check){
                    router.push("/account/signup");
                  }else{
                    router.push("/account/signupC");
                  }
                }}
              >
                다음
              </Button>
            </Grid>
        </Box>
      </Container>
  );
}


SignupType.isRaw = true;
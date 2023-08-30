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
    const userIdRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    
    const [userId, setUserId] = useState<string>("");

    const handleSubmit = async () => {
      const datas = {
        userId: userIdRef!.current?.value,
        password: passwordRef!.current?.value,
      };
      console.log(datas);
      const response = await fetch("/api/account/signin", {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        router.push("/");
      }else{
        console.log(response);
      }
      // const result:any = await signIn("credentials", {
      //   userId: userIdRef!.current?.value,
      //   password: passwordRef!.current?.value,
      //   // redirect: true,
      //   // callbackUrl: "/",
      // });
      // console.log(result);
      // if (result.ok) {

      // }
    }


  return (
      <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" sx={{fontSize:"28px"}}>
          회원가입 유형은 선택하세요
          </Typography>
          <Grid container spacing={2} sx={{mt:15}}>
            <Grid item xs={12}>
              <Box sx={{display:"flex", justifyContent:"center",textAlign:"center",gap:"5%"}}>
                <Box onClick={()=>router.push("signup")}>
                  <Button variant="contained" component="label" sx={{border:"1px solid #2CB07B", backgroundColor:"white", width:300, height:300, borderRadius:"1rem"}}>
                    <img src="/icons/account/customer.png" width={"50%"}/>
                  </Button >
                  <Typography sx={{fontSize:"26px",mt:2}}>소비자 회원가입</Typography>
                </Box>
                <Box onClick={()=>router.push("signupC")}>
                  <Button variant="contained" component="label" sx={{border:"1px solid #2CB07B",backgroundColor:"white", width:300, height:300, borderRadius:"1rem"}}>
                    <img src="/icons/account/partner.png" width={"50%"}/>
                  </Button >
                  <Typography sx={{fontSize:"26px",mt:2}}>파트너 회원가입</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
}


SignupType.isRaw = true;
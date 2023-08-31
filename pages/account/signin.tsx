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
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
import { SignCotext } from './signup';
import { signIn } from 'next-auth/react'

export default function SignIn() {
    const ctx = useContext(SignCotext);
    const userIdRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
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
      //   redirect: true,
      //   callbackUrl: "/",
      // });
      // console.log(result);
      // if (result.ok) {

      // }
    }

    // const submitHandle = async (code?: string) => {
    //   if (code === "Enter" || code === undefined) {
    //     ctx?.setUserStatus({ currentUser: userId });
  
    //     const response = await fetch("/api/account/flow", {
    //       method: "POST",
    //       body: JSON.stringify({ loginIdentifier: userId }),
    //       headers: { "Content-type": "application/json" },
    //     });
    //     if (response.status === 200) {
    //       const json = await response.json();
    //       ctx?.setUserStatus({ mode: "SIGNAUTH" });
    //     } else if (response.status === 302) {
    //       ctx?.setUserStatus({ mode: "SIGNUP" });
    //     } else {
    //     }
    //   }
    // };





  return (
      <Container component="main" >
        <CssBaseline />
        <Box
          className='signInTitle'
          sx={{            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" className='loginTitle' sx={{letterSpacing:"-2.7px"}}>
            시공전문가 찾고 <span className='loginSubTitle' style={{color:"#2CB07B"}}>픽!</span> 할 땐
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:"100%" }}>
            <Box className='loginBox' sx={{margin:"auto", mb:"20px"}}>
              <img src='/icons/account/login/자산 3.png' />
              <input type='text' ref={userIdRef} 
                id='userId'
                name='userId'
                autoFocus
                required placeholder='아이디를 입력해주세요'/>
            </Box>
            <Box className='loginBox' sx={{margin:"auto",mb:"10px"}}>
              <img src='/icons/account/login/자산 4.png' />
              <input type='text' ref={passwordRef} required placeholder='비밀번호를 입력해주세요' />
            </Box>
            <Typography className='caption' sx={{ textAlign:"center", letterSpacing:"-0.05em"}} color={"#FF3120"}>로그인이 되지 않습니다 아이디와 비밀번호를 다시 입력하세요</Typography>
            <Grid className='autologinbox' container>
              <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
                {/* <label className='text1' sx={{mr:}}><input type='checkbox' />자동로그인</label> */}
                <Typography className='text1 loginCheckBox' sx={{color:"#848484", letterSpacing:"-0.025em"}}>
                  <input type='checkbox' id="remember" /><label htmlFor="remember">자동로그인</label>
                </Typography>
                <Link href="#" variant="body2" className='text1' sx={{textDecoration:"none",mr:"20px", color:"#848484", letterSpacing:"-0.025em"}}>
                  {"아이디/비밀번호 찾기"}
                </Link>
              </Grid>
            </Grid>
            <Grid item >
                <Button fullWidth
                  className='text2'
                  sx={{backgroundColor:"white", color:"#8A8A8A",letterSpacing:"-0.025em"}}
                  onClick={()=>router.push("/account/signupType")}
                >
                  회원 / 파트너 회원가입
                </Button>
            </Grid>
          </Box>
            <Grid className='loginButtonBox' sx={{display:"flex",width:"100%", justifyContent:"center"}}>
              <Button              
                variant="contained"
                className='text4 loginButton'
                onClick={handleSubmit}                
                sx={{ 
                  minWidth:"150px",
                  maxWidth:"300px",
                  width:"42%",
                  color:"white", 
                  backgroundColor:"black",  
                  borderRadius:"3rem" 
                }}
              >
                로그인
              </Button>
            </Grid>
        </Box>
      </Container>
  );
}


SignIn.isRaw = true;
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

export default function SignIn() {
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




    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    // });
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
          <Typography component="h1" sx={{fontSize:"44px", fontFamily:"NotoSansCJKkr-Bold", letterSpacing:"-2.7px"}}>
            시공전문가 찾고 <span style={{fontSize:"54px", color:"#2CB07B"}}>픽!</span> 할 땐
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userId"
              label="아이디를 입력해주세요"
              name="userId"
              inputRef={userIdRef}
              autoFocus
              onChange={(evt) => setUserId(evt.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="비밀번호를 입력해주세요"
              type={showPassword ? 'text' : 'password'}
              inputRef={passwordRef}
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
              }}
            />            
            <Grid container sx={{mt:4}}>
              <Grid item xs>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="자동로그인"
                />
              </Grid>
              <Grid item sx={{mt:1}}>
                <Link href="#" variant="body2" sx={{textDecoration:"none", color:"#ccc"}}>
                  {"아이디/비밀번호 찾기"}
                </Link>
              </Grid>
            </Grid>
            <Grid item >
                <Button fullWidth
                    sx={{backgroundColor:"white", color:"#8A8A8A",mt: 10}}
                    onClick={()=>router.push("/account/signupType")}
                >
                  회원 / 파트너 회원가입
                </Button>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 10, mb: 2, color:"white", backgroundColor:"black", height:"4rem", fontSize:"1.5rem", borderRadius:"1rem" }}
            >
              로그인
            </Button>
              
          </Box>
        </Box>
      </Container>
  );
}


SignIn.isRaw = true;
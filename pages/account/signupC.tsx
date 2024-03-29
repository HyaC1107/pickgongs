import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  InputAdornment, IconButton   } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from 'next/router';
import ServiceCustomer from './modal/serviceCustomer';
import PrivacyPolicy from './modal/privacyPolicy';
import { useRef, useContext,createContext, useState } from "react";




export default function SignUpC() {
    const router = useRouter();

    const [type, setType] = React.useState<string>("contractor");
    const [check, setCheck] = React.useState<boolean>(true);


    const userIdRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const passwordCheckRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const nickNameRef = useRef<HTMLInputElement>();
  
    const signupHandle = async () => {
      // const datas = {
      //   userId: userIdRef!.current?.value,
      //   password: passwordRef!.current?.value,
      //   email: emailRef!.current?.value,
      //   nickname: nickNameRef!.current?.value,
      //   type:type
      // };
      // const response = await fetch("/api/account/signup", {
      //   method: "POST",
      //   body: JSON.stringify(datas),
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // });
      // console.log(response);
      // if (response.status === 201) {
      //   // console.log("1차");
      // } else{
      //   alert("오류");
      // }
    };

  return (    
    <Container component="main" >
      <CssBaseline />
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width:"89%",
          maxWidth: "640px"
        }}
      >
        <IconButton className='backButton' onClick={() => router.back()}>
          <ArrowBackIosIcon  />
        </IconButton>
          <Typography className='title2 signupCTitle' sx={{letterSpacing:"-0.025em", textAlign:"center", width:"89%"}}>
            사업자 회원가입
          </Typography>
          <Box component="form" noValidate >
            <Grid container>
            <Grid className='signupItem' item xs={12}>
                <Typography className='text5' sx={{mb:1,letterSpacing:"-0.025em", display:"flex", justifyContent: "space-between"}}>아이디를 입력해주세요
                <Button className='caption signupButton' sx={{letterSpacing:"-0.025em", width:"130px",height:"40px", ml:2}}>중복확인</Button></Typography>                
                <TextField
                  name="userId"
                  required
                  fullWidth
                  size='small'
                  id="userId"
                  autoFocus
                  inputRef={userIdRef}
                />
              </Grid>
              <Grid className='signupItem' item xs={12}>
                <Typography className='text5' sx={{mb:1,letterSpacing:"-0.025em", }}>비밀번호를 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                size='small'
                  name="password"
                  // label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid className='signupItem' item xs={12}>
                <Typography className='text5' sx={{mb:1,letterSpacing:"-0.025em", }}>비밀번호를 다시한번 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                size='small'
                  name="passwordCheck"
                  // label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="passwordCheck"
                  inputRef={passwordCheckRef}
                />
              </Grid>
              <Grid className='signupItem' item xs={12}>
                <Typography className='text5' sx={{mb:1,letterSpacing:"-0.025em", }}>이메일을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  size='small'
                  id="email"
                  name="email"
                  inputRef={emailRef}
                />
              </Grid>           
              <Grid className='signupItem' item xs={12}>
                <Typography className='text5' sx={{letterSpacing:"-0.025em", }}>사업장을 선택해주세요</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    onClick={()=>{
                      setType("contractor");
                      setCheck(true);
                    }}
                    sx={{border:"1px solid #ccc",fontSize:21, height:66, backgroundColor:check?"#15BF81":"white", color:check?"white":"black"}}
                >시공업체</Button>
              </Grid>  
              <Grid item xs={12} sm={6}> 
                <Button
                    fullWidth
                    sx={{border:"1px solid #ccc",fontSize:21, height:66,backgroundColor:check?"white":"#15BF81",color:check?"black":"white"}}
                    onClick={()=>{
                        setType("heavyEquip");
                        setCheck(false);
                    }}
                >중장비</Button>
              </Grid>  
              <Grid className='signupItem' item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>본인인증하기
                  <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>인증하기</Button></Typography>
              </Grid> 
              <Grid className='signupItem' item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allow1" color="primary" />}
                    label="서비스 이용약관"
                />               
                <ServiceCustomer />
              </Grid>  
              <Grid className='signupItem' item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allow2" color="primary" />}
                    label="개인정보처리방침"
                />               
                <PrivacyPolicy />
              </Grid>        
            </Grid>

            <Grid className='signupButtonBox' sx={{display:"flex",width:"100%", justifyContent:"center"}}>
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
                        // signupHandle();
                        if(type==="contractor"){
                            router.push("signupContractor");
                        }else if(type==="heavyEquip"){
                            router.push("signupHeavy");
                        }else{
                            alert("사업장을 선택해주세요");
                        }
                    }                    
                }
              >
                다음 단계
              </Button>
            </Grid>    
            
          </Box>
        </Box>
      </Container>
  );
}
SignUpC.isRaw = true;
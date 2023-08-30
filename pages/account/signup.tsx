import * as React from 'react';
import { useRef, useContext,createContext, useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  InputAdornment } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRouter } from 'next/router';
import ServiceCustomer from './modal/serviceCustomer';
import PrivacyPolicy from './modal/privacyPolicy';
import { signIn, SignInResponse } from "next-auth/react";

type SignMode = "SIGNIN" | "SIGNUP" | "SIGNAUTH";

type SingContextType = {
  currentUser?: string;
  closeModal: (auto?: boolean) => void;
  setUserStatus: (obj: { mode?: SignMode; currentUser?: string }) => void;
};

export const SignCotext = createContext<SingContextType | null>(null);
export default function SignUp() {
  const ctx = useContext(SignCotext);
  const userIdRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordCheckRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const nickNameRef = useRef<HTMLInputElement>();

  const signupHandle = async () => {
    const datas = {
      userId: userIdRef!.current?.value,
      password: passwordRef!.current?.value,
      email: emailRef!.current?.value,
      nickname: nickNameRef!.current?.value,
      type:"customer"
    };
    const response = await fetch("/api/account/signup", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 201) {
      router.push("/");      
    } else{
      alert("오류");
    }
  };

  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

//   const onClickCertify = async () => {
//     const { form } = document;
//     const left = screen.width / 2 - 500 / 2;
//     const top = screen.height / 2 - 800 / 2;
//     const option = `status=no, menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
//     const returnUrl = `${process.env.SERVER_ADDRESS}/api/nice`;  // 본인인증 결과를 전달받을 api url

//     // 위에서 언급했던 token api가 요청 데이터를 암호화한 후 표준창 호출에 필요한 데이터를 응답해준다.
//     const res = await api.get<NiceEncodeType>('/api/token', { returnUrl });

//     if (form && res.data) {
//         const { enc_data, integrity_value, token_version_id } = res.data;
//         window.open('', 'nicePopup', option);

//         form.target = 'nicePopup';
//         form.enc_data.value = enc_data;
//         form.token_version_id.value = token_version_id;
//         form.integrity_value.value = integrity_value;
//         form.submit();
//     }
// };
  return (
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:640,
            maxWidth: '100%'
          }}
        >
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={()=>router.push("signin")} >
                  
                </Button>
              </Grid>
            </Grid>
          <Typography letterSpacing={"-1px"} fontSize={"15px"} fontFamily={"NotoSansCJKkr-Bold"} >
            회원가입
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"13px", display:"flex", justifyContent: "space-between", fontFamily:"NotoSansKR-Medium"}}>아이디를 입력해주세요
                <Button sx={{backgroundColor:"#2CB07B",fontSize:"10px",height:"20px", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>                
                <TextField
                  name="userId"
                  required
                  fullWidth
                  size='small'
                  id="userId"
                  autoFocus
                  inputRef={userIdRef}
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //         <PersonIcon />
                  //     </InputAdornment>
                  //   )
                  // }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"13px", fontFamily:"NotoSansKR-Medium" }}>비밀번호를 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                size='small'
                  name="password"
                  // label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="password"
                  inputRef={passwordRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <LockOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"13px", fontFamily:"NotoSansKR-Medium" }}>비밀번호를 다시한번 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                size='small'
                  name="passwordCheck"
                  // label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="passwordCheck"
                  inputRef={passwordCheckRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <LockOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"13px", fontFamily:"NotoSansKR-Medium" }}>이메일을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  size='small'
                  id="email"
                  name="email"
                  inputRef={emailRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <EmailOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{mb:1, fontSize:"13px", display:"flex", justifyContent: "space-between", fontFamily:"NotoSansKR-Medium"}}>닉네임을 입력해주세요
              <Button sx={{backgroundColor:"#2CB07B",fontSize:"13px",height:"20px", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>
                <TextField
                  required
                  fullWidth
                  size='small'
                  id="nickName"
                  name="nickName"
                  inputRef={nickNameRef}
                />
              </Grid>     
              <Grid item xs={12}>
              {/* <form name="form" id="form" action="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb">
                  <input type="hidden" id="m" name="m" value="service" />
                  <input type="hidden" id="token_version_id" name="token_version_id" value="" />
                  <input type="hidden" id="enc_data" name="enc_data" />
                  <input type="hidden" id="integrity_value" name="integrity_value" />
              </form>

              <button onClick={onClickCertify}> 휴대폰 인증 </button> */}
                <Typography sx={{mb:1, fontSize:"13px", display:"flex", justifyContent: "space-between", fontFamily:"NotoSansKR-Medium"}}>본인인증하기
                <Button sx={{backgroundColor:"#2CB07B",fontSize:"13px",height:"20px", color:"white", borderRadius:"1rem", ml:2}}>인증하기</Button></Typography>
              </Grid>         
              <Grid item xs={12} >
                <FormControlLabel
                    control={<Checkbox value="allow1" color="primary" />}
                    label="서비스 이용약관"
                />               
                <ServiceCustomer />
              </Grid>  
              <Grid item xs={12} sx={{pt:"12px"}}>                
                <FormControlLabel
                      control={<Checkbox value="allow2" color="primary" />}
                      label="개인정보처리방침"
                  />               
                <PrivacyPolicy />
              </Grid> 
            </Grid>
               
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width:"42%",height:"60px",borderRadius:"2rem",  color:"white", fontSize:"24px", backgroundColor:"#000326" }}
              onClick={signupHandle}
            >
              회원가입완료
            </Button>
            
          </Box>
        </Box>
      </Container>
  );
}
SignUp.isRaw = true;
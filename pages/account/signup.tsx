import * as React from 'react';
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

export default function SignUp() {
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
            marginTop: 4,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:640,
            maxWidth: '100%'
          }}
        >
          <Typography component="h1" fontSize={"43px"} fontFamily={"NotoSansKR-Regular"} >
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder"}}>아이디를 입력해주세요
                <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>
                <TextField
                  name="userId"
                  required
                  fullWidth
                  id="userId"
                  label="name"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <PersonIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>비밀번호를 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="password"
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
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>비밀번호를 다시한번 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="비밀번호 8자리(숫자,글자,특수문자 포함)"
                  type="password"
                  id="passwordCheck"
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
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>이메일을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="name@email.com"
                  name="email"
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
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>닉네임을 입력해주세요
                <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button></Typography>
                <TextField
                  required
                  fullWidth
                  id="nickName"
                  label="닉네임을 입력해주세요"
                  name="nickName"
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
                <Typography sx={{mb:1, fontSize:"21px", fontFamily:"NotoSansKR-Medium", fontWeight:"bolder" }}>본인인증하기
                  <Button sx={{backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", ml:2}}>인증하기</Button></Typography>
              </Grid>         
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allow1" color="primary" />}
                    label="서비스 이용약관"
                />               
                <ServiceCustomer />
              </Grid>  
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allow2" color="primary" />}
                    label="개인정보처리방침"
                />               
                <PrivacyPolicy />
              </Grid> 
            </Grid>
               
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:"white", fontSize:"27px" }}
            >
              회원가입완료
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={()=>router.push("signin")} >
                  이미 계정을 갖고 계신가요?
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
SignUp.isRaw = true;
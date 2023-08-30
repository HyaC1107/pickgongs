import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Divider} from '@mui/material';
import { useRef, useContext,createContext, useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import { categories,categories2 } from '@/lib/categories';

export default function SignUpContractor() {
  const router = useRouter();
  const sliceCa = categories.slice(0,22);

  const [guarantee, setGuarantee] = React.useState('');
  const [guaranteeAgency, setGuaranteeAgency] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const handleChangeG = (event: SelectChangeEvent) => {
    setGuarantee(event.target.value as string);
  };
  const handleChangeGA = (event: SelectChangeEvent) => {
    setGuaranteeAgency(event.target.value as string);
  };


  const signupHandle = async () => {

    const userIdRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const passwordCheckRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const nickNameRef = useRef<HTMLInputElement>();

    const datas = {
      userId: userIdRef!.current?.value,
      password: passwordRef!.current?.value,
      email: emailRef!.current?.value,
      nickname: nickNameRef!.current?.value
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
    } else if(response.status === 406) {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container component="main" >
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
          <Typography component="h1" sx={{fontSize:"2rem", fontWeight:"bold", mb:2}} >
            파트너 신청서
          </Typography>
          <Typography variant="h5">개인사업장</Typography>          
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{textAlign:"center",mb:2}}>사업장 검수과정입니다. 사업장 정면으로 정확하게 촬영하여 등록해주세요</Typography>
                <Box sx={{display:"flex", justifyContent:"space-around",textAlign:"center"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography sx={{fontSize:"1.5rem",mt:2}}>사업장 사진추가</Typography>
                    <Typography variant='subtitle2'>(간판이 포함된 전면사진)</Typography>
                  </Box>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc",backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*"   type="file" />
                    </Button >
                    <Typography sx={{fontSize:"1.5rem",mt:2}}>임대차계약서</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-around",textAlign:"center"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*"  type="file" />
                    </Button >
                    <Typography sx={{fontSize:"1.5rem",mt:2}}>사업자등록증</Typography>
                  </Box>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc",backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*"   type="file" />
                    </Button >
                    <Typography sx={{fontSize:"1.5rem",mt:2}}>신분증</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>사업자번호</Typography>       
                  <Box>
                    <Button sx={{backgroundColor:"#7D7D7D", color:"white", borderRadius:"1rem", ml:2}}>중복확인</Button>  
                  </Box>
                </Box>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="사업자번호 입력"                                    
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>업체명</Typography>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  name="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-between", mb:1}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>사업장 주소</Typography>
                  <Button sx={{backgroundColor:"#02CE9D", color:"white", borderRadius:"1rem", ml:2}}>주소 검색</Button>
                </Box>
                <TextField
                  required
                  fullWidth
                  name="location"
                  id="location"
                />
              </Grid> 
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:1}}>주업종</Typography>
                <Select
                    value={category}
                    onChange={handleChangeCategory}
                    sx={{width:"100%"}}
                  >
                    {sliceCa.map((one)=>(
                      <MenuItem key={one.name} value={one.name}>{one.name}</MenuItem>
                    ))}
                  </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:1}}>사업자 이메일</Typography>
                <TextField
                  required
                  fullWidth
                  name="companyEmail"
                  id="companyEmail"
                />  
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:1}}>A/S기간을 입력해주세요</Typography>
                <TextField
                  required
                  fullWidth
                  name="afterService"
                  id="afterService"
                />  
              </Grid>
              <Grid container spacing={2} sx={{width:"80%", margin:"auto"}}>
              <Typography sx={{textAlign:"center",mb:2,mt:4}}>정확한 내용과 파일을 등록 해주세요!</Typography>
                <Grid item xs={12} sm={6} sx={{pl:"4rem"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc",flexDirection:"column", backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <Typography sx={{textAlign:"center"}}>필수자격증</Typography>
                      <input hidden accept="image/*" type="file" />
                    </Button >
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pl:"4rem"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc",flexDirection:"column",backgroundColor:"white", width:200, height:200, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <Typography sx={{textAlign:"center"}}>추가자격증</Typography>
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{m:2, width:"100%"}} />
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1rem", fontWeight:"bold",mb:1}}>소비자 보호 및 업체보호를 위해 보증기관을 통하여 보증발급 유무 확인란입니다. </Typography>
                <Box sx={{mt:2}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>보증기관 발급 유/무</Typography>
                  <Select
                    value={guaranteeAgency}
                    onChange={handleChangeGA}
                    sx={{width:"100%"}}
                  >
                    <MenuItem value={"SGI서울보증보험"}>SGI서울보증보험</MenuItem>
                    <MenuItem value={"전문건설공제조합"}>전문건설공제조합</MenuItem>
                  </Select>
                </Box>
                <Box sx={{mt:2}}>
                  <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>보증 가능 여부를 선택하세요</Typography>
                  <Select
                    value={guarantee}
                    onChange={handleChangeG}
                    sx={{width:"100%"}}
                  >
                    <MenuItem value={"지급보증보험"}>지급보증보험</MenuItem>
                    <MenuItem value={"이행보증보험"}>이행보증보험</MenuItem>
                    <MenuItem value={"계약보증보험"}>계약보증보험</MenuItem>
                    <MenuItem value={"선금보증보험"}>선금보증보험</MenuItem>
                    <MenuItem value={"하자보증보험"}>하자보증보험</MenuItem>
                    <MenuItem value={"공사이행보증보험"}>공사이행보증보험</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Divider sx={{m:2, width:"100%"}} />
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:2}}>홈페이지 링크</Typography>
                <TextField
                    fullWidth
                    name="location"
                    label="개인이 보유한 도메인 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:2}}>SNS 링크</Typography>
                <TextField
                    fullWidth
                    name="location"
                    label="블로그,인스타그램,페이스북,밴드 등 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:2}}>유튜브 링크</Typography>
                <TextField
                    fullWidth
                    name="location"
                    label="유튜브 URL을 입력하세요"
                    id="location"
                    sx={{mb:2}}
                />
              </Grid>
              
            </Grid>
            <Grid item xs={12} sx={{textAlign:"right"}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width:"30%", fontSize:"2rem", color:"white", backgroundColor:"#004BA7"}}
                onClick={()=>router.push("signupFeeC")}
              >
                다음 단계
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end" sx={{mb:2}}>
              <Grid item>
                <Link href="#" variant="body2">
                  계정을 갖고 계시면 로그인 화면으로
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
SignUpContractor.isRaw = true;
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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


export default function SignUpHeavy() {
  const router = useRouter();
  const [gurantee, setGurantee] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setGurantee(event.target.value as string);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Typography component="h1" sx={{fontSize:"2rem", fontWeight:"bold", mb:2}}>
            파트너 신청서
          </Typography>      
          <Typography sx={{textAlign:"center"}}>중장비차량 검수과정입니다. 정확하게 촬영하여 등록해주세요</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-around", textAlign:"center"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>전면</Typography>
                  </Box>
                  <Box>
                  <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>측면</Typography>
                  </Box>
                  <Box>
                  <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>후면</Typography>
                  </Box>
                </Box>                
              </Grid>
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-around", textAlign:"center"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>사업자등록증</Typography>               
                  </Box>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>운전면허증</Typography>
                  </Box>
                  <Box>
                  <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>자동차등록증</Typography>               
                  </Box>
                  
                </Box>                
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
                  label="주소"
                  id="location"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>크레인 종류</Typography> 
                <Select
                  value={gurantee}
                  onChange={handleChange}
                  sx={{width:"100%"}}                  
                >
                    <MenuItem value={1}>카고크레인</MenuItem>
                    <MenuItem value={2}>사다리차</MenuItem>
                    <MenuItem value={3}>고소작업차</MenuItem>
                  </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>경력</Typography> 
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="경력"
                    id="location"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"1.5rem", fontWeight:"bold"}}>차종 TON</Typography> 
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="차종 TON"
                    id="location"
                  />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", mb:1}}>사업자 이메일</Typography>
                <TextField
                  required
                  fullWidth
                  name="companyEmail"
                  label="사업자 이메일"
                  id="companyEmail"
                />  
              </Grid>
              <Divider sx={{width:"100%", mt:2}} />
              <Grid item xs={12}>
                <Box sx={{display:"flex", justifyContent:"space-around", textAlign:"center"}}>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>화물운송자격증</Typography>               
                  </Box>
                  <Box>
                    <Button variant="contained" component="label" sx={{border:"1px solid #ccc", backgroundColor:"white", width:150, height:150, borderRadius:"1rem"}}>
                      <AddIcon sx={{fontSize:"6rem", cursor:"pointer"}} />
                      <input hidden accept="image/*" multiple type="file" />
                    </Button >
                    <Typography>조종교육이수증</Typography>
                  </Box>
                </Box>                
              </Grid>
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
                onClick={()=>router.push("signupFeeH")}
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
SignUpHeavy.isRaw = true;
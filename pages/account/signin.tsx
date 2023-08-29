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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { OutlinedInput, InputAdornment, IconButton,InputLabel   } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';



export default function SignIn() {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" sx={{fontSize:"38px"}}>
            시작하기 전에 로그인이 필요해요
          </Typography>
          <Typography component="h1" sx={{fontSize:"28px", mb:2, fontWeight:"bolder", color:"#615959"}}>
            회원전용 로그인 전환
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디를 입력해주세요"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="비밀번호를 입력해주세요"
              type={showPassword ? 'text' : 'password'}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={()=>router.push("/contractor")}
              sx={{ mt: 3, mb: 2, color:"white", backgroundColor:"black", height:"4rem", fontSize:"1.5rem", borderRadius:"1rem" }}
            >
              로그인
            </Button>
            <Grid container gap={1} sx={{display:"flex", justifyContent:"space-between"}} >
              <Grid item >
                <Button fullWidth
                    variant="contained"
                    sx={{ml:"1rem",p:"1rem", backgroundColor:"white", border:"1px solid #ccc"}}
                    onClick={()=>router.push("/account/signup")}
                >
                  회원가입 하러가기
                </Button>
              </Grid>
              <Grid item>
                <Button fullWidth
                    variant="contained"
                    sx={{right:"1rem",p:"1rem", backgroundColor:"white", border:"1px solid #ccc", color:"black"}}
                    onClick={()=>router.push("/account/signupC")}
                >
                  업체가입 하러가기
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}


SignIn.isRaw = true;
import * as React from 'react';
import { Button, Icon,Typography, IconButton, Box, Toolbar, Link, Divider  } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { useRouter } from "next/router";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from "next-auth/react";
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Products', 'Pricing', 'Blog'];

function NewHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none"
            }}
          >
           <img src="/icons/logo.png" />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none"
            }}
          >
            <img src="/icons/logo.png" />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", display:"flex", flexDirection:"column" }
                }}
              >
                  <MenuItem href="#" sx={{ my: 1, mx: 1.5, color:"black" }}>
                    <NotificationsIcon />
                    <Typography>알림</Typography>  
                  </MenuItem>
                  <MenuItem onClick={()=>router.push("/account/signin")}
                    sx={{ my: 1, mx: 1.5, color:"black"}}>                    
                    <LogoutIcon />
                    <Typography>
                      로그인
                    </Typography>
                  </MenuItem>
                  <MenuItem href="#" sx={{ my: 1, mx: 1.5, color:"black" }}>
                    <PersonIcon />
                    <Typography>
                      회원정보
                    </Typography>
                  </MenuItem>
                  <MenuItem href="#" sx={{ my: 1, mx: 1.5, color:"black" }}>
                    <Typography>
                      앱다운로드
                    </Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button            
                href="#"
                sx={{ my: 1, mx: 1.5, color:"black" }}
              >
               <NotificationsIcon />
                알림
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button            
                onClick={()=>router.push("/account/signin")}
                sx={{ my: 1, mx: 1.5, color:"black" }}
              >
                <LogoutIcon />
                로그인
              </Button>
              <Divider orientation="vertical"  flexItem/>
              <Button            
                href="#"
                sx={{ my: 1, mx: 1.5, color:"black" }}
                
              >
                <PersonIcon />
                회원정보
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button            
                href="#"
                sx={{ my: 1, mx: 1.5, color:"black" }}
              >
                앱다운로드
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NewHeader;

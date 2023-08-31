import * as React from 'react';
import { GetServerSideProps } from "next";
import { Box, Grid, Typography,TextField, Button, ToggleButton } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { getToken } from "next-auth/jwt";
import mongooseInit from "@/lib/mongooseInit";
import { categories, categories2 } from "@/lib/categories";
import SearchBar from '@/components/contractor/searchBar';
import { useRouter } from 'next/router';
import AddressBar from '@/components/picks/addressBar';


function Picks() {
  const router = useRouter();
  const sliceCa = categories.slice(2,25);
  const sliceCa2 = categories2.slice(2,20);
  
  const [type, setType] = React.useState<boolean>(true);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        margin: "auto",
        pb: 10,
        mt: 5,
      }}
    >
      <AddressBar type={type} setType={setType} />
      <Grid container spacing={2} sx={{mt:2 }}>
        <Grid item xs={12} sx={{display:"flex",textAlign:"center", justifyContent:"center",flexDirection:"column", mb:3}} >
            <Typography variant='h4' sx={{fontWeight:"bolder"}}>필요한 시공을 선택해주세요</Typography>
            <Typography sx={{textDecoration:"line-through", color:"red", fontSize:"2rem"}}>
            　　　　<CheckBoxIcon sx={{color:"red"}} />　　　　
            </Typography>
        </Grid>        
        {type?sliceCa2.map((one) => (
          <Grid key={one.name} item xs={4.5} sm={2.4} md={1.6} sx={{margin:"auto",textAlign:"center", opacity:"0.3"}}>
            <img src={one.img}  width={"108px"} height={"108px"} />
            <Typography sx={{height:"36px"}}>{one.name}</Typography>
          </Grid>
        )):sliceCa.map((one) => (
          <Grid key={one.name} item xs={4.5} sm={2.4} md={1.6} sx={{margin:"auto",textAlign:"center", opacity:"0.3"}}>
            <ToggleButton value={one.name}>
                <img src={one.img} width={"64px"} height={"64px"} />
                <Typography>{one.name}</Typography>
            </ToggleButton> 
          </Grid>
        ))}
      </Grid>
      <Box sx={{display:"flex",flex:1, justifyContent:"flex-end"}}>
        <Button sx={{width:"200px", textAlign:"center", height:"60px", mt:2, fontSize:"1.5rem", borderRadius:"1rem", backgroundColor:"#ccc",
                      color:"black",'&:hover':{color:"white", backgroundColor:"black"}}}
          onClick={()=>router.push("picks/1/selectGongs")}
        >시작 하기</Button>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await mongooseInit();
  const rst = await getToken(ctx);
  return {
    props: { 
    //   data: JSON.parse(JSON.stringify(datas))
    },
  };
};

export default Picks;
Picks.isDetail = false;
Picks.isRaw = false;
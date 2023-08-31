import * as React from 'react';
import { GetServerSideProps } from "next";
import { Box, Grid, Typography,TextField, Button, Divider, InputAdornment } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { getToken } from "next-auth/jwt";
import mongooseInit from "@/lib/mongooseInit";
import { categories, categories2 } from "@/lib/categories";
import SearchBar from '@/components/contractor/searchBar';
import { useRouter } from 'next/router';


function Contractor() {
  const router = useRouter();
  const sliceCa = categories.slice(2,28);
  const sliceCa2 = categories2.slice(2,28);
  
  const [type, setType] = React.useState<boolean>(true);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        margin: "auto"
      }}
    >
      <SearchBar type={type} setType={setType} />
      <Grid container spacing={2} sx={{mt:2 }}>
        <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:"flex-end", mb:3}} >
          <Button onClick={()=>router.push("/contractor/category")}><img src={categories[0].img} width={"99px"} height={"99px"} />
            <Typography sx={{ml:"1rem",color:"black"}}>3D도면설계</Typography>
          </Button>
        </Grid>  
        <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:"flex-start", mb:3}} >
          <Button><img src={categories[1].img} width={"99px"} height={"99px"} />
          <Typography sx={{ml:"1rem",color:"black"}}>종합인테리어</Typography>
          </Button>
        </Grid>        
        {type?sliceCa2.map((one) => (
          <Grid key={one.name} item xs={4.5} sm={2.4} md={1.6} sx={{margin:"auto",textAlign:"center"}}>
            <img src={one.img}  width={"108px"} height={"108px"} />
            <Typography sx={{height:"36px"}}>{one.name}</Typography>
          </Grid>
        )):sliceCa.map((one) => (
          <Grid key={one.name} item xs={4.5} sm={2.4} md={1.3} sx={{textAlign:"center"}}>
            <img src={one.img}  width={"108px"} height={"108px"} />
            <Typography sx={{height:"36px"}}>{one.name}</Typography>
          </Grid>
        ))}
      </Grid>
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

export default Contractor;
Contractor.isDetail = false;
Contractor.isRaw = false;
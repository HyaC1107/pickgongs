import { Box, Tab, Tabs, Toolbar, Typography,Card, CardContent, CardMedia, Grid,Button } from "@mui/material";
import React from "react";
import CompanyInfo from "../companyInfo";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
function a11yProps(index: number) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function TabInfo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className="text2" label="업체 정보" {...a11yProps(0)} />
            <Tab className="text2" label="주 업무" {...a11yProps(1)} />
            <Tab className="text2" label="포트폴리오" {...a11yProps(2)} />
            <Tab className="text2" label="리뷰" {...a11yProps(3)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <CompanyInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center", overflowX: 'auto' }}>
            <Box>
            주업무
            </Box>
        </Toolbar>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Grid container spacing={2} sx={{mt:2}}>           
          <Grid item sm={4}>
              <Card
               sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
              >
              <Box sx={{height:"180px", position:"relative"}}>
                  <CardMedia
                      component="img"
                      sx={{
                      height:"180px"
                      }}
                      src="/icons/contractorDetail/자산 80.png"
                  />
              </Box>
              <CardContent 
                  sx={{ flexGrow: 1, display:"flex", cursor:"pointer",textAlign:"center",  flexDirection:"column", justifyContent:"space-between" }}
              >
                  <Typography gutterBottom variant="inherit" >
                      {"홈페이지"}
                  </Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item sm={4}>
              <Card
               sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
              >
              <Box sx={{height:"180px", position:"relative"}}>
                  <CardMedia
                      component="img"
                      sx={{
                      height:"180px"
                      }}
                      src="/icons/contractorDetail/자산 81.png"
                  />
              </Box>
              <CardContent 
                  sx={{ flexGrow: 1, display:"flex", cursor:"pointer",textAlign:"center",  flexDirection:"column", justifyContent:"space-between" }}
              >
                  <Typography gutterBottom variant="inherit" >
                      {"SNS"}
                  </Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item sm={4}>
              <Card
               sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
              >
              <Box sx={{height:"180px", position:"relative"}}>
                  <CardMedia
                      component="img"
                      sx={{
                      height:"180px"
                      }}
                      src="/icons/contractorDetail/자산 82.png"
                  />
              </Box>
              <CardContent 
                  sx={{ flexGrow: 1, display:"flex", cursor:"pointer",textAlign:"center",  flexDirection:"column", justifyContent:"space-between" }}
              >
                  <Typography gutterBottom variant="inherit" >
                      {"유튜브"}
                  </Typography>
              </CardContent>
              </Card>
          </Grid>
        </Grid>
        <Box sx={{display:"flex", width:"100%", justifyContent:"space-evenly", mt:2 }}>
          <Button sx={{width:"200px",height:"47px", backgroundColor:"#FC8210", color:"white", borderRadius:"1rem", mr:4, fontSize:26}}>블로그 편집</Button>
          <Button sx={{width:"200px",height:"47px", backgroundColor:"#158D60", color:"white", borderRadius:"1rem", fontSize:26}}>설정 완료</Button>
        </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center", overflowX: 'auto' }}>
            <Box>
            리뷰
            </Box>
        </Toolbar>
        </TabPanel>
    </Box>)
}
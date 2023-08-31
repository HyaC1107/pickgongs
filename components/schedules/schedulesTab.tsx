import { Box, Tab, Tabs,Button, Toolbar, Typography, Divider } from "@mui/material";
import React from "react";
import CautionDialog from "../picks/cautionDialog";
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import ko from "dayjs/locale/ko";
import dayjs from 'dayjs';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { categories, categories2 } from "@/lib/categories";
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

export default function ScheduleTabInfo() {
    const sliceCa2 = categories2.slice(2,28);
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{width:"100%"}} centered={true} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="희망방문예정 스케쥴" {...a11yProps(0)} />
            <Tab label="방문확정 스케쥴" {...a11yProps(1)} />
            <Tab label="공사스케쥴" {...a11yProps(2)} />
            <Tab label="공사 취소 및 시간변경 요청" {...a11yProps(3)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Box sx={{width:"100%", margin:"auto", flexDirection:"column"}}>
                <Box sx={{display:"flex", minHeight:"400px", flexDirection:"row", justifyContent:"space-between"}}>
                    <Box sx={{width:"300px"}}>
                        <Box sx={{display:"flex",width:"300px", height:"330px",overflowY:"scroll", flexDirection:"column",textAlign:"center", border:"1px solid black"}}>
                            <Typography variant="h6" sx={{mb:1, position:"sticky", top:0,pt:2, backgroundColor:"white"}}>시공분야를 선택하세요</Typography>
                            {sliceCa2.map((one) => (
                                <Typography variant="h6">{one.name}</Typography>
                            ))}
                            <CautionDialog setOpen={setOpen} open={open} />
                        </Box>
                        <Box sx={{width:"100%", justifyContent:"center", display:"flex"}}>
                        <Button onClick={handleOpen} sx={{textAlign:"center",mt:2, width:"200px", height:"40px", color:"white", backgroundColor:"#416292"}} >스케줄 안내문</Button>
                        </Box>
                    </Box>
                    <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ko}>
                        <StaticDatePicker 
                            displayStaticWrapperAs="desktop"
                            sx={{maxWidth: '745px',
                            "& .MuiPickersCalendarHeader-root": {
                                width: "100%",
                           },
                           "& .MuiIconButton-root": {
                                width: 64,
                           },
                           "& .MuiTypography-caption": {
                                width: 64,
                           },
                           "& .MuiPickersDay-root": {
                                width: 48,
                                height: 48
                           },
                           "& .MuiYearCalendar-root": {
                                width: 745
                           },                        
                           "& .MuiDatePickerToolbar-title": {
                                'font-size': '2rem'
                           },
                           "& .css-1hbyad5-MuiTypography-root": {
                                'font-size': '1rem'
                           },
                        }}                        
                            defaultValue={dayjs('2022-04-17')}
                            
                        />
                    </LocalizationProvider>
                </Box>
                </Box>
                
                <Divider />
                <Box>
                    <Typography>선택된 업체가 없습니다</Typography>
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{width:"90%", margin:"auto"}}>
                <Box sx={{display:"flex", minHeight:"400px", flexDirection:"row", justifyContent:"space-between"}}>
                    <Box sx={{width:"300px"}}>
                        <Box sx={{display:"flex",width:"300px", height:"330px",overflowY:"scroll", flexDirection:"column",textAlign:"center", border:"1px solid black"}}>
                            <Typography variant="h6" sx={{mb:1, position:"sticky", top:0,pt:2, backgroundColor:"white"}}>시공분야를 선택하세요</Typography>
                            {sliceCa2.map((one) => (
                                <Typography variant="h6" key={one.name}>{one.name}</Typography>
                            ))}
                            <CautionDialog setOpen={setOpen} open={open} />
                        </Box>
                        <Box sx={{width:"100%", justifyContent:"center", display:"flex"}}>
                        <Button onClick={handleOpen} sx={{textAlign:"center",mt:2, width:"200px", height:"40px", color:"white", backgroundColor:"#416292"}} >스케줄 안내문</Button>
                        </Box>
                    </Box>
                    <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ko}>
                        <StaticDatePicker 
                            displayStaticWrapperAs="desktop"
                            sx={{minWidth:"500px",fontSize: 34}}                        
                            defaultValue={dayjs('2022-04-17')}
                        />
                    </LocalizationProvider>
                </Box>
                </Box>
                <Divider />
                <Box>
                    <Typography>선택된 업체가 없습니다</Typography>
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Box sx={{width:"90%", margin:"auto"}}>
                <Typography>선택된 업체가 없습니다</Typography>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Box sx={{width:"90%", margin:"auto"}}>
                <Typography>선택된 업체가 없습니다</Typography>
            </Box>
        </TabPanel>
    </Box>)
}
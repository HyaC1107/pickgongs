import AvailabilityCalendar from "@/components/calendar/availability-calendar";
import CalendarFragment, { BookContext } from "@/components/calendar/calendar-fragment";
import CautionDialog from "@/components/picks/cautionDialog";
import React from "react";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import ko from "dayjs/locale/ko";
import dayjs from 'dayjs';
import { Box, Button,Typography,FormControlLabel,Checkbox,Grid,Card, CardContent, CardMedia, } from "@mui/material";
import { useContext, useState } from "react";
import { useRouter } from 'next/router';
const cards = [1, 2, 3];
const am = ["09:00", "09:30", "10:00","10:30","11:00","11:30"];
const pm = ["12:00", "12:30", "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"];
export type ReservedPeriod = [
    { checkin: Date | string; checkout: Date | string }
];
export default function SelectDays() {
    const router = useRouter();
    const ctx = useContext(BookContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const reserveHandle: React.MouseEventHandler = async(evt) => {
    //     evt.stopPropagation();
    //     if (ctx && ctx.data.checkin && ctx.data.checkout && ctx.data.productId) {
    //       const params = new URLSearchParams();
    //       params.append("numberOfGuests", ctx?.data.numberOfGuests!.toString());
    //       params.append("numberOfAdults", ctx?.data.numberOfAdults!.toString());
    //       params.append(
    //         "numberOfChildren",
    //         ctx?.data.numberOfChildren!.toString()!
    //         );
    //       params.append("checkin", format(ctx?.data.checkin, "yyyy-MM-dd"));
    //       params.append("checkout", format(ctx?.data.checkout, "yyyy-MM-dd"));
    //       params.append("productId", ctx.data.productId);
    //       const totalfee = ((hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) + Math.ceil(hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) * 0.14))*0.00075).toFixed(2);
    //       const response = await fetch(
    //         "/api/book/checkout",
    //         {
    //           method: "POST",
    //           body: JSON.stringify({productId:hosting._id, ...ctx.data, totalFee:totalfee}),
    //           headers: { "Content-type": "application/json" },
    //         }
    //       );
    //       const json = await response.json();
    //       // console.log(json);
    //       if(json.result){
    //         router.push(
    //           "/book/check/" + json?.data._id + "?" + params.toString()
    //         );        
    //       }else if(response.status===422){
    //         alert("이미 예약된 날짜입니다. 다른 날로 잡아주세요")
    //       }else{
    //         alert(json.error);
    //       }
    //     } else {
    //       ctx?.openDialog();
    //     }
    //   };

    return(
    <Box sx={{
        position: "relative",
        maxWidth: "1120px",
        margin: "auto",
        pb: 10,
        mt: 5,
        
    }}>
        <Box sx={{display:"flex", justifyContent:"space-around"}}>
            <Box sx={{width:"300px"}}>
                <Box sx={{display:"flex",width:"300px", height:"330px", flexDirection:"column",textAlign:"center", border:"1px solid black", p:2}}>
                    <Typography variant="h6">시공 선택</Typography>
                    <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary" />} label="철거" />
                    <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary"/>} label="설비" />
                    <FormControlLabel sx={{margin:"auto"}} labelPlacement="start" control={<Checkbox sx={{color:"#008A60"}} color="secondary"/>} label="샤시" />
                    <CautionDialog setOpen={setOpen} open={open} />
                </Box>
                <Box sx={{width:"100%", justifyContent:"center", display:"flex"}}>
                 <Button onClick={handleOpen} sx={{textAlign:"center",mt:2, width:"200px", height:"40px", color:"white", backgroundColor:"#416292"}} >방문시간 안내문</Button>
                </Box>
            </Box>
            <Box sx={{width:"60%", textAlign:"center"}}>
                <Typography variant="h4" sx={{mb:"60px"}}>철거</Typography>
                <Grid container spacing={2} sx={{ml:2, flexGrow:1}}>
                {cards.map((one) => (
                    <Grid item xs={12} sm={4}>
                        <Card
                        sx={{ maxWidth:"237px", height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                        <Box sx={{height:"180px", position:"relative"}}>
                            <CardMedia
                                component="img"
                                sx={{
                                height:"180px"
                                }}
                                src="/sample/sample1.png"
                                alt="random"
                            />
                        </Box>
                        <CardContent 
                            sx={{ flexGrow: 1, display:"flex", cursor:"pointer",  flexDirection:"column", justifyContent:"space-between" }}
                        >
                            <Typography gutterBottom variant="inherit" >
                                {"하늘 인테리어"}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
        <Box sx={{ backgroundColor:"#D9DEEA", maxWidth:"1200px", height:"500px", display:"flex",mt:4,p:2}}>
            <Box sx={{ml:2, minWidth:"500px", mt:5}}>
                 <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ko}>
                        <StaticDatePicker 
                            displayStaticWrapperAs="desktop"
                            sx={{minWidth:"500px",fontSize: 34}}                        
                            defaultValue={dayjs('2022-04-17')}
                        />
                    </LocalizationProvider>
            </Box>
            <Box sx={{ml:4,mt:4, minWidth:"500px",p:1}}>
                <Typography variant="h6">17일</Typography>
                <Box sx={{pl:2, mt:2}}>
                    <Typography variant="subtitle1">오전/AM</Typography>
                    <Grid container spacing={2} sx={{ flexGrow:1}}>
                        {am.map((one) => (
                            <Grid item sm={3} sx={{cursor:"pointer"}}>
                                <Typography sx={{width:"100px", height:"30px", border:"1px solid black", borderRadius:"2px", fontSize:21, textAlign:"center"}}>{one}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{pl:2, mt:2}}>
                    <Typography variant="subtitle1">오후/PM</Typography>
                    <Grid container spacing={2} sx={{ flexGrow:1}}>
                        {pm.map((one) => (
                            <Grid item sm={3} sx={{cursor:"pointer"}}>
                                <Typography sx={{width:"100px", height:"30px", border:"1px solid black", borderRadius:"2px", fontSize:21, textAlign:"center"}}>{one}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            {/* <Typography variant="subtitle2" sx={{position:"static", bottom:0}}>*30분 단위로 희망시간 선택 / *타업체와 중복 불가능</Typography> */}
        </Box>
        <Box sx={{textAlign:"center", mt:4}}>
            <Button sx={{width:"200px",height:"72px", border:"2px solid black", borderRadius:"1rem", mr:4, fontSize:29}}>이전</Button>
            <Button sx={{width:"200px",height:"72px", border:"2px solid black", borderRadius:"1rem", fontSize:29}} onClick={()=>router.push("/picks/1/selectResult")}>일괄요청</Button>
        </Box>
    </Box>
    )
}

SelectDays.isDetail = false;
SelectDays.isRaw = false;
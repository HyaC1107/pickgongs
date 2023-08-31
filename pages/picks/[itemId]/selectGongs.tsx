import ContractorItem from "@/components/contractor/listItem";
import AddressBar from "@/components/picks/addressBar";
import SideBar from "@/components/picks/sideBar";
import * as React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from 'next/router';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function SelectGongs() {
    const router = useRouter();
    const [type, setType] = React.useState<boolean>(true);
    return(
    <Box sx={{
        position: "relative",
        maxWidth: "1120px",
        margin: "auto",
        pb: 10,
        mt: 5,
        
    }}>
        <AddressBar type={type} setType={setType} />
        <Box sx={{display:"flex", justifyContent:"space-around", mt:"80px"}}>
            {/* <Box sx={{width:"40%"}}>
                <SideBar />
            </Box> */}
            <Box>
            <Typography className="title2" sx={{textAlign:"center", mb:"32px"}}>종합인테리어</Typography>
            <Grid container spacing={2} sx={{ flexGrow:1}}>
                {cards.map((one) => (
                    <ContractorItem />
                ))}
            </Grid>
            </Box>
        </Box>
        {/* <Box sx={{textAlign:"center"}}>
            <Button>이전</Button>
            <Button onClick={()=>router.push("/picks/1/selectDays")}>선택하기</Button>
        </Box> */}
    </Box>
    )
}


SelectGongs.isDetail = false;
SelectGongs.isRaw = false;
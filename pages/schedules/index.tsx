import CautionDialog from "@/components/picks/cautionDialog";
import ScheduleTabInfo from "@/components/schedules/schedulesTab";
import { Box,Button,Typography } from "@mui/material";
import React from "react";
import { useRouter } from 'next/router';
export default function Schedules() {
    const router = useRouter();
    
    return(
    <Box
        sx={{
          position: "relative",
          maxWidth: "1280px",
          margin: "auto",
          pb: 10,
          mt: 5,
        }}
    >
        <ScheduleTabInfo />
        
    </Box>)
}

Schedules.isDetail = false;
Schedules.isRaw = false;
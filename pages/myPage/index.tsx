import {Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function MyPage() {
    const router = useRouter();
    const { data } = useSession();


    return(
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        margin: "auto"
      }}
    >
        <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid item xs={12}>
                <Box>{data?.user?.image}</Box>
                <Typography component="h1" variant="h3">
                    {/* {data?.user?.name}  */}
                    화난 어피치 = 업체명
                </Typography>
                <Typography component="h1" variant="h3">
                    {/* {data?.user?.name}  */}
                    010-0000-0000
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <Typography>공지사항</Typography>
                </Box>
                <Box>
                    <Typography>우리가게 꾸미기</Typography>
                </Box>
                <Box>
                    <Typography>광고결제</Typography>
                </Box>
                <Box>
                    <Typography>업체정보 수정요청</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <Typography>자주 묻는 질문</Typography>
                </Box>
                <Box>
                    <Typography>1:1 문의하기/소비자 신고</Typography>
                </Box>
                <Box>
                    <Typography>불편사항 및 개선 문의</Typography>
                </Box>
                <Box>
                    <Typography>회원정보 수정하기</Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>)
}
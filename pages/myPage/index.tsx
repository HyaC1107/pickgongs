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
        <Grid container component="main" sx={{ height: "100vh", pt:"130px" }}>
            <Grid item xs={12} sx={{height:"190px", backgroundColor:"#F9F9F9",pl:"133px",pr:"133px", justifyContent:"space-between", alignItems:"center"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <img src="/icons/myPage/그룹 3203.png" width={"100px"} height={"100px"} />
                    <Typography className="title2" sx={{ml:"34.5px"}}>
                        {/* {data?.user?.name}  */}
                        화난 어피치 = 업체명
                    </Typography>
                </Box>
                <Typography className="title2">
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
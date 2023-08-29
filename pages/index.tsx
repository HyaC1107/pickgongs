import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import mongooseInit from '../lib/mongooseInit';
import Contractor from './contractor';


export default function Home() {
  const { data, status } = useSession();
  return (         
    <Grid container spacing={2} sx={{mt:6}}>
      <Contractor />
    </Grid>
  );
}


Home.isRaw = false;
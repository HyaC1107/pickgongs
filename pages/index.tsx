import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import mongooseInit from '../lib/mongooseInit';
import Contractor from './contractor';
import PickItem, {PickItemData} from '@/lib/models/pickItem';


export default function Home() {
  const { data, status } = useSession();
  console.log(data?.user?.email , status);
  return (         
    <Grid container spacing={2} sx={{mt:6}}>
      <Contractor />
    </Grid>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  mongooseInit();
  const pickitem = await PickItem.find();
  if (!pickitem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pickitem: JSON.parse(JSON.stringify(pickitem)),
    },
  };
};

Home.isRaw = false;
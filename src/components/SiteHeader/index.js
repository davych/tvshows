import { Grid } from '@mui/material';
import  Box from '@mui/material/Box';
import React from 'react'
import BreadCrumbs from '../BreadCrumbs'
import SiteBanner from '../SiteBanner'

export default function SiteHeader() {
  let breadsValue = ["Shows", "People", "Networks", "Web Channels", "Articles", "Schedule", "Calendar", "Countdown", "Forums"];
  return (
    <div>
      <Box>
       <SiteBanner />
      </Box>
      <BreadCrumbs breads = {breadsValue} />

    </div>
  )
}


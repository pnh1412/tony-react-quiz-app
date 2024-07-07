import React from 'react'
import { Box } from '@mui/material'

import ResponsiveAppBar from '../components/app-bar'

type IProps = {
  children?: React.ReactNode
}

// function MainLayout({ children }: React.PropsWithChildren)
function MainLayout({ children }: IProps) {
  return (
    <>
      <Box mb={5}>
        <ResponsiveAppBar />
      </Box>

      {children}

    </>
  )
}

export default MainLayout
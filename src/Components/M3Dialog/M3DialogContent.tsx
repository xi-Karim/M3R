import { DialogContent, DialogContentProps } from '@mui/material';
import React from 'react'

interface M3DialogContentProps extends DialogContentProps{
    children?: React.ReactNode;
    dividers?: boolean
}

const M3DialogContent = ({children , dividers} : M3DialogContentProps ) => {
  return (
    <DialogContent dividers={dividers}>{children}</DialogContent>
  )
}

export default M3DialogContent
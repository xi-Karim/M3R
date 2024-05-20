import { DialogContentText, DialogContentTextProps } from '@mui/material'
import React from 'react'


interface M3DialogContentTextProps extends DialogContentTextProps{
    children?: React.ReactNode;

}


const M3DialogContentText = ({children} : M3DialogContentTextProps ) => {
  return (
    <DialogContentText>{children}</DialogContentText>
  )
}

export default M3DialogContentText
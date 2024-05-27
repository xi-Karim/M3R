import { DialogTitle, DialogTitleProps } from '@mui/material'
import React from 'react'
interface M3DialogTitle extends DialogTitleProps{
    children?: React.ReactNode;

}
const M3DialogTitle = ({children} : M3DialogTitle ) => {
  return (
    <DialogTitle>{children}</DialogTitle>

  )
}

export default M3DialogTitle
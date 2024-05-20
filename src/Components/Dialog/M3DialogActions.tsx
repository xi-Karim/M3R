import { DialogActions, DialogActionsProps } from '@mui/material'
import React from 'react'
interface M3DialogActions extends DialogActionsProps{
    children: React.ReactNode,
    disableSpacing:boolean
}
const M3DialogActions = ({children , disableSpacing} : M3DialogActions) => {
  return (
    <DialogActions disableSpacing={disableSpacing}>{children}</DialogActions>
  )
}

export default M3DialogActions
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Form from './Form'

const ModalDialog = ({ open, handleClose }) => {
    return (
        //props received from Login.js
        <Dialog open={open} onClose={handleClose}>
          <Form handleClose={handleClose} />
        </Dialog>
    )
}

export default ModalDialog

import React from 'react';
import { Dialog, DialogContent, DialogTitle, Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const SectionModal = ({ open, handleClose, data }) => {
  const style = {
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    m: 'auto'
  };
  const doneHandle = ()=>{
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className='w-100'
    >
      <DialogTitle id="dialog-title">Form Submission Data</DialogTitle>
      <DialogContent>
        <Box sx={style}>
            <h3>
                Your details :
            </h3>
          <Typography id="dialog-description" >
            <p>
            <strong>Name:</strong> {data?.name} 

            </p>
            <p>
            <strong>Email:</strong> {data?.email} 

            </p>
            <p>
            <strong>Message:</strong> {data?.message}

            </p>
            <p><b>Note:</b> wait for your replay i send you message in your email</p>
            <button className="btn py-2 px-3 text-white bg-primary" onClick={doneHandle}>Done</button>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SectionModal;

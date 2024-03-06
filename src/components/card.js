import '../App.css';

import Button from "@mui/material/Button";
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';



const UploadButton = styled(Button)(({theme})=>({
    color:'#F7F6BB',
    backgroundColor:'#87A922',
    '&:hover':{
        backgroundColor:'#F7F6BB',
        color:'#114232'
    },
    margin:'15px'
}))

const style = {
    position : 'absolute',
    top:'50%',
    left:'50%',
    transform : 'translate(-50%, -50%)',
    bgcolor:'#FFFFFF',
    borderRadius:"10px",
    boxShadow:24,
    p:4,
}

const VisuallyHiddenInput = styled('input')({
    clip:'rect(0 0 0 0)',
    clipPath:'inset(50%)',
    height:1,
    overflow:'hidden',
    position:'absolute',
    bottom:0,
    left:0,
    whiteSpace:'nowrap',
    width:'1',
});


export default function Card(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

 
    return(
        <div>
            <div className="card">
                <div className="cardTitle">
                    {props.title}
                </div>
                <div className="cardCap">
                    {props.cap}
                </div>
                <div className="cardButtons">
                    <UploadButton onClick={handleOpen}>Upload</UploadButton>
                </div>
            </div>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modalUpload"
                aria-describedby="upload-sample">
                    <Box sx={style}>
                       <p className='modalTitle'>Add a audio sample {props.title}</p>
                            <UploadButton
                            tabIndex={-1}
                            startIcon={<FileUploadIcon/>}
                            component="label"
                            style={{marginLeft:"25%"}}>
                                Upload Audio
                                <VisuallyHiddenInput type='file' accept='.mp3,audio' onChange={(e)=>props.onClick(e.target.files[0])}/>
                            </UploadButton>
                        <p className='modalCap'>Maximum of 10-15 seconds</p>
                    </Box>
                </Modal>
        </div>
    )
}

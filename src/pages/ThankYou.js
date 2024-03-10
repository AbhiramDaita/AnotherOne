import '../App.css';
import { CircularProgress,Box } from '@mui/material';
import Cookies from 'universal-cookie';
import React from 'react';

export default function ThankYou(){
    const cookies = new Cookies()
    const ot = cookies.get("output")
    const [output,setOutput] = React.useState("")
    switch(ot){
        case '0':
            setOutput("Negative Asymp")
            break
        case '1':
            setOutput("Negative Mild")
            break
        case '2':
            setOutput("Negative Moderate")
            break
        case '3':
            setOutput("Positive Asymp")
            break;
        case '4':
            setOutput("Positive Mild")
            break;
        default:
            setOutput("Positive Moderate")

    }
    return(
        <div className="thankYouHolder">
            <div className="thankYouContent">
                <div className="thankYouTitle">
                    Thank You
                </div>
                <div className="thankYouCap">
                    we appreciate your enthusiasm in Improving Technology in Health Care.
                </div>
                <div className='result'>
                    {output &&    <Box sx={{display:'flex'}} className="resultBox">
                        <CircularProgress/>
                        <p className='resultCap'>Stay Patient, while we get your results.</p>
                    </Box>}

                    <p className='resultO'><span className='start'>Result : </span>{output} (70%)</p>
                </div>
            </div>
        </div>
    )
}
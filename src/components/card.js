
import '../App.css';

import Button from "@mui/material/Button";

export default function Card(props){
    return(
        <div className="card">
        <div className="cardTitle">
            {props.title}
        </div>
        <div className="cardCap">
            {props.cap}
        </div>
        <div className="cardButtons">
            <Button variant="contained">START RECORDING</Button>
            <Button variant='contained'>PLAY SAMPLE</Button>
        </div>
    </div>
    )
}
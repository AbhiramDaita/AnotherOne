
import { Button } from "@mui/material";
import styled from '@emotion/styled';


const ColorButton = styled(Button)(({theme})=>({
    color:'#FBF9F1',
    backgroundColor:'#22A699',
    fontFamily:'League Spartan',
    fontWeight:700,
    padding:'10px',
    letterSpacing:2,
    '&:hover':{
        backgroundColor:'#CEEDC7'
    },
    fontSize:'19px',
    width:'200px'
}))


export default function FloatingButton(props){
    return(
        <div className="floatingButton">
            <ColorButton>{props.title}</ColorButton>
        </div>
    )
}
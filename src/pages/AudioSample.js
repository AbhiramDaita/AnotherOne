
import '../App.css';

import Card from '../components/card';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Header from '../components/header';

export default function AudioSample(){
    return(
        <div>
            <Header/>
        <div className="audioHolder">
            <div>
            <p className='backgroundText'>Upload</p>
                <div className="note">
                    <ErrorOutlineIcon/>
                    <p className='hello'> Please make sure you are in a quiet environment and keep your device around 20 cm from your face.</p>
                </div>
                <Card title="Breathing(shallow)" cap="Breathe fast 5 times"/>
                <Card title="Cough(shallow)" cap="Cough mildly 3 times"/>
                <Card title="Vowel /a/" cap="Say /a/ as in made and sustain as long as possible"/>
                <Card title="Vowel /e/" cap="Say /e/ as in beet and sustain as long as possible"/>
                <Card title="Vowel /o/" cap="Say /o/ as in cool and sustain as long as possible"/>
            </div>
        </div>
        </div>
    )
}

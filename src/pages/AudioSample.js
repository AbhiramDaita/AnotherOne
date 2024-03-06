
import '../App.css';

import Card from '../components/card';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Header from '../components/header';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import Cookies from 'universal-cookie';


export default function AudioSample(){

    const cookies = new Cookies();
    const storage = getStorage();
   
    
    const handleClick = (param)=>{
        const id = cookies.get("myCat");
        const storageRef = ref(storage,`files/${id}/${param.name}`);
        uploadBytes(storageRef, param).then((snapshot)=>{
           console.log('Uploaded a file'); 
        });
    }

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
                <Card title="Breathing(shallow)" cap="Breathe fast 5 times" onClick={handleClick}/>
                <Card title="Cough(shallow)" cap="Cough mildly 3 times" onClick={handleClick}/>
                <Card title="Vowel /a/" cap="Say /a/ as in made and sustain as long as possible" onClick={handleClick}/>
                <Card title="Vowel /e/" cap="Say /e/ as in beet and sustain as long as possible" onClick={handleClick}/>
                <Card title="Vowel /o/" cap="Say /o/ as in cool and sustain as long as possible" onClick={handleClick}/>
            </div>
        </div>
        </div>
    )
}

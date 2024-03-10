
import '../App.css';

import Card from '../components/card';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Header from '../components/header';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import Cookies from 'universal-cookie';
import FloatingButton from '../components/FloatingButton';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function AudioSample(){
    const navigate = useNavigate()
    const cookies = new Cookies();
    const storage = getStorage();
    
    
    const [file, setFile] = React.useState()

    const handleClick = (param,title)=>{
        if(title === "Cough(Shallow)"){
            setFile(param)
            const id = cookies.get("myCat");
            const storageRef = ref(storage,`files/${id}/${param.name}`);
            uploadBytes(storageRef, param).then((snapshot)=>{
               console.log('Uploaded a file'); 
            });
        }
    }
    const navigateClick = ()=>{
        const formData = new FormData()
        const imageFile = file
        formData.append("audio_file",imageFile)
        axios
            .post("http://127.0.0.1:5000/predict",formData,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then((r)=>{
                cookies.set("output",r.data)
                navigate("/end")
            })
      
    }

    return(
        <div>
            <Header/>
        <div className="audioHolder">
            <FloatingButton title="continue" onClick={navigateClick}/>
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

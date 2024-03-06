
// Import for css
import '../App.css';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormGroup,Button} from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Header from '../components/header';
import FloatingButton from '../components/FloatingButton';
import axios from 'axios';
import Cookies from 'universal-cookie';


const genders = [
    {
        value:'MALE',
        label:'Male',
    },
    {
        value:'FEMALE',
        label:'Female',
    },
    {
        value:'OTHER',
        label:'Other'
    }
];

export default function UserDetails(){

    const [selectedOne, setSelectedOne] = React.useState("")
    const handleSelectedOne = ev =>{
        setSelectedOne(ev.target.value)
    }
    
    const [selectedTwo, setSelectedTwo] = React.useState("")
    const handleSelectedTwo = ev =>{
        setSelectedTwo(ev.target.value)
    }

    const [selectedThree,setSelectedThree] = React.useState("")
    const handleSelectedThree = ev =>{
        setSelectedThree(ev.target.value)
    }
    const [selectedFour,setSelectedFour] = React.useState("")
    const handleSelectedFour = ev =>{
        setSelectedFour(ev.target.value)
    }
    const [selectedFive,setSelectedFive] = React.useState("")
    const handleSelectedFive = ev =>{
        setSelectedFive(ev.target.value)
    }

    const [age,setAge] = React.useState(0);
    const handleAge = ev =>{
        setAge(ev.target.value)
    }
    const [gender, setGender] = React.useState("")
    const handleGender = ev =>{
        setGender(ev.target.value)
    }

    const [state, setState] = React.useState({
        cold:false,
        cough:false,
        fever:false,
        diarrhoea:false,
        sore:false,
        noneOne:false,
        loss:false,
        muscle:false,
        fatigue:false,
        breath:false,
        noneTwo:false,
        pneumonia:false,
        asthma:false,
        chronic:false,
        othersOne:false,
        noneThree:false,
        hypertension:false,
        heart:false,
        diabetes:false,
        othersTwo:false,
        noneFour:false,
    });

    const cookies = new Cookies();


    const handleChange = (event)=>{
        setState({
            ...state, 
            [event.target.name] : event.target.checked,
        });
    };

    const {cold, cough, fever, diarrhoea, sore, noneOne, loss, muscle, fatigue, breath, noneTwo, pneumonia, asthma, chronic, othersOne, noneThree, hypertension, heart, diabetes, othersTwo, noneFour} = state;

    const oneRef = React.useRef(null);
    const oneClick = () => oneRef.current?.scrollIntoView({behavior:'smooth'});

    const twoRef = React.useRef(null);
    const twoClick = () => {
        twoRef.current?.scrollIntoView({behavior:'smooth'})}

    const handleClick =()=>{
        
        axios
            .post("http://localhost:5000/anotherone-efb39/asia-south1/api/UserData",{
                'age':age,
                'gender':gender,
                'engProf':selectedOne,
                'reUser':selectedTwo,
                'maskOn':selectedThree,
                'smoke':selectedFour,
                'vacStat':selectedFive,
                'symptoms':[''],
                'conditions':[''],
                'ailments':[''],
                'existing':[''],
            })
            .then((res)=>{
                cookies.set('myCat',res.data.id);
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div className="detailsHolder">
            <Header/>
            <div className='noteText child'>
                <FloatingButton title="continue" onClick={oneClick}/>
                <div>
                        <p>Dear Users,We kindly request your cooperation in providing important information for analysis. Your input will significantly enhance our ability to serve you better. Please take a few moments to complete the requested information.</p>
                        <div className='GenDet'>
                            <TextField
                                required
                                id="ageUser"
                                label="Age"
                                defaultValue="0"
                                type='number'
                                onChange={handleAge}
                            />
                            <TextField
                                id="genderSelect"
                                select
                                label="Gender"
                                defaultValue="MALE"
                                sx={{marginLeft:10,width:200}}
                                onChange={handleGender}
                            >
                                {genders.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                </div>
           
            </div>
                
            <div className='OtherData child' ref={oneRef}>
                <FloatingButton title="continue" onClick={twoClick}/>
                <p className='backgroundText'>Section Two</p>
              <div>
              <div className='english line'>
                    <FormControl>
                        <FormLabel id="EnglishProf">Are you proficient in English?* </FormLabel>
                        <RadioGroup onChange={handleSelectedOne} value={selectedOne}
                        row
                        aria-labelledby='EnglishProf'
                        name="row-English">
                            <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="no" control={<Radio />} label="No"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='returnUser line'>
                    <FormControl>
                        <FormLabel id="returnUser">Are you a returning user?</FormLabel>
                        <RadioGroup onChange={handleSelectedTwo} value={selectedTwo}
                        row
                        aria-labelledby='returnUser'
                        name="row-Return"
                        >
                            <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="no" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='maskon line'>
                    <FormControl>
                        <FormLabel id="maskOn">Are you wearing a mask now?*</FormLabel>
                        <RadioGroup onChange={handleSelectedThree} value={selectedThree}
                        row
                        aria-labelledby='maskOn'
                        name="row-Mask"
                        >
                            <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="no" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='smokeHabit line'>
                    <FormControl>
                        <FormLabel id="smokeOn">Do you have smoking habits?*</FormLabel>
                        <RadioGroup onChange={handleSelectedFour} value={selectedFour}
                        row
                        aria-labelledby='smokeOn'
                        name="row-Smoke"
                        >
                            <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="no" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='vacinationStat line'>
                    <FormControl>
                        <FormLabel id="vacStat">Vaccination Status?*</FormLabel>
                        <RadioGroup onChange={handleSelectedFive} value={selectedFive}
                        row
                        aria-labelledby='vacStat'
                        name="row-Vac"
                        >
                            <FormControlLabel value="2" control={<Radio/>} label="2 Doses"/>
                            <FormControlLabel value="1" control={<Radio/>} label="1 Dose"/>
                            <FormControlLabel value="0" control={<Radio/>} label="Not Done"/>
                        </RadioGroup>
                    </FormControl>
                </div>
              </div>
            </div>
            <div className='HealthStat child' ref={twoRef}>
            <FloatingButton title="continue" onClick={handleClick}/>
            <p className='backgroundText'>Section Three</p>
                 <div className='left'>
                 <div className='symptom line'>
                        <FormControl component="fieldset" variant='standard'>
                            <FormLabel component="legend">Do you have any of these symptoms?*</FormLabel>
                            <FormGroup
                            row>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={cold} onChange={handleChange} name="cold"/>
                                    }
                                    label="Cold"/>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={cough} onChange={handleChange} name="cough"/>
                                    }
                                    label="Cough"/>
                                <FormControlLabel 
                                    control={
                                        <Checkbox checked={fever} onChange={handleChange} name="fever"/>
                                    }
                                    label="Fever"/>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={diarrhoea} onChange={handleChange} name="diarrhoea"/>
                                    }
                                    label="Diarrhoea"/>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={sore} onChange={handleChange} name="sore"/>
                                    }
                                    label="Sore Throat" />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={noneOne} onChange={handleChange} name="noneOne"/>
                                    }
                                    label="None of the above"/>
                            </FormGroup>
                        </FormControl>
                    </div>
                    <div className='conditions line'>
                        <FormControl component="fieldset" variant='standard'>
                                <FormLabel component="legend">Do you have any of these conditions?*</FormLabel>
                                <FormGroup
                                row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={loss} onChange={handleChange} name="loss"/>
                                        }
                                        label="Loss of Smell or Taste"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={muscle} onChange={handleChange} name="muscle"/>
                                        }
                                        label="Muscle Pain"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={fatigue} onChange={handleChange} name="fatigue"/>
                                        }
                                        label="Fatigue"
                                    />
                                    <FormControlLabel 
                                        control={
                                            <Checkbox checked={breath} onChange={handleChange} name="breath"/>
                                        }
                                        label="Breathing Difficulties"
                                    />
                                    <FormControl 
                                        control={
                                            <Checkbox checked={noneTwo} onChange={handleChange} name="noneTwo"/>
                                        }
                                        label="None of the above"
                                    />
                                </FormGroup>
                        </FormControl>
                    </div>
                    <div className='respiratory line'>
                        <FormControl component="fieldset" variant='standard'>
                            <FormLabel component="legend">Do you have any of these respiratory ailments?*</FormLabel>
                            <FormGroup
                            row>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={pneumonia} onChange={handleChange} name="pneumonia"/>
                                    }
                                    label="Pneumonia"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={asthma} onChange={handleChange} name="asthma"/>  
                                    }
                                    label="Asthma"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={chronic} onChange={handleChange} name="chronic"/>
                                    }
                                    label="Chronic Lung Disease"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={othersOne} onChange={handleChange} name="othersOne"/> 
                                    }
                                    label="Others"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={noneThree} onChange={handleChange} name="noneThree"/>
                                    }
                                    label="None of the above"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                    <div className='existing'>
                        <FormControl component="fieldset" variant='standard'>
                            <FormLabel component="legend">Do you have any of these pre-existing conditions?*</FormLabel>
                            <FormGroup

                            row>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={hypertension} onChange={handleChange} name="hypertension"/>
                                    }
                                    label="Hypertension"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={heart} onChange={handleChange} name="heart"/>
                                    }
                                    label="Ischemic Heart Disease"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={diabetes} onChange={handleChange} name="diabetes"/>
                                    }
                                    label="Diabetes"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={othersTwo} onChange={handleChange} name="othersTwo"/>
                                    }
                                    label="Others"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={noneFour} onChange={handleChange} name="noneFour"/>
                                    }
                                    label="None of the above"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                 </div>
               
            </div>
            </div>
    )
}

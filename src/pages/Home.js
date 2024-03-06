
// Import for css
import '../App.css'

import {useNavigate} from 'react-router-dom';
import Header from '../components/header';


export default function Home(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/details");
    }

    return(
        <div className='HomeHolder'>
            <Header/>
            <div className='imageContent child'>
                <div>
                    <div className='imageText'>
                        "The human body is the best picture of the human soul."
                    </div>
                    <div className="buttonHolder">
                        <p className="button" onClick={handleClick}>Take the Test</p>
                    </div>
                </div>
            </div>
            <div className='about child'>
                <div>
                    <div className='aboutTitle'>
                        What we do?
                    </div>
                    <div className="aboutContent">
                    Introducing our cutting-edge web application that empowers medical professionals with the ability to diagnose COVID-19 using audio samples. Seamlessly upload respiratory sounds and our advanced algorithms will analyze them, providing a rapid and accurate diagnosis. This innovative tool leverages the power of machine learning to detect the subtle acoustic patterns associated with COVID-19, enabling timely intervention and improved patient outcomes. With our application, healthcare providers can enhance diagnostic accuracy, optimize resource allocation, and streamline patient care during this critical time.
                    </div>
                </div>
            </div>
            <div className="contact child">
                <div>
                    <div className="contactTitle">
                        Write to us
                    </div>
                    <div className="contactCap">
                        we value your feedback.
                    </div>
                    <div className="contactContent">
                        teamempathie@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}
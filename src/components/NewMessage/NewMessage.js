import axios from "axios";


// React Hooks
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


// Store Actions
import { contactsActions } from "../../store";


// Styles
import classes from './NewMessage.module.css';


const NewMessage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const textRef = useRef();
    const otpRef = useRef();

    const [ text, setText ] = useState('');
    const [ otp, setOTP ] = useState('Your OTP');

    const id = params.contactID;

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        console.log(textRef.current.value);

        try {
            const res = await axios.post(`http://localhost:4500/sendMessage/${ id }`, {
                otp: otp,
                text: textRef.current.value,
            });
            console.log(res);
            navigate('/');
        } catch(err) {
            console.log('Oh no! Could not send message!');
            console.log(err);
        }
    };

    const otpGenerateHandler = () => {
        console.log(otp);
        const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        console.log(otp);
        setOTP(randomNumber);
    };

    const textChangeHandler = () => {
        setText(textRef.current.value);
    };
    
    return (
        <div className={ classes.newMessage }>
            <div className={ classes.otp }>
                <p className={ classes.otpText }>{ otp }</p>
                <button onClick={ otpGenerateHandler } className={ classes.otpGenerateButton }>Generate OTP</button>
            </div>
            <div>
                <form onSubmit={ formSubmitHandler } className={ classes.messageForm }>
                    <div>
                        <textarea onChange={ textChangeHandler } name='message' ref={ textRef } placeholder='Type message here, with the OTP generated above' rows='7' cols='60'></textarea>
                    </div>
                    { text.length !== 0 ? <button type='submit' className={ classes.sendButton }>Send</button> : <button type='submit' className={ classes.sendButton } disabled>Send</button> }
                </form>
            </div>
        </div>
    );
};


export default NewMessage;
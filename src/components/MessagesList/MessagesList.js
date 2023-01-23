// Packages
import axios from 'axios';


// React Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// Components
import Message from '../Message/Message';


// Store Actions
import { contactsActions } from '../../store/index';


// Styles
import classes from './MessagesList.module.css';


const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};


const merge = (left, right) => {
    let result = [];

    while (left.length && right.length) {
        let a = new Date(left[0].createdAt);
        let b = new Date(right[0].createdAt);
        if (a.getTime() > b.getTime()) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
};


const MessagesList = () => {
    const dispatch = useDispatch();
    
    const messages_list = useSelector((state) => state.contacts.messagesList);
    
    const getMessages = async () => {
        try {
            const res1 = await axios.get(`http://localhost:4500/getMessages`);
            console.log(res1);
            let x = res1.data.messages;
            if (x.length !== 0) {
                x = mergeSort(x);
                console.log(x);
            }
            dispatch(contactsActions.changeMessagesList(x));
        } catch (err) {
            console.log('Oh no! Could not fetch the messages!');
            console.log(err);
        }
    };

    useEffect(() => {
        getMessages();
    }, []);
    

    return (
        <>
            <h2 className={ classes.messageHeading }>Messages History</h2>
            { messages_list.length === 0 ? <p>No Message History Found</p> : <ul className={ classes.messages }>
                { messages_list.map((message) => (
                    <Message message={ message } key={ message.otp } />
                )) }
            </ul> }
        </>
    );
};


export default MessagesList;
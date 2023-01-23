// Packages
import axios from 'axios';


// React Hooks and Components
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// Store Actions
import { contactsActions } from '../../store/index';


// Styles
import classes from './ContactsList.module.css';


const ContactsList = () => {
    const dispatch = useDispatch();

    const contactsList = useSelector((state) => state.contacts.contactsList);
    
    useEffect(() => {
        const getFiles = async () => {
            try {
                const res = await axios.get('http://localhost:4500/getContacts');
                console.log(res.data.contacts);
                dispatch(contactsActions.changeContactsList(res.data.contacts));
            } catch (err) {
                console.log('Oh no! Could not fetch contacts');
                console.log(err);
            }
        };

        getFiles();
    }, []);

    return (
        <>
            <h2 className={ classes.contactHeading }>Contacts List</h2>
            <ul className={ classes.contacts }>
                { contactsList.map((contact) => (
                    <li key={ contact.id } className={ classes.contact }>
                        <Link to={ `/${ contact.id }` } className={ classes.contactName }>{ contact.firstName } { contact.lastName }</Link>
                    </li>
                )) }
            </ul>
        </>
    );
};


export default ContactsList;
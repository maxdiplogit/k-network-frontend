// React Hooks
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


// Components
import NewMessage from '../NewMessage/NewMessage';


// Styles
import classes from './Contact.module.css';


const Contact = () => {
    const params = useParams();

    const contactsList = useSelector((state) => state.contacts.contactsList);

    const contactID = params.contactID;

    console.log(contactID);
    
    let contact = {};

    for (let c of contactsList) {
        if (c.id === parseInt(contactID)) {
            contact = c;
            break;
        }
    }

    console.log(contact);

    return (
        <div className={ classes.contactInfo }>
            <h1 className={ classes.contactName }>{ contact.firstName } { contact.lastName }</h1>
            <h3 className={ classes.contactNumber }>{ contact.contact }</h3>
            <Link to={ `/${ contact.id }/newMessage` } className={ classes.sendMessageButton }>Send Message</Link>
        </div>
    );
};


export default Contact;
// Components
import NavBar from '../NavBar/NavBar';
import ContactsList from '../ContactsList/ContactsList';
import MessagesList from '../MessagesList/MessagesList';


// Styles
import classes from './Home.module.css';


const Home = () => {
    return (
        <div className={ classes.home }>
            <div>
                <NavBar />
            </div>
            <div className={ classes.contactsList }>
                <ContactsList />
            </div>
            <div className={ classes.messagesList }>
                <MessagesList />
            </div>
        </div>
    );
};


export default Home;
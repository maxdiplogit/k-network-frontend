// Packages
import dateFormat from 'dateformat';


// Styles
import classes from './Message.module.css';


const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]


const Message = (props) => {
    const date = new Date(props.message.createdAt);

    return (
        <li className={ classes.message }>
            <p>{ props.message.name }</p>
            <p>{ date.getDate() } { months[ date.getMonth() ] }, { date.getFullYear() } { `[ ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() } ]` }</p>
            <p>{ props.message.otp }</p>
        </li>
    );
};


export default Message;
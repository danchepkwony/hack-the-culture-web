import React, {useState} from 'react';
import './Messenger.css';

const InitialState = {
  text: "",
  timestamp: "",
  user_id: ""
}

function Messenger() {
    const [messages, setMessages] = useState([
      localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : InitialState]);

    const onSend = () =>
    { 
        let message = document.getElementById('message_input').value;
        let currentMessages = messages;
        currentMessages.push({text: message, timestamp: '', user_id: "111"});
        setMessages(currentMessages);
        localStorage.setItem('messages', JSON.stringify(currentMessages));
    }

  return (
    <div className="Messenger">
      <div className="Messenger-messages">{messages.map((message, index) =>{
          return (
          <div key = {index} className = "Messenger-messages-text">
            <div>{message.text}</div>
          </div>)
      })}</div> 
      <form method='post' className ="Messenger-input" action="http://localhost:3000"> 
        <input type="text" id="message_input" className = "Messenger-input-text" />
        <button className = "Messenger-input-button"  onClick={onSend}>Send</button>
      </form>
    </div>
  );
}

export default Messenger;
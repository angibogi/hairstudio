import React, { useRef,useState} from 'react'
import logo from './assets/logo.png'
import './App.css'
import emailjs from '@emailjs/browser';
import {Helmet} from "react-helmet";

function App() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [label, setLabel] = useState(true);

    
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ocyg4eg', 'template_23brcv7', form.current, 'dHaQFUpZc8m4OrXdO')
        .then((result) => {
          console.log(result.text);
          setDone(true);
          setLabel(false);
        },
        (error) => {
          console.log(error.text);
        }
        
        );
        e.target.reset();
    };

  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Hair Studio - Newsletter</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
    <div class="contact_image">
    <img src={logo} alt="logo"/>
    </div>
    {label ?
    <div class="contact_text">
    <h1>Iscriviti per ricevere sconti personalizzati!</h1>
    </div>
    : null}
    {label ?
    <form ref={form} onSubmit={sendEmail} >
    
        <div class="contact_box">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="user_name" required/>

        <label for="surname">Cognome:</label>
        <input type="text" id="cognome" name="user_surname" required/>

        <label for="birthdate">Data di nascita:</label>
        <input type="date" id="birthdate" name="birthdate" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="user_email" required/>

        <label for="phone">Numero di telefono:</label>
        <input type="tel" id="phone" name="user_phone" required/>
        </div>
        <div class="contact_button">
        <button type="submit" value="Send">Invia</button>
        </div>
        
    </form>
    : null}
    {done ? <div><h1>La ringraziamo per averci contattato! </h1> </div>  : null}
    </>
  )
}

export default App

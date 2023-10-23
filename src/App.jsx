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
  
      emailjs.sendForm('service_2kl80zv', 'template_iiadgy2', form.current, 'd5XJP6UfiJqr7E5vQ')
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
    <div class="contact_text">
    <h1>Iscriviti per ricevere sconti personalizzati!</h1>
    </div>

    <form ref={form} onSubmit={sendEmail} >
    {label ?
        <div class="contact_box">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required/>

        <label for="surname">Cognome:</label>
        <input type="text" id="cognome" name="cognome" required/>

        <label for="birthdate">Data di nascita:</label>
        <input type="date" id="birthdate" name="birthdate" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="phone">Numero di telefono:</label>
        <input type="tel" id="phone" name="phone" required/>
        </div>
                : null}
                 {done ? <div><p>La ringraziamo per averci contattato, stiamo elaborando la sua richiesta </p> </div>  : null}
    </form>

    <div class="contact_box">
    <button type="submit">Invia</button>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="contact_image">
    <img src={logo} alt="logo"/>
    </div>
    <div class="contact_text">
    <h1>Iscriviti per ricevere sconti personalizzati!</h1>
    </div>

    <form>
        <div class="contact_box">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required/>

        <label for="cognome">Cognome:</label>
        <input type="text" id="cognome" name="cognome" required/>

        <label for="birthdate">Data di nascita:</label>
        <input type="date" id="birthdate" name="birthdate" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="phone">Numero di telefono:</label>
        <input type="tel" id="phone" name="phone" required/>
        </div>
    </form>

    <div class="contact_box">
    <button type="submit">Invia</button>
    </div>



    </>
  )
}

export default App

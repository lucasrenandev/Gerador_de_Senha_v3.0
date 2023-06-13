import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [inputValue, setInputValue] = useState("")
    const [text, setText] = useState("")
    const [inputType, setInputType] = useState("text")
    const [icon, setIcon] = useState(<FaEyeSlash/>)

    function copyPassword() {
      navigator.clipboard.writeText(inputValue)
      window.alert("Senha copiada com sucesso!")
    }

    function togglePasswordVisibility() {
      if(inputType === "text") {
        setInputType("password")
        setIcon(<FaEye/>)
      }
      else{
        setInputType("text") 
        setIcon(<FaEyeSlash/>)
      }
    }

    function generatePassword() {
      const alphabet = "ABCDEFJHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz"
      const numbers = "0123456789"
      const simbols = "!@#$%&*()[]{}_-+=;:/<>|"
      const characters = alphabet + numbers + simbols
      const maxCharacters = 16
      let password = ""

      for(let i = 0; i < maxCharacters; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length)
        password += characters.charAt(randomPassword, randomPassword + 1)

        setInputValue(password)
        setText(`A sua senha possui ${maxCharacters} caracteres!`)
      }
    }
    
    return (
      <div className="container">
        <h1>Gerador de Senha</h1>

        {Object.keys(inputValue).length > 0 && (
          <div className='icon-buttons'>
            <i onClick={copyPassword} title="Copiar"><FaCopy/></i>
            <i onClick={togglePasswordVisibility} title="Alternar">{icon}</i>
          </div>//End icon buttons
        )}
      
        <form action="#" className="form">
          <input value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)}} type={inputType} placeholder='Senha'/>
          <p>{text}</p>
          <button onClick={generatePassword} type='button'>Gerar</button>
        </form>{/*End form*/}
     </div>//End container
    )
}
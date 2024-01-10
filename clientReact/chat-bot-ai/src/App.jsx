import { useEffect, useState } from 'react'
import './App.css'
import {  OpenAI } from "openai";
import dotenv from 'dotenv'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const [inputMessage, setInputMessage] = useState('')

  // const openai_key = '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'; frrom deep.lakshay
  const openai_key = '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';
  const openai = new OpenAI ({apiKey: openai_key,dangerouslyAllowBrowser: true});
  
  useEffect(()=>{
    const run = async() =>{
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
        // model: 'text-davinci-003',
        // prompt: "HELLO AI",
        // temperature: 0.7,
        // max_tokens: 256,
        // freque
        
      })
      console.log("res" + res)
    }
    run();
  },[inputMessage])

  return (
    <>
     <div className='container'>
        <div className='chat-area'>
        {/* chat-area */}
        <div className='ai-chat'>
          <div style={{padding:"4px 6px",
           backgroundColor:'black',
           borderRadius:'4px'}}><SmartToyRoundedIcon/></div>
          <p>{lorem}</p>
        </div>
        <div className='user-chat'>
          <div style={{padding:"4px 6px",
           backgroundColor:'#232224',
           borderRadius:'4px'}}> <PersonIcon/> </div>
          <p>Give some lorem ipsum</p>
        </div>
        </div>
        <div className='input-div'>

          <input placeholder='Ask anything'
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />
          <button className='button'>
            <ArrowForwardRoundedIcon style={{fontSize: 'large'}} fontSize='small' className='bot-icon'/>
          </button>

        </div>
     </div>
    </>
  )
}

export default App


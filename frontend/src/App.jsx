import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {useEffect} from 'react'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  return (
    <>
      <h1>Hello world</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index)=>{
          <div key={jokes.id}>
            <h3>{jokes.name}</h3>
            <p>{jokes.email}</p>
            <p>{jokes.age}</p>
            <p>{jokes.city}</p>
          </div>
        })
      }
    </>
  )
}

export default App



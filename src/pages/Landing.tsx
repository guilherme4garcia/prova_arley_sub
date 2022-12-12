import React from 'react'
import { useEffect, useState} from 'react'
import { Box, Form, Buttonx, Container, Text } from '../styles/global'
import axios from 'axios';

function Landing() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [payload, setPayload] = useState([])


  const url = 'http://localhost:3001/'

  useEffect(() => {
    fetchData()
  }, [])

  
  const fetchData = async () => {
    const response = await axios.get(url)
    setPayload(response.data)
    
  }
  
  
  const handleSubmit = async () => {
        

    const request = await axios.post(url, {
          name: name,
          age: age
    })
        
  }

 
  
  return (

    <div className='center'>
      
    
    <Box>

      <Container>

        <Form>
          <Text>Nome</Text>
          <label htmlFor="">
                  <input style={{fontSize: '24px'}} type="text" value={name} onChange={e => setName(e.target.value)}/>
          </label>
          <Text>Idade</Text>
          <label htmlFor="">
                  <input style={{fontSize: '24px'}} type="text" value={age} onChange={e => setAge(e.target.value)}/>
          </label>
          <Buttonx onClick={handleSubmit}>Salvar</Buttonx>
        </Form>

      </Container>
      
      <Box style={{marginTop: '1rem'}}>
        {payload.map(obj => {
          const {name, age, id} = obj
          return(
            <div key={id} style={{color: 'orange'}}>
              {`${name} ${age}`}
              
            </div>
          )
        })}
      </Box>
    </Box>
    </div>
  )
}

export {Landing}
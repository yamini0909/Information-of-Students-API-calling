import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Record from './Record';


const AppApi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("CM")
    axios.get('MOCK_DATA.json')
          .then(res => {
            console.log(res)
              setData(res.data);
              setLoading(false);
          })
          .catch(() => {
              alert('There was an error while retrieving the data')
          })
}, [])
useEffect(()=>{
console.log(data)
},[data])

  return (
    <div className='container'>
      <Record data={data}></Record>
    </div>
  )
}

export default AppApi

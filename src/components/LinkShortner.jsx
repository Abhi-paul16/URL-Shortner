import React from 'react'


export const LinkShortner = () => {

  const getlink = () => {
    const link = document.getElementById('link').value;
    const axios = require('axios');
    axios.get(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`)
    .then((res) =>{
      const ShortLink = res.data.result.short_link;
    })
    
  
  }

  return (
    <div className='bg-desktop-shorten w-4/6  m-auto z-10 h-40 bg-Darkviolet rounded-lg flex justify-center items-center' >
    
      <div className='w-3/5 p-2 '>
      <input id='link' type='text' className='form-input w-full rounded-lg' />
      </div>

      <div>
      <button className='bg-cyan-400 p-4 rounded-xl font-bold text-white' onClick={getlink}>
          Shorten it!
      </button>
      </div>

      </div>
  )
}

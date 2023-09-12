import React from 'react'

const UserNamePassword = () => {
function handleClick(){
    console.log('I was clicked')
}
    
    
  return (
    <main>
        <form className='form'>
            <input 
            type="text"
            placeholder='enter Username'
            className='formInput'
            />
            <input  
            type='text'
            placeholder='enter Password'
            className='formInput'
            />
            <button className='formButton' onClick={handleClick}>Get a new meme image</button>
        </form>
    </main>
  )
}

export default UserNamePassword
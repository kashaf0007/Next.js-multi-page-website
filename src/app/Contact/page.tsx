import React from 'react'

const Contact= () => {
  return (
    <div>
      <section className='contact'>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder='User Name' required/>
          <input type="text"  placeholder='Full Name'required/>
          <input type="email" placeholder=' enter your email'required/>
          <input type="number" placeholder='enter your phone no'/>
          <textarea placeholder='your message ' rows={5} required></textarea>
          <button type='submit'>Send</button>
        </form>
      </section>
      
    </div>
  )
}

export default Contact

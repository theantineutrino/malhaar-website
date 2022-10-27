import React from 'react'
import classes from './Form.module.css';

const Form=()=>{
  return (
    <form className={classes.form}>
      <label htmlFor='name'>First & Last Name</label>
      <br/>
      <input name='name' placeholder='Full Name....'></input>  
      <br/>
      <label htmlFor='email'>Email Address</label>
      <br/>
      <input name='email'type='email' placeholder='Email.....'></input>
      <br/>
      <label htmlFor='pass'>Choose a Pass</label>
      <br/>
      <input name='pass' placeholder='-Select One-'></input>
      <div className={classes.set}>
      <input className={classes.check} type='checkbox'/>
      <button className={classes.btn} type='submit'>YES,I'M IN</button>
      </div>
      
      
    </form>
  )
}

export default Form
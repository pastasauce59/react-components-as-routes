import React from 'react';

export default class SignUp extends React.Component{
    render() {
        return(
            <div>
      <h1>Enter your email to sign up for news!</h1>
      <form>
        <input type='text' name='email' placeholder='abc@....'/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
        )
    }
}
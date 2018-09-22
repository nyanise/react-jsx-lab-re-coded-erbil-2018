
import React, { Component } from 'react';
import ReactDOM from "react";

class RegistrationForm extends React.Component
{
  render()
  {
    return (
        <form>
          <input type="text" placeholder="your name" />
          <input type="password" placeholder = "your password" />
          <button type="submit">Sign in</button>
        </form>
      )
  }
}
export default RegistrationForm;
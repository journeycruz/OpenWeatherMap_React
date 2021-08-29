import React from "react";
import { Button } from "react-bootstrap";
import { Animated } from "react-animated-css";

const ErrorPage = () => {
  return (
    <div className='col-md-6 text-center justify-content-center align-items-center'>
      <div className='error shadow-lg p-3 mb-5 rounded'>
        <Animated isVisible='true' animationIn='bounceIn'>
          <div className='errorContent'>
            <img src='./assets/404-design.png' alt='404-error' id='error-vector' />
            <h3 className='display-5'>Oops! Something went wrong.</h3>
            <p className='lead'>That city couldn't be found or the API call failed, go back to the home page and try again.</p>
            <br />
            <Button variant="outline-primary" style={{backgrounColor: '#696E8C'}} href='/'>Home</Button>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default ErrorPage;

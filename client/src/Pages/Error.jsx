import React from "react";
import { Button } from "react-bootstrap";
import { Animated } from "react-animated-css";

const ErrorPage = () => {
  return (
    <div className='col-md-6 text-center justify-content-center align-items-center'>
      <div className='error shadow-lg p-3 mb-5 bg-white rounded'>
        <Animated isVisible='true' animationIn='bounceIn'>
          <div className='errorContent'>
            <img src='./assets/404.png' alt='404-error' id='error-vector' />
            <h3 className='display-5'>We couldn't find that city.</h3>
            <p className='lead'>Please return to the home page and try again</p>
            <Button href='/'>Home</Button>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default ErrorPage;

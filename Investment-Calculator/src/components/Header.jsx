import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {

  return (
    <header id="header">
      <h1>Investment Calculator App</h1>

      <img src={logo} alt="Investment Calculator Logo" />
      <p>
        This calculator helps you estimate the future value of your investments based on your initial investment, annual contributions, expected return rate, and investment duration.
      </p>
    </header>
  );
}



import React from 'react';
import '../styles/hover_button.css';

export function MyButton({ text, onClick }) {
  return (
    <div className="wrapper">
    <button className='button1'>
        {text} 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
    </div>
);
}
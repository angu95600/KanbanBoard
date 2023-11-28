

import React from 'react';

import '../App.css'
const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <div className='fixed'>
      <div id='cam'>
          <div>{ticket.id}</div>
         <div className='img'><img src="https://lh3.googleusercontent.com/a/AAcHTtdJliytEkxVx_KFOtKRaP7vtHeL3GzO-QH5MOGNwQ=s96-c" alt="" srcset="" /></div>
        </div>
        <div className='cont'>
          <div className='inp'><input type="radio" /></div>
      <div className='title'>{ticket.title.substr(0,59)}</div>
      </div>
     
      <div className='lower'>
       
        <div className='tag'>
          
          <div>
          {ticket.tag}
          </div>
          <div className='dot'></div>
        </div>
        
        </div>
      
      </div>
      </div>
      
  ); 
};

export default Ticket;


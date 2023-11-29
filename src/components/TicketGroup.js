import React from 'react';
import Ticket from './Ticket';
import '../App.css'

  function decode(x) {
    if (x == 0) {
      return "No Priority";
    }
    else if (x == 1) {
      return "Low Priority";
    }
    else if (x == 2) {
      return "Medium Priority";
    }
    else if (x == 3) {
      return "High Priority";
    }
    else if(x==4){
      return "Urgent";
    }
    else if(x=='usr-1'){
      return "Anoop Sharma";
    }
     else if(x=='usr-2'){
      return "Yogesh";
    }
     else if(x=='usr-3'){
      return "Shankar Kumar";
    }
     else if(x=='usr-4'){
      return "Ramesh";
    }
     else if(x=='usr-5'){
      return "Suresh";
    }
    else if(x=='All Tickets') {
      return "";
    }
    else {
      return x;
    }
}

const TicketGroup = ({ groupTitle, tickets }) => {
  // Ensure that tickets is always an array
  const ticketsArray = Array.isArray(tickets) ? tickets : [tickets];
  
  
  return (
    <div className="ticket-group">
      <div className="group">
        <div className='gp'>
          <div className='font'>
            {decode(groupTitle)}
          </div>
          <div className="count">
           {tickets.length}
          </div>
          <span class="material-symbols-outlined" >
add
          </span>
          <span class="material-symbols-outlined">
more_horiz
</span>
        </div>
        
      </div>
      
      {ticketsArray.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketGroup;


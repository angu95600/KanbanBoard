

import React from 'react';
import TicketGroup from './TicketGroup';
import '../App.css'

const KanbanBoard = ({ displayedTickets }) => {
  return (
    <div className="kanban-board" style={{display:'flex',flexDirection:'row'}}>
      {Object.keys(displayedTickets).map((groupTitle) => (
        <TicketGroup
          key={groupTitle}
          groupTitle={groupTitle}
          tickets={displayedTickets[groupTitle]}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;

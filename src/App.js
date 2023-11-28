import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';

function App() {
 const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [viewState, setViewState] = useState({
    groupingOption: '',
    sortOption: '',
  });




useEffect(() => {

  fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then((response) => response.json())
    .then((data) => {
     
      const updatedTickets = data.tickets.map((ticket) => ({
        ...ticket,
        status: ticket.status || "Completed",
      }));

      setTickets(updatedTickets || []);
    })
    .catch((error) => console.error('Error fetching tickets:', error));

 
  const savedViewState = JSON.parse(localStorage.getItem('kanban-view-state'));
  if (savedViewState) {
    setGroupingOption(savedViewState.groupingOption);
    setSortOption(savedViewState.sortOption);
  }
  else {
    
    setGroupingOption('user');
  }
}, []);

  useEffect(() => {
   
    localStorage.setItem('kanban-view-state', JSON.stringify({ groupingOption, sortOption }));
  }, [groupingOption, sortOption]);

  const handleDisplayClick = (option) => {
    setGroupingOption(option);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const groupedTickets = () => {
   if (groupingOption === 'status') {
      // Group by Status
      const groupedByStatus = {};
      tickets.forEach((ticket) => {
        if (!groupedByStatus[ticket.status]) {
          groupedByStatus[ticket.status] = [];
        }
        groupedByStatus[ticket.status].push(ticket);
      });
      return groupedByStatus;
    } else if (groupingOption === 'user') {
      // Group by User
      const groupedByUser = {};
      tickets.forEach((ticket) => {
        if (!groupedByUser[ticket.userId]) {
          groupedByUser[ticket.userId] = [];
        }
        groupedByUser[ticket.userId].push(ticket);
      });
      return groupedByUser;
    } else if (groupingOption === 'priority') {
      // Group by Priority
      const groupedByPriority = {};
      tickets.forEach((ticket) => {
        if (!groupedByPriority[ticket.priority]) {
          groupedByPriority[ticket.priority] = [];
        }
        groupedByPriority[ticket.priority].push(ticket);
      });
      return groupedByPriority;
    }

   
    else  {
     
      const groupedByUser = {};
      tickets.forEach((ticket) => {
        if (!groupedByUser[ticket.userId]) {
          groupedByUser[ticket.userId] = [];
        }
        groupedByUser[ticket.userId].push(ticket);
      });
      return groupedByUser;
    }
  };

  const sortedTickets = () => {
    const grouped = groupedTickets();

    // Sort based on the selected option
    if (sortOption === 'priority') {
      // Sort by Priority
      const sortedByPriority = {};
      Object.keys(grouped).forEach((key) => {
        sortedByPriority[key] = grouped[key].sort((a, b) => b.priority - a.priority);
      });
      return sortedByPriority;
    } else if (sortOption === 'title') {
      // Sort by Title
      const sortedByTitle = {};
      Object.keys(grouped).forEach((key) => {
        sortedByTitle[key] = grouped[key].sort((a, b) => a.title.localeCompare(b.title));
      });
      return sortedByTitle;
    }

   
    return grouped;
  };

  const displayedTickets = sortedTickets();

  return (
    <div className="App">
       <Navbar handleDisplayClick={handleDisplayClick} handleSortChange={handleSortChange} defaultGroupingOption="user"/>
         <KanbanBoard displayedTickets={displayedTickets} />
     
    </div>
  );
}

export default App;

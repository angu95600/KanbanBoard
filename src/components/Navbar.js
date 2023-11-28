import React from 'react';

function Navbar({ handleDisplayClick, handleSortChange,defaultGroupingOption }) {
  return (
    <div className="nav">
      <div className="dropdown">
        <button className="dropbtn">Display</button>
        <div className="dropdown-content">
          <div className="groupby">
            <div>Group by</div>
            <div>
              <select onChange={(e) => handleDisplayClick(e.target.value)}defaultValue={defaultGroupingOption}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
          <div className="orderby">
            <div>OrderBy</div>
            <div>
              <select onChange={(e) => handleSortChange(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


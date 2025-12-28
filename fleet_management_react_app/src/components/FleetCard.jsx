import React from "react";

const FleetCard = ({ fleet, onUpdateDriver, onToggle, onDelete }) => {
  const handleDriverUpdate = () => {
    const name = prompt("Enter new driver name");
    if (name && name.trim()) {
      onUpdateDriver(fleet.id, name.trim());
    }
  };
  return (
    <div>
      <p>{fleet.regNo}</p>
      <p>{fleet.category}</p>
      <p>{fleet.driver}</p>
      <p>{fleet.available ? "Available" : "Unavailable"}</p>
      <button onClick={handleDriverUpdate}>Update Driver</button>
      <button onClick={() => onToggle(fleet.id)}>Toggle</button>
      <button onClick={() => onDelete(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);

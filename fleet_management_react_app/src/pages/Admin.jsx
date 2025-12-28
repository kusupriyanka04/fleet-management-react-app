
import React, { useCallback, useState } from 'react'
import Sidebar from '../components/Sidebar';
import FleetCard from '../components/FleetCard';
import Navbar from '../components/Navbar';

const Admin = () => {

    const [fleets, setFleets] = useState([]);

    const updateDriver = useCallback((id, newName) => {
        setFleets(prev =>
            prev.map(f =>
                f.id === id ? {...f, driver: newName} : f
            )
        )
    }, []);

    const  toggleAvailability = useCallback((id) => {
        setFleets(prev =>
            prev.map(f =>
                f.id === id ? {...f, available: !f.available } : f
            )
        )
    }, []);

    const deletFleet = useCallback((id) => {
        if(confirm("Are you sure")){
            setFleets(prev => prev.filter(f => f.id !== id));

        }
    }, []);
  return (
    <>
    <Navbar/>
    <div style={{ display: "flex" }}>
        <Sidebar setFleets={setFleets} />
        <div>
            {fleets.map(fleet => (
                <FleetCard key={fleet.id} 
                fleet={fleet}
                onUpdateDriver={updateDriver}
                onToggle={toggleAvailability}
                onDelete={deletFleet}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Admin
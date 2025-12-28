
import React, { useCallback, useState } from 'react'

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
                f.id === id
            )
        )
    })
  return (
    <div>

    </div>
  )
}

export default Admin
import React, { useState } from "react";

const Sidebar = ({ setFleets }) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    available: true,
  });

  const handleAdd = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert("All fields required");
      return;
    }
    setFleets((prev) => [...prev, { ...form, id: Date.now() }]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      available: true,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={form.regNo}
        onChange={(e) => setForm({ ...form, regNo: e.target.value })}
      />
      <select onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option value="">Select</option>
        <option>Car</option>
        <option>Bus</option>
        <option>Truck</option>
        <option>Auto</option>
      </select>
      <input
        type="text"
        value={form.driver}
        onChange={(e) => setForm({ ...form, driver: e.target.value })}
      />
      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;

// src/components/professional/AvailabilityManagement.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // TODO: Fetch available and booked slots for the selected date
  };

  const addAvailableSlot = (slot) => {
    setAvailableSlots([...availableSlots, slot]);
    // TODO: Save the new available slot to the backend
  };

  const confirmBookedSlot = (slot) => {
    // TODO: Implement confirmation logic and update backend
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-xl font-semibold mb-4">Manage Availability</h3>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Add Available Slot</h4>
          {/* Add a form to create new available slots */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // Assuming the slot is a simple time string for this example
            const slot = e.target.slot.value;
            addAvailableSlot(slot);
            e.target.reset();
          }}>
            <input
              type="text"
              name="slot"
              placeholder="Enter time slot (e.g., 10:00 AM - 11:00 AM)"
              className="w-full p-2 mb-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Slot
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Slots for {selectedDate.toDateString()}</h3>
        <div>
          <h4 className="text-lg font-semibold">Available Slots</h4>
          <ul className="list-disc list-inside">
            {availableSlots.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Booked Slots</h4>
          <ul className="list-disc list-inside">
            {bookedSlots.map((slot, index) => (
              <li key={index}>
                {slot}
                <button
                  onClick={() => confirmBookedSlot(slot)}
                  className="bg-green-500 text-white ml-2 px-2 py-1 rounded"
                >
                  Confirm
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityManagement;

import React from 'react';

const SchedulePage = () => {
  const schedule = [
    { day: 'Monday', subject: 'Mathematics', time: '10:00 AM - 11:00 AM' },
    { day: 'Wednesday', subject: 'Physics', time: '2:00 PM - 3:00 PM' },
    { day: 'Friday', subject: 'Biology', time: '11:00 AM - 12:00 PM' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">My Study Schedule</h2>
      <div className="grid gap-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="bg-white shadow p-4 rounded border">
            <h3 className="font-semibold">{item.day}</h3>
            <p>{item.subject} — {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;


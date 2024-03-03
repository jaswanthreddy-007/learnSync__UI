import React from 'react'
import Navbar from './Navbar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Schedule = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "DSA exam (Internal 2)", date: "2024-03-03" },
            { title: "Maths exam (Internal 2)", date: "2024-03-04" },
          ]}
        />
      </div>
    </>
  );
}

export default Schedule
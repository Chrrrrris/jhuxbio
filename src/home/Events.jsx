import React, { useState } from "react";

const events = [
//   {
//     date: "2024-01-15",
//     time: "10:00 AM",
//     location: "101, Remsen Hall",
//     name: "CRISPR Workshop",
//     description: "Learn the basics of CRISPR technology and its applications.",
//     registrationLink: ""
//   },
//   {
//     date: "2024-02-10",
//     time: "2:00 PM",
//     location: "Auditorium, Bloomberg ",
//     name: "Guest Lecture: Synthetic Biology in Industry",
//     description: "A talk by Dr. Smith on synthetic biology innovations.",
//     registrationLink: ""
//   },
//   {
//     date: "2024-03-20",
//     time: "4:00 PM",
//     location: "Mudd 1, Engineering Building",
//     name: "Hands-on Lab: DNA Assembly",
//     description: "Practice DNA assembly techniques in our state-of-the-art lab.",
//     registrationLink: ""
//   },
];

export default function Events() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getMonthName = (month) =>
      new Date(currentMonth.getFullYear(), month, 1).toLocaleString("default", {
        month: "long",
      });
  
    const filterEventsForMonth = () => {
      const year = currentMonth.getFullYear();
      const month = String(currentMonth.getMonth() + 1).padStart(2, "0");
      return events.filter((event) => event.date.startsWith(`${year}-${month}`));
    };
  
    const nextMonth = () =>
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
      );
  
    const prevMonth = () =>
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
      );
  
    const monthEvents = filterEventsForMonth();
  
    return (
      <section id="events" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Events Calendar
          </h2>
  
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevMonth}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Previous Month
            </button>
            <h3 className="text-2xl font-medium text-gray-800">
              {getMonthName(currentMonth.getMonth())} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={nextMonth}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Next Month
            </button>
          </div>
  
          {/* Calendar */}
          <div className="grid grid-cols-7 gap-4">
            {[...Array(daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear()))].map(
              (_, i) => {
                const day = i + 1;
                const date = `${currentMonth.getFullYear()}-${String(
                  currentMonth.getMonth() + 1
                ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const dayEvents = monthEvents.filter(
                  (event) => event.date === date
                );
  
                return (
                  <div
                    key={day}
                    className="border border-gray-300 rounded-lg p-4 text-center"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">{day}</h4>
                    {dayEvents.length > 0 ? (
                      <ul className="mt-2 space-y-1">
                        {dayEvents.map((event, index) => (
                          <li
                            key={index}
                            className="text-sm text-blue-600 cursor-pointer"
                            onClick={() => setSelectedEvent(event)}
                          >
                            {event.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500">No Events</p>
                    )}
                  </div>
                );
              }
            )}
          </div>
  
          {/* Event Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedEvent.name}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Date:</strong> {selectedEvent.date}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Time:</strong> {selectedEvent.time}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                {selectedEvent.registrationLink && (
                  <a
                    href={selectedEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Register Here
                  </a>
                )}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
  
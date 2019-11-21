import React, { useEffect, useState } from "react";
import axios from 'axios';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';
import { authAxios } from '../components/authAxios';

export default function EventList() {
  // TODO: Add useState to track data from useEffect
  const [events, setEvents] = useState([])

  useEffect(() => {
    authAxios()
    .get(`https://corporate-event-planner-api.herokuapp.com/api/events`)
      .then(response => {
        const eventInfo = response.data;
        console.log("Character Info", eventInfo);
        setEvents(eventInfo);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>Event List</h2> 
      {events.map(e => {
        return (
          <EventCard
          key={e.id}
          name={e.name}
          description={e.description}
          datetime={e.datetime}
          budget={e.budget}
          />
        )
      })}

    </section>
  );

}

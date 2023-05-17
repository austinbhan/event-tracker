import Event from '../Components/Event';
import { getEvents } from '../fetch-utils/fetch-utils';
import { useState, useEffect } from 'react';

export default function EventList({ TrialEvents }) {

  const [events, fetchEvents] = useState([]);

  useEffect(() => {
    fetchEvents(getEvents);
  }, []);

  console.log(events);

  return (
    <div>
      <h1>This is the list of trial events </h1>
      {
        TrialEvents.map((TrialEvent, i) => (
          <Event 
            {...TrialEvent}
            key={TrialEvent.id + i} 
          />
        ))
      }
    </div>
  );
}

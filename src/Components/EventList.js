import Event from '../Components/Event';
import { useEffect } from 'react';
import { getEvents } from '../fetch-utils/fetch-utils';

export default function EventList({ TrialEvents }) {

  useEffect(() => {
    getEvents();
  }, []);

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

import Event from '../Components/Event';
import { getEvents } from '../fetch-utils/fetch-utils';

export default function EventList({ TrialEvents }) {

  console.log(getEvents());

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

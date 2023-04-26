import Event from '../Components/Event';

export default function EventList({ TrialEvents }) {
  console.log(TrialEvents);
  return (
    <div>
      <h1>This is the list of trial events </h1>
      {
        TrialEvents.map((TrialEvent, i) => {
          <Event 
            {...TrialEvent}
            key={TrialEvent.id + i} 
          />;
        })
      }
    </div>
  );
}

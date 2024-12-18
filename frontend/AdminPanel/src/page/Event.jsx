
import EventDetails from '../components/EventDetails';
import { TitleHook } from '../CustomHook/TitleHook';

function Event() {
  TitleHook("Event")
  return (
    <div>
      <EventDetails/>
    </div>
  )
}

export default Event
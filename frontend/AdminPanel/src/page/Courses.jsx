
import CoursesDetails from '../components/CoursesDetails';
import { TitleHook } from '../CustomHook/TitleHook';

function Courses() {
  TitleHook("Courses")
  return (
    <div>
      <CoursesDetails/>
    </div>
  )
}

export default Courses
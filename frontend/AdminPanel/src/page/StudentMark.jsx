import StudentMarkDetails from "../components/StudentMarkDetails"
import { TitleHook } from "../CustomHook/TitleHook"

function StudentMark() {
    TitleHook("Student")
  return (
    <StudentMarkDetails/>
  )
}

export default StudentMark
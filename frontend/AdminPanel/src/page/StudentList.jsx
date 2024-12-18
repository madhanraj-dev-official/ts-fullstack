import StudentListDetails from "../components/StudentListDetail"
import { TitleHook } from "../CustomHook/TitleHook"

function StudentList() {
    TitleHook("Student")

  return (
    <StudentListDetails/>
  )
}

export default StudentList
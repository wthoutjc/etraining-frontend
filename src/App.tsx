import { Route, Routes } from "react-router-dom";

// Components
import UserCourses from "./components/user-courses/UserCourses";
import Courses from "./components/courses/Courses";
import { Users } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/enroll-me" element={<UserCourses />} />
    </Routes>
  );
}

export default App;

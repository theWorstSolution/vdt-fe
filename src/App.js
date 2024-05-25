import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentList from './pages/StudentList';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <Routes>
      <Route index element={<StudentList/>}/>
      <Route path='create-student' element={<CreateStudent/>} />
      <Route path='students/:studentId' element={<EditStudent/>} />
    </Routes>
  );
}

export default App;

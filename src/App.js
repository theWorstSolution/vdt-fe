import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentList from './pages/StudentList';
import CreateStudent from './pages/CreateStudent';
import EditStudent from './pages/EditStudent';
import AuthGuard from './authGuard';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>

      <Route path='login' element={<AuthGuard />} />
      <Route path='' element={<Layout />}>
        <Route path='' element={<StudentList />} />
        <Route path='create-student' element={<CreateStudent />} />
        <Route path='students/:studentId' element={<EditStudent />} />
      </Route>
    </Routes>
  );
}

export default App;

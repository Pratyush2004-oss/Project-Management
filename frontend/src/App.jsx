import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ImportantTask from "./Pages/ImportantTask";
import AllTask from "./Pages/AllTask";
import CompletedTask from "./Pages/CompletedTask";
import IncompletedTask from "./Pages/IncompletedTask";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-4">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route index element={<AllTask />} />
            <Route path='/important' element={<ImportantTask />} />
            <Route path='/complete' element={<CompletedTask />} />
            <Route path='/incomplete' element={<IncompletedTask />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

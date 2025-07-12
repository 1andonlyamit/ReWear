import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/landingPage';
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import UserDashboardPage from "./pages/userDashboardPage";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

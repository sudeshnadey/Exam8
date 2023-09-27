import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import CreatePaper from './pages/createPaper/CreatePaper';
import ViewPaper from './pages/viewPaper/View_Papers.jsx';
import MyQuestions from './pages/myQuestions/my_questions.jsx';
import BluePrints from './pages/bluePrints/bluePrints.jsx';
import Batch from './pages/batch/batch.jsx';
import MiniDrawer from './pages/app_bar_with_drawer';
import Student from './pages/students/students';
import Teachers from './pages/teachers/teachers';
import ReferAndEarn from './pages/referAndEarn/refer_and_earn';
import Subscription from './pages/subscription/subscription';
import MyOrders from './pages/myOrders/my_orders';


const App = () => {
  return (
    <BrowserRouter >
      <MiniDrawer />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-paper" element={<CreatePaper />} />
          <Route path="/view-papers" element={<ViewPaper />} />
          <Route path="/my-questions" element={<MyQuestions />} />
          <Route path="/blueprints" element={<BluePrints />} />
          <Route path="/batches" element={<Batch />} />
          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/referral" element={<ReferAndEarn />} />
          <Route path="/my-subscription" element={<Subscription />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
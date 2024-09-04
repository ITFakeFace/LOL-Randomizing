import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./pages/homepage/HomePage";
import { RandomTeamPage } from "./pages/randomTeam/RandomTeamPage";
import MainLayout from "./pages/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Các route con sẽ được render trong Outlet của MainLayout */}
          <Route index element={<HomePage />} />  {/* Trang chủ */}
          <Route path="random-team" element={<RandomTeamPage />} /> {/* Trang giới thiệu */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

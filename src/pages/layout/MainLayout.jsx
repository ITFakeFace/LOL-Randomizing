import { memo } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";
import React from 'react';
import { Header } from "./header/Header";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default memo(MainLayout);

import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MailList from "./MailList";
import Mail from "./Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div class="app__body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<MailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

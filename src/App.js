import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MailList from "./MailList";
import Mail from "./Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<MailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
}

export default App;

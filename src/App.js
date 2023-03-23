import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./component/HomeScreen";
import LoginScreen from "./component/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

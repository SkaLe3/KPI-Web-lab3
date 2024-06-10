import "./App.css";
import About from "./pages/About";
import MainForm from "./pages/MainForm";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import ProductsInfo from "./pages/ProductsInfo";

function App() {
  const [info, setInfo] = useState({
    gameLink: [],
    gameName: [],
    gameMark: [],
    gameGrade: [],
  });

  async function addGameFunc(
    gameLink,
    gameName,
    gameMark,
    gameGrade,
    username
  ) {
    try {
      username = localStorage.getItem("username");

      // Отправляем запрос на сервер для создания поста
      const requestData = {
        method: "POST",
        body: JSON.stringify({
          gameLink,
          gameName,
          gameMark,
          gameGrade,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://localhost:3001/api/addGame",
        requestData
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      localStorage.setItem("gameLink", JSON.stringify(data.gameLink));
      localStorage.setItem("gameName", JSON.stringify(data.gameName));
      localStorage.setItem("gameMark", JSON.stringify(data.gameMark));
      localStorage.setItem("gameGrade", JSON.stringify(data.gameGrade));
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<MainForm />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<ProductsInfo Info={info} addGameFunc={addGameFunc} />}
        />
      </Routes>
    </div>
  );
}

export default App;

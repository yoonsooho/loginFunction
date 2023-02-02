import logo from "./logo.svg";
import "./App.css";
import Emmet from "./Emmet";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Home from "./Home";
import Bubble from "./Bubble";
import LoginPage from "./LoginPage";
import Mypage from "./Mypage";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "./store/userSlice";

function App() {
  let store = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  let result = useQuery("작명", () =>
    axios.get("https://dummyjson.com/products").then((a) => {
      return a.data;
    })
  );

  // console.log(location);
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </div>
        <div>메뉴</div>
        {store.user.token === null ? (
          <button
            style={{ border: "1px solid red" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인하러가기
          </button>
        ) : (
          <div>
            <button onClick={() => navigate("/mypage")}>Mypage이동하기</button>
            <button onClick={() => navigate("/login")}>
              로그인창 이동하기
            </button>
            <button onClick={() => dispatch(logoutuser())}>로그아웃하기</button>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home result={result} />} />
        <Route path="/detail/:id" element={<Emmet />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/Bubble" element={<Bubble />} />
      </Routes>
    </div>
  );
}

export default App;

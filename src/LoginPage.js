import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Mypage from "./Mypage";
import { loginUser, logoutuser } from "./store/userSlice";

const LoginPage = () => {
  let dispatch = useDispatch();

  let API_KEY = "AIzaSyAxURV7vxqnqWyii5jsD4tEwMX2ulwX0lQ";
  let URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

  let navigate = useNavigate();
  let store = useSelector((state) => state);
  let [loginId, setLoginId] = useState("");
  let [loginPassWord, setLoginPassWord] = useState("");
  let [signUpId, setSignUpId] = useState("");
  let [signUpPassWord, setSignUpPassWord] = useState("");

  console.log(store);
  let now = new Intl.DateTimeFormat("ko", { dateStyle: "long" });
  console.log(now.format(new Date()));

  let LoginSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          email: loginId, //연습용 아이디 : gkgkgkgkkgkg@naver.com
          password: loginPassWord, //연습용 비밀번호 :123123
          returnSecureToken: true,
        }
      )
      .then((a) => {
        console.log(a.data);
        dispatch(loginUser(a.data));
        navigate("/mypage");
        console.log(a.expiresIn);
      })
      .catch((a) => {
        console.log(a.code);
      });
  };

  let SignUpSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          email: signUpId,
          password: signUpPassWord,
          returnSecureToken: true,
        }
      )
      .then((e) => console.log(`${e.data.email} 님 반갑습니다.`))
      .catch((e) => console.log(e));
  };

  return (
    <>
      {store.user.token === null ? (
        <form onSubmit={LoginSubmitHandler}>
          <div
            style={{
              width: "300px",
              border: "1px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <span
                style={{
                  width: "90px",
                  display: "inline-block",
                  textAlign: "right",
                }}
              >
                id:
              </span>
              <input
                type="email"
                onChange={(e) => {
                  setLoginId(e.target.value);
                }}
              ></input>
              <div>연습용 아이디 : gkgkgkgkkgkg@naver.com</div>
            </div>
            <div>
              <span
                style={{
                  width: "90px",
                  display: "inline-block",
                  textAlign: "right",
                }}
              >
                password:
              </span>
              <input
                type="password"
                onChange={(e) => {
                  setLoginPassWord(e.target.value);
                }}
              ></input>
              <div>연습용 비밀번호 : 123123</div>
            </div>
            <button>로그인</button>
          </div>
        </form>
      ) : (
        <div>로그인 되었습니다</div>
      )}

      <form onSubmit={SignUpSubmitHandler}>
        <div
          style={{
            width: "300px",
            border: "1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <span
              style={{
                width: "90px",
                display: "inline-block",
                textAlign: "right",
              }}
            >
              id:
            </span>
            <input
              type="email"
              onChange={(e) => {
                setSignUpId(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <span
              style={{
                width: "90px",
                display: "inline-block",
                textAlign: "right",
              }}
            >
              password:
            </span>
            <input
              type="password"
              onChange={(e) => {
                setSignUpPassWord(e.target.value);
              }}
            ></input>
          </div>
          <button>회원가입</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;

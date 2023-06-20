import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from "./UserProfile";

function Welcome() {
  const [userType, setUserType] = useState("X");
  const [user, setUser] = useState({ Username: "", Pass: "" });
  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "Admin_ID") {
      setUser((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
      return;
    }
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (path) => navigate(`${path}`, { replace: true }),
    [navigate]
  );
  const fetchData = () => {
    if (userType !== "X" && user.Username !== "" && user.Pass !== "") {
      axios
        .post("http://localhost:5000/login", {
          Username: user.Username,
          Pass: user.Pass,
          Usertype: userType,
        })
        .then((res) => {
          if (res.data[0] == "Your data is correct") {
            if (userType === "Admin")
              UserProfile.setInfo({ userID: res.data[1], TD: res.data[2] });
            else UserProfile.setInfo({ userID: res.data[1], TD: -1 });
            let data = UserProfile.getInfo();
            console.log(JSON.parse(data));
            // console.log(userType);
            handleOnClick(`/${userType}`);
          } else {
            alert(res.data);
          }
        });
    } else alert("من فضلك أكمل بياناتك");
  };

  return (
    <div class="hero ">
      <form class="formgp bg-light border border-3 border-secondary rounded shadow-lg">
        <select
          id="s1"
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
          onChange={(e) => {
            setUserType(e.target.value);
          }}
        >
          <option selected value="X">
            اختر نوع المستخدم
          </option>
          <option value="Admin">مشرف</option>
          <option value="Instructor">مدرب</option>
          <option value="Student">متدرب</option>
        </select>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            اسم المستخدم
          </label>
          <input
            name="Username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={setInput}
          ></input>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3 ">
          <label for="exampleInputPassword1" class="form-label">
            كلمة المرور
          </label>
          <input
            name="Pass"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={setInput}
          ></input>
        </div>
        <button type="button" class="btn btn-primary" onClick={fetchData}>
          تسجيل الدخول
        </button>

        <div class="buttons">
          <label for="exampleInputPassword1" class="form-label">
            اضغط هنا لملئ بياناتك كمتدرب جديد
          </label>
          <button
            class="btn btn-primary"
            onClick={() => {
              handleOnClick("/Register");
            }}
          >
            ملئ البيانات
          </button>
        </div>
      </form>
    </div>
  );
}

export default Welcome;

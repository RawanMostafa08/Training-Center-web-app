import React from "react";
import axios from "axios";
import { useState } from "react";

function AddAdmin() {
  const [user, setUser] = useState({ Username: "", Pass: "" });
  const setInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fetchData = () => {
    console.log(user);
    if (user.Username !== "" && user.Pass !== "") {
      axios
        .post("http://localhost:5000/addAdmin", {
          Username: user.Username,
          Pass: user.Pass,
        })
        .then((res) => {
          if (res.data) alert("تم التسجيل بنجاح");
        });
    } else alert("من فضلك أكمل بياناتك");
  };
  return (
    <div class="hero">
      <form class="formgp bg-light border border-3 border-secondary rounded ">
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            اسم المشرف
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Username"
            onChange={setInput}
          ></input>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3 ">
          <label for="exampleInputPassword1" class="form-label">
            كلمة المرور الخاصة به
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="Pass"
            onChange={setInput}
          ></input>
        </div>
        <button type="button" class="btn btn-primary" onClick={fetchData}>
          إضافة مشرف
        </button>
      </form>
    </div>
  );
}

export default AddAdmin;

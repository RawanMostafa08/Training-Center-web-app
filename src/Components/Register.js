import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
} from "mdb-react-ui-kit";

function Register() {
  const [trainee, setTrainee] = useState({
    arabicName: "",
    englishName: "",
    userName: "",
    email: "",
    jobGroup: "X",
    job: "",
    pass: "",
    phoneNo: "-1",
    gender: "",
  });
  const setInput = (e) => {
    const { name, value } = e.target;
    setTrainee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (
      trainee.arabicName !== "" &&
      trainee.englishName !== "" &&
      trainee.userName !== "" &&
      trainee.email !== "" &&
      trainee.jobGroup !== "X" &&
      trainee.job !== "" &&
      trainee.pass !== "" &&
      trainee.phoneNo !== "-1" &&
      trainee.gender !== "X"
    ) {
      console.log(trainee);
      axios.post("http://localhost:5000/register", trainee).then((res) => {
        if (res.data) {
          if (res.data == "اسم مستخدم خاطئ-حاول مرة أخرى")
            alert("اسم مستخدم خاطئ-حاول مرة أخرى");
          else alert("تسجيل ناجح");
        }
      });
    } else {
      alert("من فضلك أكمل بياناتك");
    }
  };
  return (
    <MDBContainer className="bg bg-light p-3 my-5 d-flex flex-column w-50 shadow-lg border border-primary rounded border-3">
      <MDBTabsContent>
        <MDBTabsPane show>
          <div className="text-center mb-3">
            <h2>سجل كمتدرب جديد</h2>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label=" الاسم بالعربية"
            id="form1"
            name="arabicName"
            type="text"
            onChange={setInput}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="الاسم بالإنجيليزية"
            id="form1"
            name="englishName"
            type="text"
            onChange={setInput}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="اسم المستخدم"
            id="form1"
            name="userName"
            type="text"
            onChange={setInput}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="البريد الإلكتروني"
            id="form1"
            name="email"
            type="email"
            onChange={setInput}
          />
          <select
            class="form-select form-select mb-4"
            aria-label=".form-select-lg example"
            onChange={(e) => {
              trainee.jobGroup = e.target.value;
            }}
          >
            <option selected value="X">
              المجموعة الوظيفية
            </option>
            <option value="طبي">طبي</option>
            <option value="هندسي">هندسي</option>
            <option value="مالي">مالي</option>
            <option value="إداري">إداري</option>
            <option value="فني">فني</option>
            <option value="كتابي">كتابي</option>
            <option value="كيميائي">كيميائي</option>
            <option value="آخرون">آخرون</option>
          </select>
          <select
            class="form-select form-select mb-4"
            aria-label=".form-select-lg example"
            onChange={(e) => {
              trainee.gender = e.target.value;
            }}
          >
            <option selected value="X">
              النوع
            </option>
            <option value="ذكر">ذكر</option>
            <option value="انثى">انثى</option>
          </select>
          <MDBInput
            wrapperClass="mb-4"
            label="الوظيفة"
            id="form1"
            name="job"
            type="text"
            onChange={setInput}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="كلمة المرور"
            id="form1"
            name="pass"
            type="password"
            onChange={setInput}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="رقم الهاتف"
            id="typePhone"
            name="phoneNo"
            type="tel"
            onChange={setInput}
          />
          <button
            class="btn btn-primary w-100"
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            تسجيل
          </button>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Register;

import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
} from "mdb-react-ui-kit";
let data = JSON.parse(UserProfile.getInfo());

export default function AddTrainingPlan({ TD_ID }) {
  const [checkedCourses, setCheckedCourses] = useState([]);
  const [years, setYears] = useState({ sYear: -1, eYear: -1 });
  const [AllCourses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/adminViewAllCourses").then((res) => {
      setCourses(res.data);
    });
  }, []);
  const current = new Date();
  const curryear = `${current.getFullYear()}}`;
  function fetchData() {
    if (
      years.eYear - years.sYear === 1 &&
      years.sYear >= curryear &&
      years.sYear.toString().length == 4 &&
      years.eYear.toString().length == 4
    ) {
      let courses = [];
      let j = 0;
      for (let i = 0; i < checkedCourses.length; i++) {
        if (checkedCourses[i]) {
          courses[j] = AllCourses[i].Course_ID;
          j++;
        }
      }
      axios
        .post("http://localhost:5000/addNewPlan", {
          SY: years.sYear,
          EY: years.eYear,
          TD: data.TD,
          CS: courses,
        })
        .then((res) => {
          alert(res.data);
        });
    } else alert("أكمل بيانات الخطة");
  }
  const handlCheckedCourses = (e) => {
    const { name } = e.target;
    checkedCourses[name] = !checkedCourses[name];
    console.log(checkedCourses);
  };

  useEffect(() => {
    for (let i = 0; i < AllCourses.length; i++) {
      checkedCourses[i] = false;
    }
  }, [AllCourses.length]);

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setYears((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
    return;
  };

  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabsContent>
          <MDBTabsPane show>
            <div className="text-center mb-3">
              <h2>إضافة خطة جديدة</h2>
            </div>
            <MDBInput
              wrapperClass="mb-4 mt-4"
              label="سنة البدء"
              id="form1"
              type="number"
              name="sYear"
              onChange={setInput}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="سنة الانتهاء"
              id="form1"
              type="number"
              name="eYear"
              onChange={setInput}
            />
            <div class="d-flex justify-content-even p-2 border border-primary rounded border-3 mb-3">
              <div class="d-flex justify-content-center">
                <h4 class="w-50">إختر الدورات التي ترغب في إضافتها</h4>
              </div>
              <div class="d-flex justify-content-center">
                <ul>
                  {AllCourses.map((i, count) => (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="check1"
                        name={count}
                        value="something"
                        onChange={handlCheckedCourses}
                      />
                      <label class="form-check-label">{i.C_Name}</label>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <button
              class="btn btn-primary w-75"
              type="button"
              onClick={fetchData}
            >
              إضافة
            </button>
          </MDBTabsPane>
          <div class="d-flex justify-content-around p-2 mt-2">
            <a href="/AddCourse">
              <button id="btnSubmit" class="btn btn-primary m-3">
                إضافة دورة جديدة
              </button>
            </a>
          </div>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}

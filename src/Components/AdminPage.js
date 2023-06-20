import React from "react";
import AddTrainingPlan from "./AddTrainingPlan";
import DatepickerComponent from "./DateR";
import BootstrapDatePickerComponent from "./DateR";
import axios from "axios";
import DateR from "./DateR";
import ViewCurrentPlan from "./ViewCurrentPlan";
import ViewFeedback from "./ViewFeedback";
import UserProfile from "./UserProfile";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  let data1 = JSON.parse(UserProfile.getInfo());
  const [AllCourses, setCourses] = useState([]);
  const [AllCourseTrainess, setCourseTrainees] = useState([]);
  const [courseID, setCourseID] = useState("X");
  const [traineeID, setTraineeID] = useState("X");
  const [AllCourseRounds, setCourseRounds] = useState([]);
  const [roundNo, setRoundNo] = useState(-1);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("/adminViewAllCourseRounds2", {
        courseID: courseID,
      })
      .then((res) => {
        if (res.data[0] === 1) {
          setCourseRounds(res.data[1]);
          console.log(res.data);
        } else setCourseRounds([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courseID]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/adminViewAllCourses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(courseID);
    axios
      .post("http://localhost:5000/adminViewAllCourseTrainees", {
        c_ID: courseID,
      })
      .then((res) => {
        setCourseTrainees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courseID]);

  let data = JSON.parse(UserProfile.getInfo());
  return (
    <>
      <div>
        <ViewFeedback />
        <ViewCurrentPlan />
        <DateR TD={data1.TD} />
        <div class="d-flex justify-content-between p-2 border border-2 border-end-0 border-start-0 m-4 align-items-center">
          <div>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={(e) => {
                setCourseID(e.target.value);
              }}
            >
              <option selected value="X">
                اختر تدريب
              </option>

              {AllCourses.map((i) => (
                <option value={i.Course_ID}>{i.C_Name} </option>
              ))}
            </select>
          </div>
          <div>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={(e) => {
                setTraineeID(e.target.value);
              }}
            >
              <option selected value="X">
                اختر متدرب
              </option>

              {AllCourseTrainess.map((i) => (
                <option value={i.trainee_id}>{i.ArName} </option>
              ))}
            </select>
          </div>
          <div>
            <select
              class="form-select"
              id="inputGroupSelect04"
              onChange={(e) => {
                setRoundNo(e.target.value);
              }}
            >
              <option selected value="-1">
                اختر مجموعة
              </option>

              {AllCourseRounds.map((i) => (
                <option value={i.roundno}>{i.roundno}</option>
              ))}
            </select>
          </div>
          <button
            class="btn btn-outline-primary"
            onClick={() => {
              if (courseID !== "X" && traineeID !== "X") {
                navigate("/Certificate", {
                  state: { c_ID: courseID, t_ID: traineeID, roundNo: 1 },
                });
              } else alert("رجاء أكمل بياناتك");
            }}
          >
            إصدار شهادة
          </button>

          <button
            id="btnSubmit"
            class="btn btn-outline-primary"
            onClick={() => {
              if (courseID !== "X" && traineeID !== "X" && roundNo !== -1) {
                navigate("/Report", {
                  state: { c_ID: courseID, t_ID: traineeID, roundNo: roundNo },
                });
              } else alert("رجاء أكمل بياناتك");
            }}
          >
            إصدار تقرير
          </button>
        </div>
        <div class="d-flex justify-content-around p-2 ">
          <a href="/AddAdmin">
            <button id="btnSubmit" class="btn btn-primary ">
              إضافة مشرف
            </button>
          </a>
          <a href="/AddInstructor">
            <button id="btnSubmit" class="btn btn-primary ">
              إضافة مدرب
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

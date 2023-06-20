import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function ReserveRoom() {
  const [day, setDay] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [courseID, setCourseID] = useState("");
  const [R_ID, setR_ID] = useState(0);

  const [AvailRooms, setAvailRooms] = useState([]);
  const [AllCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/adminViewAllCourses", {})
      .then((res) => {
        setAllCourses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function viewRooms() {
    console.log(day);
    console.log(from);
    if (day != 0 && courseID != "" && from != "" && to != "") {
      axios
        .post("http://localhost:5000/GetAvailRooms", {
          resDate: day,
          C_ID: courseID,
          from: from,
          to: to,
        })
        .then((res) => {
          setAvailRooms(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  }

  function reserveRoom() {
    if (day != 0 && courseID != "" && from != "" && to != "" && R_ID != 0) {
      axios
        .post("http://localhost:5000/ReserveRoom", {
          C_ID: courseID,
          ResDate: day,
          stDate: from,
          endDate: to,
          Room_ID: R_ID,
        })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  }

  // function check() {

  //     let x = document.getElementById('from1').value
  //     let y = document.getElementById('from2').value
  //     if (x >= y) {
  //         alert("invalid inputs")
  //         document.getElementById('from2').value = parseInt(parseInt(x) + 1)
  //     }
  //     console.log(x, y)
  // }
  return (
    <div class="outer mt-3  row">
      <div class="midd mt-3 mb-3 ">
        <form class=" row g-3 border border-primary border-3 rounded bg-light shadow-lg">
          <h2 class="text-primary">حجز القاعات</h2>
          <div>
            <div class=" p-2 mt-2 ">
              <select
                class="form-select "
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setCourseID(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>
                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>

              <div class="col-md-3 text-start">
                <label for="inputEmail4" class="form-labeltext-start">
                  اليوم
                </label>
                <input
                  type="date"
                  class="form-control "
                  id="inputEmail4"
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                />
              </div>
              <div class="col-md-3 text-start">
                <label for="inputEmail4" class="form-labeltext-start">
                  من
                </label>
                <input
                  type="text"
                  class="form-control "
                  id="from1"
                  placeholder="hh:mm:ss"
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
              </div>
              <div class="col-md-3 text-start">
                <label for="inputEmail4" class="form-labeltext-start">
                  إلى
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="from2"
                  placeholder="hh:mm:ss"
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
              </div>
              <div class="d-grid gap-2 col-md-6 mx-auto mb-3">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={viewRooms}
                >
                  عرض الغرف المتاحة
                </button>
              </div>
              <select
                class="form-select "
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setR_ID(e.target.value);
                }}
              >
                <option selected>الغرف المتاحة</option>
                {AvailRooms.map((i) => (
                  <option value={i.room_id}>{i.room_id} </option>
                ))}
              </select>
            </div>
          </div>

          <div class="d-grid gap-2 col-md-3 mx-auto mb-3">
            <button class="btn btn-primary" type="button" onClick={reserveRoom}>
              حجز
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReserveRoom;

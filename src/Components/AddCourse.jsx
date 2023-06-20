import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReserveRoom from "./ReserveRoom";
import axios from "axios";
function AddCourse() {
  const tableColumns = [
    "تاريخ البداية",
    "تاريخ النهاية",
    "الفئة المستهدفة",
    "المدرب",
  ];
  const tableColumnsNames = ["StartDate", "EndDate", "Targ", "Instructor_ID"];
  const [attribute, setAttribute] = useState("");
  const [course, setCourse] = useState({
    Name: "",
    ID: "",
    Brief: "",
  });
  const [AllCourses, setCourses] = useState([]);
  const [AllInstructors, setInstructors] = useState([]);
  const [AllCourseRounds, setCourseRounds] = useState([]);
  const [courseIDUpdate, setCourseIDUpdate] = useState("X");
  const [courseIDDelete, setCourseIDDelete] = useState("X");
  const [courseRoundNo, setCourseRoundNo] = useState("X");
  const [courseRoundColumn, setCourseRoundColumn] = useState("X");
  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const editInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    let v = value.toString();
    setAttribute(v);
  };
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
    axios
      .get("http://localhost:5000/adminViewAllInstrcutors")
      .then((res) => {
        setInstructors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .post("/adminViewAllCourseRounds", {
        courseID: courseIDUpdate,
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
  }, [courseIDUpdate]);

  const handleDelete = () => {
    if (courseIDDelete !== "X") {
      axios
        .post("http://localhost:5000/deleteCourse", {
          courseID: courseIDDelete,
        })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("برجاء إختيار تدريب");
    }
  };
  const handleUpdate = () => {
    if (attribute !== "" && courseRoundNo !== "X") {
      console.log(
        attribute,
        tableColumnsNames[courseRoundColumn],
        courseIDUpdate,
        courseRoundNo
      );
      axios
        .post("/updateCourseRound", {
          att: attribute,
          attributeName: tableColumnsNames[courseRoundColumn],
          C_ID: courseIDUpdate,
          roundNo: courseRoundNo,
        })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("برجاء إكمال البيانات");
    }
  };
  const handleInsert = () => {
    if (
      course.Name.length !== 0 &&
      course.ID.length !== 0 &&
      course.Brief.length !== 0
    ) {
      axios
        .post("/insertCourse", {
          Name: course.Name,
          ID: course.ID,
          Brief: course.Brief,
        })
        .then((res) => {
          alert(res.data);
        });
    } else {
      alert("برجاء إكمال البيانات");
    }
  };
  const Target = (
    <div>
      <label for="input4" class="form-label">
        التعديل
      </label>
      <input
        type="text"
        class="form-control"
        id="input4"
        placeholder="اكتب الصفة الجديدة هنا"
        onChange={editInput}
      />
    </div>
  );
  const Date = (
    <div class="col-md-6 text-start">
      <label for="exampleFormControlTextarea1" class="form-label">
        التاريخ
      </label>
      <input
        type="date"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={editInput}
      />
    </div>
  );
  const Instructors = (
    <select
      class="form-select"
      id="inputGroupSelect04"
      onChange={(e) => {
        setAttribute(e.target.value);
      }}
    >
      <option selected value="">
        اختر مدرب
      </option>

      {AllInstructors.map((i, count) => (
        <option value={i.Instructor_ID}>{i.Username}</option>
      ))}
    </select>
  );
  const courseColmns = (
    <div>
      <select
        class="form-select"
        id="inputGroupSelect04"
        onChange={(e) => {
          setCourseRoundColumn(e.target.value);
        }}
      >
        <option selected value="X">
          اختر ما تريد تعديله
        </option>
        {tableColumns.map((i, count) => (
          <option value={count}>{i}</option>
        ))}
      </select>
      <div class="col-md-6 text-start mb-3 mt-3">
        {courseRoundColumn == "X"
          ? null
          : courseRoundColumn === "0" || courseRoundColumn === "1"
          ? Date
          : courseRoundColumn === "2"
          ? Target
          : courseRoundColumn === "3"
          ? Instructors
          : null}
      </div>
    </div>
  );
  const editCourseRound = (
    <div>
      <select
        class="form-select"
        id="inputGroupSelect03"
        onChange={(e) => {
          setCourseIDUpdate(e.target.value);
        }}
      >
        <option selected value="X">
          اختر تدريب
        </option>

        {AllCourses.map((i) => (
          <option value={i.Course_ID}>{i.C_Name} </option>
        ))}
      </select>
      <div class="mt-3 mb-3">
        {courseIDUpdate === "X" ? (
          () => {
            setCourseRoundNo("X");
          }
        ) : (
          <div>
            <select
              class="form-select"
              id="inputGroupSelect04"
              onChange={(e) => {
                setCourseRoundNo(e.target.value);
              }}
            >
              <option selected value="X">
                اختر مجموعة
              </option>

              {AllCourseRounds.map((i, count) => (
                <option value={i.roundno}>{i.roundno}</option>
              ))}
            </select>
            <div class="mt-3">
              {courseRoundNo === "X"
                ? () => {
                    setCourseRoundColumn("X");
                  }
                : courseColmns}
            </div>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div class="outer mt-3">
      <div class="midd mt-3 mb-3 shadow-lg">
        <form class=" row g-3 border border-primary border-3 rounded bg-light">
          <h2 class="text-primary midd">إضافة دورة</h2>
          <div class="col-md-3 text-start">
            <label for="inputName" class="form-labeltext-start">
              اسم الدورة
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              name="Name"
              onChange={setInput}
              maxLength="100"
            />
          </div>
          <div class="col-md-3 text-start">
            <label for="inputID" class="form-labeltext-start">
              كود الدورة
            </label>
            <input
              type="text"
              class="form-control"
              id="inputID"
              name="ID"
              onChange={setInput}
              maxLength="30"
            />
          </div>
          <div class="mb-3 text-start">
            <label for="exampleFormControlTextarea1" class="form-label">
              وصف الدورة
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              maxlength="100"
              placeholder="يمكنك وضع وصف للدورة هنا"
              name="Brief"
              onChange={setInput}
            ></textarea>
          </div>

          <div class="d-grid gap-2 col-3 mx-auto mb-3">
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleInsert}
            >
              إضافة
            </button>
          </div>
        </form>
      </div>
      <div class="mt-3 mb-3">
        <form class="midd row g-3 border border-primary border-3 rounded bg-light shadow-lg">
          <h2 class="text-primary">تعديل مجموعة</h2>
          {editCourseRound}
          {/* ROOM RESERVATION */}
          <div class="d-flex justify-content-around mb-3">
            <button
              class="btn btn-primary w-25"
              type="button"
              onClick={handleUpdate}
            >
              تعديل
            </button>
            <button
              class="btn btn-primary w-25"
              type="button"
              onClick={() => {
                window.location.href = "/ReserveRoom";
              }}
            >
              حجز قاعة
            </button>
          </div>
        </form>
      </div>
      <div class="mt-3 mb-3 ">
        <form class="midd row g-3 border border-primary border-3 rounded bg-light shadow-lg">
          <h2 class="text-primary">مسح دورة</h2>
          <select
            class="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
            onChange={(e) => {
              setCourseIDDelete(e.target.value);
            }}
          >
            <option selected value="X">
              اختر تدريب
            </option>

            {AllCourses.map((i) => (
              <option value={i.Course_ID}>{i.C_Name} </option>
            ))}
          </select>

          <div class="d-grid gap-2 col-3 mx-auto mb-3">
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleDelete}
            >
              مسح
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;

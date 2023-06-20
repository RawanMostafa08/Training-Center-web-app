import { useState, useEffect } from "react";
import axios from "axios";
import TraineeTable from "./TraineeTable";
import UserProfile from "./UserProfile";
import moment from "moment";
// import { AddQuiz } from "../../dbfiles/dbOperation";
function Instructor() {
  let data = JSON.parse(UserProfile.getInfo());
  const id = data.userID;
  const dateFormatted = "";
  const [CoursesInfo, setCoursesInfo] = useState([]);
  const [AllCourses, setAllCourses] = useState([]); //array state to get all courses of certain instructor-used in combobox
  const [AllAssignIDs, setAllAssignIDs] = useState([]); //array state to get all courses of certain instructor-used in combobox
  const [CoursesDates, setCoursesDates] = useState([]);

  const [courseid, setCourseid] = useState("");
  const [Rno, setRno] = useState(0);
  const [TraineesInfo, setTraineesInfo] = useState([]);
  const [TraineesInfo2, setTraineesInfo2] = useState([]);
  const [TraineesInfo3, setTraineesInfo3] = useState([]);

  const [chosenCourseID, setchosenCourseID] = useState("");
  const [link, setLink] = useState("");
  const [grade, setgrade] = useState(100000);

  const [chosenCourseID2, setchosenCourseID2] = useState("");
  const [AssignInfo, setAssignInfo] = useState([]);

  const [chosenCourseID3, setchosenCourseID3] = useState("");
  const [chosenCourseID4, setchosenCourseID4] = useState("");
  const [Tr_ID, setTr_ID] = useState(0);
  const [Assign_ID, setAssign_ID] = useState(0);
  const [Sublink, setSubLink] = useState("#");

  const [chosenCourseID5, setchosenCourseID5] = useState("");
  const [topics, setTopics] = useState("");
  const [QuizDate, setQuizDate] = useState("");
  const [RoomID, setRoomID] = useState("");

  const [desc, setdesc] = useState("");
  const current = new Date();
  const datee = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const [deadl, setdeadl] = useState("");

  const [chosenCourseID6, setchosenCourseID6] = useState("");
  const [Tr_ID2, setTr_ID2] = useState(0);
  const [QuizTopic, setQuizTopic] = useState(0);
  const [AllQuizTopics, setAllQuizTopics] = useState([]);
  const [Qgrade, setQgrade] = useState(100000);

  let tableHeadrs = ["اسم التدريب", "تاريخ النهاية", "تاريخ البداية"];
  useEffect(() => {
    // console.log(id);
    axios
      .post("http://localhost:5000/GetCoursesInfo", {
        Instructor_ID: id,
      })
      .then((res) => {
        setCoursesInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllInstCourses", {
        Instructor_ID: id,
      })
      .then((res) => {
        setAllCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const InsertContent = () => {
    if (chosenCourseID != "" && link != "") {
      // console.log(course, assign);
      axios
        .post("http://localhost:5000/AddContent", {
          Instructor_ID: id,
          C_ID: chosenCourseID,
          link: link,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };
  const [clicked, SetClicked] = useState(false);
  const [clicked2, SetClicked2] = useState(false);
  const [show, SetShow] = useState(false);

  const PutGrade = () => {
    if (
      chosenCourseID4 != "" &&
      grade != 100000 &&
      Tr_ID != 0 &&
      Assign_ID != 0
    ) {
      axios
        .post("http://localhost:5000/AddGrade", {
          Grade: grade,
          T_ID: Tr_ID,
          A_ID: Assign_ID,
          C_ID: chosenCourseID4,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };

  const PutQGrade = () => {
    if (
      chosenCourseID6 != "" &&
      Qgrade != 100000 &&
      Tr_ID2 != 0 &&
      QuizTopic != ""
    ) {
      axios
        .post("http://localhost:5000/AddTraineeQuiz", {
          T_ID: Tr_ID2,
          Grade: Qgrade,
          topic: QuizTopic,
          C_ID: chosenCourseID6,
          Instructor_ID: id,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };

  function handleClick() {
    SetClicked(true);
  }
  function handleHideClick() {
    SetClicked(false);
  }

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetTraineesInfo", {
        Course_ID: courseid,
        RoundNo: Rno,
      })
      .then((res) => {
        setTraineesInfo(res.data);
        // console.log(res.data);
        console.log(courseid);
        console.log(Rno);
      })
      .catch((err) => console.log(err));
  }, [courseid, Rno]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/ViewTrainees", {
        Instructor_ID: id,
        C_ID: chosenCourseID4,
      })
      .then((res) => {
        setTraineesInfo2(res.data);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID4]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/ViewTrainees", {
        Instructor_ID: id,
        C_ID: chosenCourseID6,
      })
      .then((res) => {
        setTraineesInfo3(res.data);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID6]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllQuizTopics", {
        Instructor_ID: id,
        C_ID: chosenCourseID6,
      })
      .then((res) => {
        setAllQuizTopics(res.data);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID6]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllCoursesDates", {
        Instructor_ID: id,
        C_ID: chosenCourseID5,
      })
      .then((res) => {
        setCoursesDates(res.data);
        console.log(CoursesDates);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID5]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAssignIDs", {
        Course_ID: chosenCourseID4,
        Instructor_ID: id,
      })
      .then((res) => {
        setAllAssignIDs(res.data);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID4]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllAssignments", {
        Instructor_ID: id,
        C_ID: chosenCourseID2,
      })
      .then((res) => {
        setAssignInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [chosenCourseID2]);
  const InsertNewAssign = () => {
    if (chosenCourseID3 != "" && deadl != "" && desc != "") {
      axios
        .post("http://localhost:5000/AddAssign", {
          Desc: desc,
          Deadline: deadl,
          date: datee,
          C_ID: chosenCourseID3,
          Instructor_ID: id,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetRoomID", {
        resDate: QuizDate,
        C_ID: chosenCourseID5,
        Instructor_ID: id,
      })
      .then((res) => {
        // alert(res.data.room_ID);

        setRoomID(res.data);
      })
      .catch((err) => console.log(err));
  }, [QuizDate]);

  useEffect(() => {
    console.log(RoomID);

    SetShow(true);
  }, [RoomID]);

  const InsertNewQuiz = () => {
    if (chosenCourseID5 != "" && QuizDate != "" && topics != "") {
      axios
        .post("http://localhost:5000/AddQuiz", {
          Topics: topics,
          Qdate: QuizDate,
          C_ID: chosenCourseID5,
          Instructor_ID: id,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };

  const ViewThisAssign = () => {
    SetClicked2(true);
    if (chosenCourseID4 != "" && Tr_ID != 0 && Assign_ID != 0) {
      axios
        .post("http://localhost:5000/GetSubLink", {
          Tr_ID: Tr_ID,
          C_ID: chosenCourseID4,
          As_ID: Assign_ID,
        })
        .then((res) => {
          console.log(res.data);
          setSubLink(res.data);
        })
        .catch((err) => console.log(err));
    } else alert("بيانات غير كاملة");
  };
  const x = (
    <div>
      <h2 class="text-start">المتدربين</h2>
      <div class="overflow-auto">
        <div class="table-responsive">
          <table class="table  m-4">
            <thead>
              <tr>
                <th scope="col">الاسم</th>
                <th scope="col">البريد الاكتروني</th>
                <th scope="col">رقم التليفون</th>
              </tr>
            </thead>
            <tbody>
              {TraineesInfo.map((TD) => (
                <tr>
                  <td>{TD.ArName}</td>
                  <td>{TD.Email}</td>
                  <td>{TD.PhoneNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const RID = (
    <div class="alert alert-primary " role="alert">
      رقم الغرفة: {RoomID}
    </div>
  );

  return (
    <div class="herostOut d-flex justify-content-center">
      <div class="heroSt">
        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <h2 class="text-start">معلومات الدورة</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                {tableHeadrs.map((TH) => (
                  <th>{TH}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CoursesInfo.map((TD) => (
                <tr>
                  <td>{TD.c_name}</td>
                  <td>{moment(TD.startdate).format("DD-MM-YYYY")}</td>
                  <td>{moment(TD.enddate).format("DD-MM-YYYY")}</td>
                  <td>
                    <div class="col-6 me-5">
                      <button
                        class="btn btn-primary form-control  btn-block"
                        onClick={() => {
                          SetClicked(true);
                          setCourseid(TD.course_id);
                          setRno(TD.roundno);
                        }}
                      >
                        عرض جميع المتدربين
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <figure>
            <blockquote class="blockquote text-start">
              <h2>إضافة محتوى جديد</h2>
            </blockquote>
            <figcaption class="blockquote-footer text-start">
              يرجي اختيار التدريب المناسب ثم وضع الرابط المرفوع على google drive
              ثم الضغط على زر إضافة محتوى <cite title="Source Title"></cite>
            </figcaption>
          </figure>
          <div class="container">
            <div class="d-flex flex-row justify-content-space-around mb-3">
              <select
                class="form-select "
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setchosenCourseID(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>

                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>
              <input
                name="Username"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="ضع رابط المحتوى هنا"
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              ></input>
              <div class="col-3 ms-5">
                <button
                  id="btnSubmit"
                  class="btn btn-primary form-control btn-block"
                  onClick={InsertContent}
                >
                  إضافة محتوى جديد
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <h2 class="text-start">الواجبات </h2>
          <select
            class="form-select choose"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
            onChange={(e) => {
              setchosenCourseID2(e.target.value);
            }}
          >
            <option selected>اختر تدريب</option>

            {AllCourses.map((i) => (
              <option value={i.Course_ID}>{i.C_Name} </option>
            ))}
          </select>
          <table class="table table-hover table1">
            <thead>
              <tr>
                <th scope="col">رقم الواجب</th>
                <th scope="col">الموعد النهائي للتسليم</th>
              </tr>
            </thead>
            <tbody>
              {AssignInfo.map((TD) => (
                <tr>
                  <td>{TD.A_ID}</td>
                  <td>{moment(TD.Deadline).format("DD-MM-YYYY")}</td>
                  <td>{}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <figure>
            <blockquote class="blockquote text-start">
              <h2>إضافة واجب جديد</h2>
            </blockquote>
          </figure>

          <div class="container">
            <div class="d-flex flex-row justify-content-space-around mb-3">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setchosenCourseID3(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>

                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>
              <input
                name="Username"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="اكتب وصف الواجب هنا"
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
              ></input>
              <div class="col-md-3 text-start">
                <label for="inputEmail4" class="form-labeltext-start">
                  آخر ميعاد للتسليم
                </label>
                <input
                  type="date"
                  class="form-control "
                  id="inputEmail4"
                  onChange={(e) => {
                    setdeadl(e.target.value);
                  }}
                />
              </div>
              <div class="col-3 ms-5">
                <button
                  id="btnSubmit"
                  class="btn btn-primary form-control btn-block"
                  onClick={InsertNewAssign}
                >
                  إضافة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <h2 class="text-start">تقييم الواجبات</h2>
          <div class="d-flex bd-highlight mb-3 p-2 border border-2">
            <div class="dropdown d-flex flex-row bd-highlight ">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setchosenCourseID4(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>

                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setTr_ID(e.target.value);
                }}
              >
                <option selected>اختر اسم المتدرب</option>

                {TraineesInfo2.map((i) => (
                  <option value={i.trainee_id}>{i.ArName} </option>
                ))}
              </select>

              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setAssign_ID(e.target.value);
                }}
              >
                <option selected>اختر رقم الواجب</option>

                {AllAssignIDs.map((i) => (
                  <option value={i.A_ID}>{i.A_ID} </option>
                ))}
              </select>

              <div class="ms-5">
                <button
                  id="btnSubmit"
                  class="btn btn-primary sub "
                  onClick={ViewThisAssign}
                >
                  عرض الواجب
                </button>
              </div>
              <div class="ms-5">
                {clicked2 == true && Sublink !== "#" ? (
                  <a href={Sublink} target="_blank">
                    <button id="btnSubmit" class="btn btn-primary sub ">
                      الاتجاه لرابط الواجب
                    </button>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <div class="input-group mb-3">
              <h2 class="text-start">تسجيل درجة</h2>
              <div class="divv d-flex flex-row ">
                <label class="ml-5">الدرجة</label>
                <input
                  type="number"
                  name="Username"
                  class="form-control numericc"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setgrade(e.target.value);
                  }}
                ></input>
              </div>

              <div class="input-group-prepend">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={PutGrade}
                >
                  تسجيل الدرجة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <figure>
            <blockquote class="blockquote text-start">
              <h2>إضافة امتحان جديد</h2>
            </blockquote>
          </figure>

          <div class="container">
            <div class="d-flex flex-row justify-content-space-around mb-3">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setchosenCourseID5(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>

                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>
              <input
                name="Username"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="المواضيع الموجودة في الامتحان"
                onChange={(e) => {
                  setTopics(e.target.value);
                }}
              ></input>
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setQuizDate(e.target.value);
                }}
              >
                <option selected>اختر ميعاد</option>

                {CoursesDates.map((i) => (
                  // {moment(TD.startdate).format("DD-MM-YYYY")}
                  <option value={i.resDate}>
                    {moment(i.resDate).format("DD-MM-YYYY")}{" "}
                  </option>
                ))}
              </select>

              <div class="col-3 ms-5">
                <button
                  id="btnSubmit"
                  class="btn btn-primary form-control btn-block"
                  onClick={InsertNewQuiz}
                >
                  إضافة
                </button>
              </div>
            </div>
            <div class="m-4 mb-3 ">{show == true ? RID : null}</div>
          </div>
        </div>

        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          <h2 class="text-start">تقييم الامتحانات</h2>
          <div class="d-flex bd-highlight mb-3 p-2 border border-2">
            <div class="dropdown d-flex flex-row bd-highlight ">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setchosenCourseID6(e.target.value);
                }}
              >
                <option selected>اختر تدريب</option>

                {AllCourses.map((i) => (
                  <option value={i.Course_ID}>{i.C_Name} </option>
                ))}
              </select>
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setTr_ID2(e.target.value);
                }}
              >
                <option selected>اختر اسم المتدرب</option>

                {TraineesInfo3.map((i) => (
                  <option value={i.trainee_id}>{i.ArName} </option>
                ))}
              </select>

              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setQuizTopic(e.target.value);
                }}
              >
                <option selected>اختر موضوع الامتحان</option>

                {AllQuizTopics.map((i) => (
                  <option value={i.Topics_}>{i.Topics_} </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div class="input-group mb-3">
              <h2 class="text-start">تسجيل درجة</h2>
              <div class="divv d-flex flex-row ">
                <label class="ml-5">الدرجة</label>
                <input
                  type="number"
                  name="Username"
                  class="form-control numericc"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setQgrade(e.target.value);
                  }}
                ></input>
              </div>

              <div class="input-group-prepend">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={PutQGrade}
                >
                  تسجيل الدرجة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 mb-3 border border-primary border-3 rounded shadow-lg">
          {clicked == true ? x : null}
          {clicked == true ? (
            <button
              id="btnSubmit"
              class="btn btn-primary "
              onClick={handleHideClick}
            >
              إخفاء الجدول
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Instructor;

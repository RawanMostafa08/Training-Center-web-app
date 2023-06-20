import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import moment from "moment";

function StudentHome() {
  let data = JSON.parse(UserProfile.getInfo());
  const id = data.userID;
  // console.log(id);
  const [AllCourses, setAllCourses] = useState([]); //array state to get all courses of certain trainee-used in combobox
  const [AllAssigns, setAllAssigns] = useState([]); //array state to get all assignments of certain trainee and course-used in combobox

  const [AllAssigns2, setAllAssigns2] = useState([]); //array state to get all assignments of certain trainee and course-used in combobox


  const [courseID, setCourseID] = useState("") //used to get the assignments for this C_ID
  const [assign, setAssign] = useState(0)     //used to fetch grade
  const [grade, setGrade] = useState("...")   //grade result fetched from db

  const [courseID2, setCourseID2] = useState("")
  const [content, setContent] = useState("...")

  const [courseID3, setCourseID3] = useState("")   //used to get the assignments for this C_ID
  const [assign3, setAssign3] = useState(0)    //submit assignment
  const [link, setLink] = useState("")

  const [courseID4, setCourseID4] = useState("")   //used to get the assignments for this C_ID
  const [feedback_txts, setfeedback_txts] = useState("")   //used to get the assignments for this C_ID

  const [QuizInfo, setQuizInfo] = useState([]); //array state to get all courses of certain trainee-used in combobox
  const [NextQuizInfo, setNextQuizInfo] = useState([]); //array state to get all courses of certain trainee-used in combobox


  let tableHeadrs = ["اسم التدريب", "تاريخ الامتحان", "رقم الغرفة", "المواضيع ", "التقييم"];
  let tableHeadrs2 = ["اسم التدريب", "تاريخ الامتحان", "رقم الغرفة", "المواضيع "];

  const current = new Date();
  const datee = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
  // const datee = moment(datee2).format("YYYY-MM-DD");
  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllCourses", {

        T_ID: id

      }).then((res) => {
        setAllCourses(res.data);
      }).catch(err => console.log(err));
  }, [])


  useEffect(() => {
    axios
      .post("http://localhost:5000/GetQuizesInfo", {

        Tr_ID: id

      }).then((res) => {
        setQuizInfo(res.data);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetNextQuizesInfo", {

        Tr_ID: id

      }).then((res) => {
        setNextQuizInfo(res.data);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllAssign", {

        T_ID: id,
        C_ID: courseID

      }).then((res) => {
        setAllAssigns(res.data);
      }).catch(err => console.log(err));
  }, [courseID])


  useEffect(() => {
    axios
      .post("http://localhost:5000/GetAllAssign", {

        T_ID: id,
        C_ID: courseID3

      }).then((res) => {
        setAllAssigns2(res.data);
      }).catch(err => console.log(err));
  }, [courseID3])



  const fetchGrade = () => {
    if (courseID != "" && assign != 0) {
      // console.log(courseID, assign);
      axios
        .post("http://localhost:5000/getGrade", {
          Tr_ID: id,
          C_ID: courseID,
          As_ID: assign,
        })
        .then((res) => {
          setGrade(res.data)
          // console.log(res.data);
        }
        );

    };
  }
  const fetchContent = () => {
    if (courseID2 != "") {
      // console.log(course, assign);
      axios
        .post("http://localhost:5000/getContent", {

          C_ID: courseID2,
          Tr_ID: id
        })
        .then((res) => {
          setContent(res.data)
          // console.log(content);
        }
        );

    };
  }
  const InsertAssign = () => {
    if (courseID3 != "" && assign3 != 0 && link != "") {
      // console.log(course, assign);
      axios
        .post("http://localhost:5000/submitAssign", {

          T_ID: id,
          A_ID: assign3,
          C_ID: courseID3,
          link: link
        })
        .then((res) => {
          alert(res.data)
          // console.log(content);
        }
        );

    } else { alert("بياناتك غير كاملة") }
  }

  const InsertFeedback = () => {

    console.log(datee);
    if (courseID4 != "" && feedback_txts != "") {
      // console.log(course, assign);
      axios
        .post("http://localhost:5000/submitFeedback", {

          T_ID: id,
          C_ID: courseID4,
          feedback_txt: feedback_txts,
          F_date: datee
        })
        .then((res) => {
          alert(res.data)
          // console.log(content);
        }
        );

    } else { alert("بيانات غير كاملة") }
  }
  return (
    <div class="herostOut d-flex justify-content-center">
      <div class="heroSt">
        <div class="stdfuncs ">
          <div class="input-group mb-3 border border-primary border-3 rounded shadow-lg">
            <h2 class="thish2 col-md-12">عرض التقييم الحالي</h2>
            <div class="group1 col-md-12">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => { setCourseID(e.target.value) }}
              >
                <option selected>اختر تدريب</option>

                {
                  AllCourses.map(i => (
                    <option value={i.Course_ID}>{i.C_Name} </option>
                  ))
                }
              </select>
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => { setAssign(e.target.value) }}
              >
                <option selected>اختر رقم الواجب</option>
                {
                  AllAssigns.map(i => (
                    <option value={i.A_ID}>{i.A_ID} </option>
                  ))
                }

              </select>
              <button class="btn btn-primary" type="button" onClick={fetchGrade}>
                عرض التقييم
              </button>
            </div>

            <div class="alert alert-primary col-md-12" role="alert">
              تقييمك الحالي: {grade}
            </div>
          </div>

          <div class="input-group mb-3 border border-primary bg-light col-md-12 border-3 rounded shadow-lg">
            <h2 class="thish2 col-md-12">عرض محتوى التدريب</h2>
            <div class="group1 col-md-12">
              <select
                class="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => { setCourseID2(e.target.value) }}
              >
                <option selected>اختر تدريب</option>
                {
                  AllCourses.map(i => (
                    <option value={i.Course_ID}>{i.C_Name} </option>
                  ))
                }
              </select>
              <button class="btn btn-primary " type="button" onClick={fetchContent}>
                عرض المحتوى
              </button>
            </div>
            <div class="alert alert-primary col-md-12" role="alert">
              المحتوى متواجد هنا: {content}
            </div>
          </div>
          <div class=" submit border border-primary bg-light border-3 rounded shadow-lg">
            {" "}
            <figure class="text-center ">
              <blockquote class="blockquote text-start">
                <h2 class="text-center ">تسليم الواجب</h2>
              </blockquote>
              <figcaption class="blockquote-footer text-start">
                يرجي اختيار التدريب المناسب ثم وضع الرابط المرفوع على google drive
                ثم الضغط على زر تسليم <cite title="Source Title"></cite>
              </figcaption>
            </figure>
            <div class="input-group mb-3">
              <div class="group1">
                {" "}
                <select
                  class="form-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  onChange={(e) => { setCourseID3(e.target.value) }}
                >
                  <option selected>اختر تدريب</option>
                  {
                    AllCourses.map(i => (
                      <option value={i.Course_ID}>{i.C_Name} </option>
                    ))
                  }
                </select>
                <select
                  class="form-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  onChange={(e) => { setAssign3(e.target.value) }}
                >
                  <option selected>اختر رقم الواجب</option>
                  {
                    AllAssigns2.map(i => (
                      <option value={i.A_ID}>{i.A_ID} </option>
                    ))
                  }

                </select>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="انسخ هنا رابط الواجب"
                  onChange={(e) => { setLink(e.target.value) }}
                ></input>
                <button class="btn btn-primary" type="button" onClick={InsertAssign}>
                  تسليم
                </button>
              </div>
            </div>
          </div>

          <div class="feedback mb-3 border border-primary bg-light border-3 rounded shadow-lg">
            <figure class="text-center">
              <blockquote class="blockquote text-start">
                <h2 class="text-center">الشكاوي و المقترحات</h2>
              </blockquote>
              <figcaption class="blockquote-footer text-start">
                يسرنا سماع مقترحاتك <cite title="Source Title"></cite>
              </figcaption>
            </figure>
            <div class=" p-2 mt-2 ">
              <select
                class="form-select "
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={(e) => { setCourseID4(e.target.value) }}
              >
                <option selected>اختر تدريب</option>
                {
                  AllCourses.map(i => (
                    <option value={i.Course_ID}>{i.C_Name} </option>
                  ))
                }
              </select>
            </div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => { setfeedback_txts(e.target.value) }}
            ></textarea>
            <button type="button" class="btn btn-primary" onClick={InsertFeedback}>
              إرسال
            </button>
          </div>

          <div class="mb-3 border border-primary bg-light border-3 rounded shadow-lg">
            <h2>الإمتحانات السابقة</h2>
            <table class="table table-hover">
              <thead>
                <tr>
                  {tableHeadrs.map((TH) => (
                    <th>{TH}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {QuizInfo.map((TD) => (
                  <tr>
                    <td>{TD.C_Name}</td>
                    <td>{moment(TD.Quiz_date).format("DD-MM-YYYY")}</td>
                    <td>{TD.room_ID}</td>
                    <td>{TD.Topics_}</td>
                    <td>{TD.grade}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="mb-3 border border-primary bg-light border-3 rounded shadow-lg">
            <h2>الإمتحانات القادمة</h2>
            <table class="table table-hover">
              <thead>
                <tr>
                  {tableHeadrs2.map((TH) => (
                    <th>{TH}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NextQuizInfo.map((TD) => (
                  <tr>
                    <td>{TD.C_Name}</td>
                    <td>{moment(TD.Quiz_date).format("DD-MM-YYYY")}</td>
                    <td>{TD.room_ID}</td>
                    <td>{TD.Topics_}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;

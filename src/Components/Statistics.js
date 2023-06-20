import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import CreatePDF from "./PDF";
import { useLocation } from "react-router-dom";
import axios from "axios";
const ComponentToPrint = React.forwardRef((props, ref) => (
  <div class="pr-2" ref={ref}>
    {console.log(props.props[5])}
    <h4 class="text-center">
      الإنجازات التدريبية
      <br /> خلال الفترة من {props.props[2]} حتى {props.props[1]}
    </h4>
    <div id="dwn">
      <div>
        <table class="table  table-bordered m-4">
          <thead>
            <tr>
              <th scope="col" rowSpan={2}>
                اسم الدورة
              </th>
              <th scope="col" colSpan={2}>
                تاريخ نهاية الدولرة
              </th>
              <th scope="col" rowSpan={2}>
                عدد الدورات
              </th>
              <th scope="col" rowSpan={2}>
                إجمالي عدد المتدربين
              </th>
              <th scope="col" colSpan={4}>
                التصنيف النوعي
              </th>
              <th scope="col" colSpan={4}>
                التصنيف المكاني
              </th>
              <th scope="col" colSpan={2}>
                التصنيف النوعي
              </th>
            </tr>
            <tr>
              <th scope="col">تاريخ بداية الدورة</th>
              <th scope="col">تاريخ نهاية الدورة</th>
              <th scope="col">هندسي</th>
              <th scope="col">طبي</th>
              <th scope="col">مالي</th>
              <th scope="col">مكتبي</th>
              <th scope="col">ديوان</th>
              <th scope="col">تشغيل</th>
              <th scope="col">قاهرة</th>
              <th scope="col">اسكندرية</th>
              <th>ذكر</th>
              <th>أنثى</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الدورات المالية و الإدارية</td>
              <td>{props.props[2]}</td>
              <td>{props.props[1]}</td>
              <td>{props.props[0]}</td>
              <td>{props.props[3]}</td>
              {/* {props.props[4].map((i) => {
                <td>{i}</td>;
              })} */}
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
              <td>{props.props[4]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
));

const Statistics = () => {
  const Types = ["هندسي", "طبي", "مالي", "مكتبي"];
  const Areas = ["منطقة ب", "تشغيل", "قاهرة", "اسكندرية"];
  const Gender = ["ذكر", "أنثى"];
  const typesCount = [];
  const areasCount = [];
  const genderCount = [];
  const [courseCount, setCourseCount] = useState(0);
  const [traineeCount, setTraineeCount] = useState(0);
  const [traineeTypes, setTraineeTypes] = useState([]);
  const [traineeAreas, setTraineeAreas] = useState([]);
  const [traineeGender, setTraineeGender] = useState([]);
  const { state } = useLocation();
  const { d1, d2, TD } = state;
  useEffect(() => {
    axios
      .post("http://localhost:5000/coursesWithinPeriod", {
        td_id: TD,
        sdate: d1,
        edate: d2,
      })
      .then((res) => {
        console.log(res.data);
        setCourseCount(res.data[0].countC);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:5000/courseTraineesWithinPeriod", {
        td_id: TD,
        sdate: d1,
        edate: d2,
      })
      .then((res) => {
        console.log(res.data);
        setTraineeCount(res.data[0].countT);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    for (let i = 0; i < Types.length; i++) {
      axios
        .post("http://localhost:5000/courseTraineesByType", {
          td_id: TD,
          sdate: d1,
          edate: d2,
          jG: Types[i],
        })
        .then((res) => {
          typesCount[i] = res.data[0].traineebyjobgroup;
          setTraineeTypes(typesCount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  useEffect(() => {
    for (let i = 0; i < Areas.length; i++) {
      axios
        .post("http://localhost:5000/courseTraineesByArea", {
          td_id: TD,
          sdate: d1,
          edate: d2,
          area: Areas[i],
        })
        .then((res) => {
          areasCount[i] = res.data[0].traineebyarea;
          setTraineeAreas(areasCount);
          console.log(areasCount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < Types.length; i++) {
      axios
        .post("http://localhost:5000/courseTraineesByGender", {
          td_id: TD,
          sdate: d1,
          edate: d2,
          gender: Gender[i],
        })
        .then((res) => {
          genderCount[i] = res.data[0].traineebygender;
          setTraineeTypes(genderCount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const componentRef = useRef();
  const obj = [
    courseCount,
    d1,
    d2,
    traineeCount,
    traineeTypes,
    traineeAreas,
    traineeGender,
  ];
  return (
    <div>
      <ComponentToPrint ref={componentRef} props={obj} />
      <ReactToPrint
        trigger={() => <button class="btn btn-primary m-4">طباعة</button>}
        content={() => componentRef.current}
      />
      <CreatePDF rootElementId={"dwn"} downloadFileName={"trial"} />
    </div>
  );
};

export default Statistics;

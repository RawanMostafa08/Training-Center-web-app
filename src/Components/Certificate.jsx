import React, { useRef, useState } from "react";
import logo from "../images/download (2)-modified.png";
import logo2 from "../images/Screenshot (269)-modified.png";
import CreatePDF from "./PDF";
import ReactToPrint from "react-to-print";
import { useLocation } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Component = React.forwardRef((props, ref) => (
  <div class="mainn" ref={ref} id="dn">
    <div class="main">
      <br></br>
      <br></br>
      <br></br>
      <div class="header">
        <p>
          الشركة المصرية لنقل الكهرباء
          <br /> قطاع التدريب <br />
          مركز التدريب {props.props.td_name}
          <br /> ت:{props.props.Phone_No}
        </p>
        <img src={logo} alt="img" />
        <img src={logo2} alt="img" />

        <p>
          .Egyptian Electricity Transmission Co <br />
          Training sector <br />
          {props.props.td_name} Training Center <br />
          {props.props.Phone_No}:T
        </p>
      </div>
      <hr />
      <div class="text-start">
        <h4>السيدة المحاسبة/مدير عام</h4>
        <h4>تحية طيبة و بعد...</h4>
        <p>
          نتشرف بإحاطة سيادتكم بأن السيد/
          {props.props.arname} حضر دورة تدريبية في مجال "
          <strong>{props.props.c_name}</strong>" بمركز التدريب
          {props.props.td_name}
        </p>
        <ul>
          <li>
            خلال الفترة من {moment(props.props.startdate).format("DD-MM-YYYY")}{" "}
            إلى {moment(props.props.enddate).format("DD-MM-YYYY")}
          </li>
          <li>
            حضر سيادته عدد{" "}
            {Math.ceil(
              Math.abs(
                new Date(props.props.startdate) - new Date(props.props.enddate)
              ) /
                (1000 * 60 * 60 * 24)
            )}{" "}
            أيام
          </li>
          <li>تغيب عن الحضور: 0</li>
        </ul>
        <p>
          مع العلم بإنه لم يستخدم الاستراحة و لم يستخدم وسائل نقل مصلحية وسوف
          يتم صرف مستحقاته عن هذه الفترة بمعرفة مركز {props.props.td_name}
        </p>
      </div>
      <h4>وتفضلوا بقبول فائق الاحترام...</h4>
      <div class="text-end">
        <h5>
          مدير عام
          <br /> {props.props.td_name}
          <br></br> أ / {props.props.MG_name}
        </h5>
      </div>
    </div>
  </div>
));

function Certificate({ route, navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getReportData", {
        c_ID: c_ID,
        t_ID: t_ID,
        roundNo: roundNo,
      })
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data);
      });
  }, []);
  const { state } = useLocation();
  const { c_ID, t_ID, roundNo } = state;
  const componentRef = useRef();
  return (
    <div>
      <Component ref={componentRef} props={data} />
      <ReactToPrint
        trigger={() => <button class="btn btn-primary m-4">طباعة</button>}
        content={() => componentRef.current}
      />
      <CreatePDF rootElementId={"dn"} downloadFileName={"trial"} />
    </div>
  );
}

export default Certificate;

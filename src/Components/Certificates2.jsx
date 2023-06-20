import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import logo from "../images/download (2)-modified.png";
import logo2 from "../images/Screenshot (269)-modified.png";
import CreatePDF from "./PDF";
import { useLocation } from "react-router";
import axios from "axios";
import moment from "moment";
const Component2 = React.forwardRef((props, ref) => (
  <div id="dw" ref={ref}>
    <br></br>
    <br></br>
    <br></br>
    <div class="bg-light">
      <div class="header2">
        <img src={logo} alt="" />
        <div class="text">
          <h5>وزارةالكهرباء و الطاقة المتجددة</h5>
          <h4 class="thish4">الشركة المصرية لنقل الكهرباء</h4>
          <h5>
            قطاع التدريب <br /> مركز التدريب {props.props.td_name}
          </h5>
        </div>

        <img src={logo2} alt="" />
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h3>
          يشهد مركز التدريب {props.props.td_ame} التابع للشركة المصرية لنقل
          الكهرباء بأن السيد: {props.props.arname} قد اجتاز دورة{" "}
          {props.props.c_name} خلال الفترة من
          {moment(props.props.startdate).format("DD-MM-YYYY")} إلي{" "}
          {moment(props.props.enddate).format("DD-MM-YYYY")}
        </h3>
        <div class="signs">
          <h5>رئيس قطاع التدريب</h5>
          <h5>مدير عام المركز</h5>
        </div>
      </div>
    </div>
  </div>
));
const Certificate2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getCertificateData", {
        c_ID: c_ID,
        t_ID: t_ID,
        roundNo: roundNo,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data[0]);
      });
  }, []);
  const { state } = useLocation();
  const { c_ID, t_ID, roundNo } = state;
  const componentRef = useRef();
  return (
    <div>
      <Component2 ref={componentRef} props={data} />
      <ReactToPrint
        trigger={() => <button class="btn btn-primary m-4">طباعة</button>}
        content={() => componentRef.current}
      />
      <CreatePDF rootElementId={"dw"} downloadFileName={"trial"} />
    </div>
  );
};

export default Certificate2;

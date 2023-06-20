import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
export default function ViewCurrentPlan() {
  const [tableData, setTableData] = useState([]);
  let tableHeadrs = ["تاريخ البدء", "تاريخ الانتهاء", "دورات الخطة"];
  useEffect(() => {
    axios
      .get("http://localhost:5000/adminViewYearlyPlans")
      .then((res) => {
        setTableData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="m-4">
      <h2 class="text-start">الخطة الحالية</h2>
      <table class="table table-hover" id="table">
        <thead>
          <tr>
            {tableHeadrs.map((TH) => (
              <th>{TH}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((TD) => (
            <tr>
              <td>{moment(TD[0]).format("DD-MM-YYYY")}</td>
              <td>{moment(TD[1]).format("DD-MM-YYYY")}</td>
              <select
                id="s1"
                class="form-select form-select-outline-dark m-3  "
                aria-label=".form-select-lg example"
              >
                <option selected value="X">
                  الدورات
                </option>
                {TD[2].map((i) => (
                  <option>{i.c_name}</option>
                ))}
              </select>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <a href="/AddTrainingPlan">
          <button id="btnSubmit" class="btn btn-primary ">
            إضافة خطة جديد
          </button>
        </a>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
function ViewFeedback() {
  const [tableData, setTableData] = useState([]);
  let tableHeadrs = ["التاريخ", "اسم المتدرب", "المحتوى", "اسم التدريب"];
  useEffect(() => {
    axios
      .get("http://localhost:5000/adminViewFeedback")
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div class="m-4">
        <h2 class="text-start">الشكاوى/المقترحات</h2>
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
                <td>{moment(TD.F_date).format("DD-MM-YYYY")}</td>
                <td>{TD.ArName}</td>
                <td>{TD.feedback_txt}</td>
                <td>{TD.C_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewFeedback;

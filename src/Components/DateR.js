import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DateR({ TD }) {
  console.log(TD);
  const navigate = useNavigate();
  const [date1, setDate1] = useState("X");
  const [date2, setDate2] = useState("X");
  return (
    <div class="m-4">
      <h2 class="text-start mb-4">الاحصائيات</h2>
      <div class="d-flex justify-content-between p-2 border border-2 border-end-0 border-start-0">
        <div>
          <label>تاريخ البداية</label>
          <input
            class="Input"
            type={"date"}
            onChange={(e) => {
              setDate1(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label>تاريخ النهاية</label>
          <input
            class="Input"
            type={"date"}
            onChange={(e) => {
              setDate2(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <button
          id="btnSubmit"
          class="btn btn-outline-primary "
          onClick={() => {
            if (date1 !== "X" && date2 !== "X") {
              navigate("/Statistics", {
                state: { d1: date1, d2: date2, TD: TD },
              });
            } else alert("رجاء أكمل بياناتك");
          }}
        >
          عرض الاحصائيات
        </button>
      </div>
    </div>
  );
}

export default DateR;

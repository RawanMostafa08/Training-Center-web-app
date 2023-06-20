import React from "react";

function ViewFeedback() {
  return (
    <div class="p-3 mb-2 bg-light ">
      <h1>الشكاوى و المقترحات:</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">اسم الطالب</th>
            <th scope="col">رقم الطالب</th>
            <th scope="col">المقترح/الشكوى</th>
            <th scope="col">التاريخ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewFeedback;

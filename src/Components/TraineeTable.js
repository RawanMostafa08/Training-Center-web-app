function TraineeTable() {
  return (
    <div>
      <h2 class="text-start">المتدربين</h2>
      <div class="overflow-auto">
        <div class="table-responsive">
          <table class="table  m-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TraineeTable;

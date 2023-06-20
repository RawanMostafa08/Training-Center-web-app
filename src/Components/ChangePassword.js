function ChangePassword() {
  return (
    <div
      id="CPdiv"
      class="d-flex align-items-center justify-content-center p-5"
    >
      <form>
        <h1 class="text-start">تغيير كلمة المرور</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            اسم المستخدم
          </label>
          <div class="col-sm-10">
            <input
              type="username"
              class="form-control"
              id="inputEmail3"
              placeholder="اسم المستخدم"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            كلمة المرور الحالية
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="كلمة المرور"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            كلمة المرور الجديدة
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="كلمة المرور"
            ></input>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          تأكيد
        </button>
      </form>
    </div>
  );
}
export default ChangePassword;

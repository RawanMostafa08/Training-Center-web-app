function Navbar() {
  return (
    <nav class="navv navbar navbar-expand-lg navbar-light bg-secondary">
      <a class="navbar-brand text-light" href="/">
        الشركة المصرية لنقل الكهرباء
      </a>
      <div class="d-flex justify-content-between">
        <div class="column me-4 bg-primary border border-light navLink">
          <a href="/ChangePassword" class="link-light navLink">
            تغيير كلمة المرور
          </a>
        </div>
        <div class="column me-4 bg-primary border border-light navLink">
          <a href="/" class="link-light navLink">
            تسجيل الخروج
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

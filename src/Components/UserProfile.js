var UserProfile = (function () {
  let obj;
  var getInfo = function () {
    return localStorage.getItem("userInfo"); // Or pull this from cookie/localStorage
  };

  var setInfo = function (user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    // Also set this in cookie/localStorage
  };

  return {
    getInfo: getInfo,
    setInfo: setInfo,
  };
})();

export default UserProfile;

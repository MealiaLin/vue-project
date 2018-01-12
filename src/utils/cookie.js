/*
 封装了cook的简单的set get delete 函数
 case
 coookie('aaa',111,{});
 coookie('aaa',111); 为set
 coookie('aaa')  为get
 coookie('aaa',false) 为delete
 */

(function (w) {
  var cookie = function (name, value, days) {
    // if value is undefined, get the cookie value
    if (value === undefined) {
      var cookiestring = "; " + w.decodeURI(w.document.cookie);
      var cookies = cookiestring.split("; " + name + "=");
      if (cookies.length === 2) {
        return cookies.pop().split(";").shift();
      }
      return null;
    } else {
      // if value is a false boolean, we'll treat that as a delete
      if (value === false) {
        days = -1;
      }
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }
      w.document.cookie = w.encodeURI(name + "=" + value + expires + "; path=/");
    }
  };
  // commonjs
  if (typeof module !== "undefined") {
    module.exports = cookie;
  } else {
    w.cookie = cookie;
  }
}(typeof global !== "undefined" ? global : this));

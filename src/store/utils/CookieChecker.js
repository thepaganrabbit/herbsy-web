
class CookieChecker {
  _exists = false;
  _cookie = {};

  loadCookie(key) {
      this._exists = false;
      if (!localStorage.getItem(key)) this._exists = false;
      const cookie = localStorage.getItem(key);
      const parsedCookie = JSON.parse(cookie);
      if (!cookie && !parsedCookie.token) this._exists = false;
      this._cookie = parsedCookie;
      this._exists = true;
      this._exists = false;
  }

  static setCookie(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getCookieStatus(key) {
    try {
      this._exists = false;
      const cookie = localStorage.getItem(key);
      const parsedCookie = JSON.parse(cookie);
      if (!cookie && !parsedCookie.token) this._exists = false;
      this._cookie = parsedCookie;
    } catch (error) {
      this._cookie = false;
    }
  }
}

export default CookieChecker;

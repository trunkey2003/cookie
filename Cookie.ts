import Cookies from "universal-cookie";

const setCookieRoom = (key: string, value: string) => {
  const cookies = new Cookies();
  cookies.set(key, value, { path: "/live" });
};

const removeCookieRoom = (key: string) => {
  const cookies = new Cookies();
  cookies.remove(key, { path: "/live" });
};

function getCookieRoom(key: string) {
  let name: string = key + "=";
  let decodedCookie: string = decodeURIComponent(document.cookie);
  let ca: string[] = decodedCookie.split(";");
  for (let i: number = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

import * as jose from "jose";
function handleRedirect(event) {
  const redirectTo = event.url.pathname + event.url.search;
  return `/auth?redirectTo=${redirectTo}`;
}
async function userId(cookies) {
  const token = cookies.get("hanko");
  const payload = jose.decodeJwt(token ?? "");
  const userID = payload.sub;
  return userID;
}
async function getUserID(cookies) {
  let user_id = await userId(cookies);
  return user_id;
}
function formatDate(dateString) {
  const dateObject = new Date(dateString);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = dayNames[dateObject.getUTCDay()];
  const month = dateObject.toLocaleString("en-US", { month: "short" });
  const day = dateObject.getUTCDate();
  const result = `${dayOfWeek} ${month} ${day}`;
  return result;
}
export {
  formatDate as f,
  getUserID as g,
  handleRedirect as h
};

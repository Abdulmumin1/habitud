import * as jose from "jose";
async function userId(cookies) {
  const token = cookies.get("hanko");
  try {
    const payload = jose.decodeJwt(token ?? "");
    const userID = payload.sub;
    return userID;
  } catch (err) {
    console.error(err);
  }
}
async function getUserID(cookies) {
  let user_id = await userId(cookies);
  return user_id;
}
async function load({ cookies }) {
  return { currentUserId: getUserID(cookies) };
}
export {
  load
};

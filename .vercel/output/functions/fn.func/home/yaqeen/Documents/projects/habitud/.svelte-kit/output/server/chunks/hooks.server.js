import { r as redirect } from "./index.js";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { p as public_env } from "./shared-server.js";
import { h as handleRedirect } from "./index3.js";
const hankoApiUrl = public_env.PUBLIC_HANKO_API_URL;
const authenticatedUser = async (event) => {
  const { cookies } = event;
  const hanko = cookies.get("hanko");
  const JWKS = createRemoteJWKSet(new URL(`${hankoApiUrl}/.well-known/jwks.json`));
  try {
    await jwtVerify(hanko ?? "", JWKS);
    return true;
  } catch {
    return false;
  }
};
const handle = async ({ event, resolve }) => {
  const verified = await authenticatedUser(event);
  if (event.url.pathname.startsWith("/streaks") && !verified) {
    throw redirect(303, handleRedirect(event));
  }
  const response = await resolve(event);
  return response;
};
export {
  handle
};

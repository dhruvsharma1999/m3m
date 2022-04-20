// =============================================================================
// COMMON API PARAMETERS
// =============================================================================
import axios from "axios";

// accessing JWT token
function getJWTtoken() {
  if (typeof window !== "undefined") {
    let token = localStorage.getItem("accessToken");
    return token;
  } else {
    return null;
  }
}
let JWTresponse = getJWTtoken();

// =============================================================================
// SETTING UP SINGLE AXIOS INSTANCE
// =============================================================================

const axiosClient = axios.create({
  // baseURL: `http://c6ed-182-71-137-235.ngrok.io/api/v1`,
  baseURL: `https://mhappapis.vc.myhealthcare.co//api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${JWTresponse}`,
  },
});

// =============================================================================
// AXIOS INTERCEPTOR FOR UNAUTHORIZED API CALLS
// =============================================================================
axiosClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let res = error.response;
    if (res.status == 401) {
      window.location.href = "http://localhost:3000/401";
    }
    console.error("Looks like there was a problem. Status Code:?" + res.status);
    return Promise.reject(error);
  }
);

//exporting axios client
export default axiosClient;

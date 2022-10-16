import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWExNTk2ZTk1YTExZDRjYTUwNDcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDE5NTQzMiwiZXhwIjoxNjY0NDU0NjMyfQ.Js7K75sGE9mcxbjt7M8x4yUuosXBuoBy7BwY2eLpDi4";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

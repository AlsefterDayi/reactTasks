import axios from "axios";

export async function LoginUser(username, password) {
  let users = await axios.get(import.meta.env.VITE_USER_URL);
  let find = users.data.find(
    (u) => u.login === username && u.pass === password
  );
  if (find) {
    return find;
  } else {
    throw new Error("User not found");
  }
}

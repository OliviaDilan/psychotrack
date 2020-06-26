import * as api from "api";

export async function post(req, res) {
  const user = req.body;
  try {
    const userData = await api.users.register(user);
    await api.users.createProfile({}, userData.token);
    req.session.user = userData;
    res.end(JSON.stringify(userData));
  } catch (err) {
    res.statusCode = err.status;
    res.end(JSON.stringify(err));
  }
}

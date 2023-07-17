export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user') as string);

  if (user && user.access) {
    return { Authorization: 'Bearer ' + user.access };
  } else {
    return {};
  }
}
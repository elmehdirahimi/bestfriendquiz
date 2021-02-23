export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken ,
    'Accept-Language':localStorage.getItem("language")?localStorage.getItem("language"):"en"}; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {'Accept-Language':localStorage.getItem("language")?localStorage.getItem("language"):"en"};
  }
}

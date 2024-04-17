const signupform = document.getElementById("signup");
const signinform = document.getElementById("signin");
let arr = JSON.parse(localStorage.getItem('Profile')) || []
signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  let signupobj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    country: document.querySelector("#country").value,
    phone: document.querySelector("#phone").value,
    password: document.querySelector("#password").value,
  };
  arr.push(signupobj);
  // console.log(signupobj);
  localStorage.setItem("Profile", JSON.stringify(arr));
});

signinform.addEventListener("submit", (e) => {
  e.preventDefault();
  let signinobj = {
    name: document.querySelector("#signin-name").value,
    email: document.querySelector("#signin-email").value,
    password: document.querySelector("#signin-password").value,
  };
  //    console.log(signinobj);
  let loginformdata = JSON.parse(localStorage.getItem("Profile"));
  //  console.log(loginformdata)

  let store = loginformdata.filter((el, i) => el.email == signinobj.email && el.password == signinobj.password)

  if (store[0]) {
    alert(`succesfullty Login Welcome Mr.${signinobj.name}`)
    window.location = "project.html"
  } else {
    alert("Invalid password || email")
  }
});

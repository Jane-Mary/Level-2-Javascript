// const user = "Jane";
// localStorage.setItem("user", user);
// console.log(localStorage);

const user = {name: "Jane"};
localStorage.setItem("user", JSON.stringify(user));
localStorage.getItem("user");
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const US = users.forEach((user) => {
  const newLi = document.createElement("li");
  newLi.innerText = user.firstName + " " + user.lastName;
  const ul = document.querySelector("ol");
  ul.appendChild(newLi);
});
console.log(US);

const ol = document.querySelector("ol");
ol.style = "list-style-type: none;";

ol.children[0].setAttribute("data-id", "167464");
ol.children[1].setAttribute("data-id", "453535");
ol.children[2].setAttribute("data-id", "656335");

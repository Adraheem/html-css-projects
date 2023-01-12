// const usersNode = document.getElementsByTagName("div")[0];
// const ulNode = document.getElementsByTagName("ul")[0];
// const peteNode = ulNode.lastElementChild;

const usersNode = document.querySelector("div");
const ulNode = document.querySelector("ul");
const peteNode = ulNode.querySelector("li:last-child");

console.log(usersNode.textContent);
console.log(ulNode);
console.log(peteNode.textContent);

const p = document.createElement("li");
p.textContent = "This is a p tag";
peteNode.before(p);

document
  .querySelector("table")
  .setAttribute("style", "border-collapse: collapse");

document
  .querySelectorAll("table td")
  .forEach((td) =>
    td.setAttribute("style", "border: 1px solid black; padding: 10px")
  );

document
  .querySelectorAll(
    `tr:nth-child(1)>td:nth-child(1),
    tr:nth-child(2)>td:nth-child(2), 
    tr:nth-child(3)>td:nth-child(3), 
    tr:nth-child(4)>td:nth-child(4), 
    tr:nth-child(5)>td:nth-child(5)`
  )
  .forEach((td) =>
    td.setAttribute(
      "style",
      "background-color: red; border: 1px solid black; padding: 10px; color: white"
    )
  );

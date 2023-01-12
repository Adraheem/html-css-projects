document.addEventListener("DOMContentLoaded", () => {
  if (localStorage) {
    const filterEle = document.querySelector(".filterInput");
    filterEle.value = localStorage.getItem("fText");
  }
});

const formEle = document.getElementById("form");
formEle.onsubmit = (e) => {
  e.preventDefault();

  const filterEle = document.querySelector(".filterInput");
  const commentEle = document.querySelector(".commentInput");

  const filterText = filterEle.value;
  let commentText = commentEle.value;

  if (localStorage) {
    localStorage.setItem("fText", filterText);
  }

  const filterTextArray = filterText.match(/\w+/g);

  filterTextArray.forEach((m) => {
    const regex = new RegExp(`^${m}|\\s${m}`, "g");
    commentText = commentText.replace(
      regex,
      ` ${m[0]}${"*".repeat(m.length - 1)}`
    );
  });

  const commentWrapper = document.querySelector(".body");
  const comment = `<div class="comment">
        <div class="commentBody">
            <p>
            ${commentText}
            </p>
        </div>
        <div class="commenter">AR</div>
        </div>`;
  commentWrapper.insertAdjacentHTML("afterbegin", comment);
};

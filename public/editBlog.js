const edit = document.querySelector(".edit-btn a");
const blogTitle = document.querySelector("#title");
const blogAuthor = document.querySelector("#author");
const blogBody = document.querySelector("#body");
const endpoint = `/blogs/${edit.dataset.doc}`;

edit.addEventListener("click", (e) => {
  e.preventDefault()
  const payload = {
    title: blogTitle.value,
    author: blogAuthor.value,
    body: blogBody.value,
    edited: true,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  fetch(endpoint, options)
    .then((result) => result.json())
    .then((data) => (window.location.href = data.redirect))
    .catch((err) => console.log(err));
});

const trashcan = document.querySelector("a.delete");
const edit = document.querySelector("a.edit");

const endpoint = `/blogs/${trashcan.dataset.doc}`;

trashcan.addEventListener("click", (e) => {
  fetch(endpoint, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => (window.location.href = data.redirect))
    .catch((err) => console.log(err));
});
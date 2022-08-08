const deleteBtn = document.querySelector(".delete");
const selectAll = document.querySelector(".all button");
const submit = document.querySelector(".submit");
const inputForm = document.querySelectorAll("input");

if (deleteBtn) {
    deleteBtn.addEventListener("click", (e) => {
        submit.style.display = "inline-block"

        inputForm.forEach((input) => {
            input.type = "checkbox";

            submit.addEventListener("click", (e) => {
                if (input.checked) {

                    const payload = {
                        title: input.name,
                    };

                    const options = {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    };

                    fetch("/blogs/delete", options)
                        .then((res) => res.json())
                        .then((data) => (window.location.href = data.redirect))
                        .catch((err) => console.log(err));

                }
            });
        });

        selectAll.style.display = "inline-block"
        selectAll.addEventListener('click', (e) => {
            inputForm.forEach(input => input.checked = true)
        })
    })
}
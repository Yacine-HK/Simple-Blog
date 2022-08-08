const dumyBtn = document.querySelector(".dummy")
const date = new Date()
let updatedAt = 1659571202
const data = [
    {
        title: "title1",
        author: "author1",
        body: "this is body 1",
        updatedAt: updatedAt
    },
    {
        title: "title2",
        author: "author2",
        body: "this is body 2",
        updatedAt: updatedAt - 1
    },
    {
        title: "title3",
        author: "author3",
        body: "this is body 3",
        updatedAt: updatedAt - 2
    }
]


const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(data),
}

dumyBtn.addEventListener('click', (e) => {
    fetch('/blogs', options)
        .then(res => res.json())
        .then(data => (window.location.href = data.redirect))
        .catch(err => console.error(err))
})
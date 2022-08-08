const Blog = require('../models/blog')

const date = {
    getDate: (a) => a.createdAt.getDate(),
    getMonth: (a) => a.createdAt.getMonth() + 1,
    getYear: (a) => a.createdAt.getFullYear(),
    getHours: (a) => a.createdAt.getHours(),
    getMinutes: (a) => a.createdAt.getMinutes(),
    getSeconds: (a) => a.createdAt.getSeconds()
}

const allBlogs = (req, res) => {
    Blog.find().sort({ updatedAt: -1 })
        .then(result => res.render('blog/index', { title: 'blogs', blogs: result, date }))
        .catch(err => console.log(err))
}

const getSearchedBlogs = (req, res) => {
    let searchOpt = {}
    searchOpt.title = new RegExp(req.query.bsearch, 'i')
    Blog.find(searchOpt).sort({ updatedAt: -1 })
        .then(result => res.render('blog/searchedBlogs', { blogs: result }))
        .catch(err => console.log(err))

}

const singleBlog = (req, res) => {
    const blogID = req.params.id
    Blog.findById(blogID)
        .then(result => res.render('blog/single', { title: 'blog', singleBlog: result, date }))
        .catch(err => console.error(err))
}

const getCreateBlog = (req, res) => {
    res.render('blog/create', { title: 'blog' })
}

const createNewBlog = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(result => res.redirect('/'))
        .catch(err => console.log(err))
}

const addDummyData = (req, res) => {
    Blog.insertMany(req.body)
        .then(result => res.json({ redirect: '/blogs' }))
        .catch(err => console.error(err))
}

const getEditBlog = async (req, res) => {
    const blogID = req.params.id
    const singleBlog = await Blog.findById(blogID)
    res.render('blog/edit', { singleBlog })
}

const editBlog = async (req, res) => {
    const blogID = req.params.id
    const blogBody = req.body
    const blog = await Blog.findById(blogID)

    if (blog.title === blogBody.title && blog.author === blogBody.author && blog.body.trim() === blogBody.body.trim()) {
        blogBody.edited = false
        return res.json({ redirect: '/blogs' })
    }

    Blog.findByIdAndUpdate({ _id: blogID }, blogBody, { new: true, runValidators: true })
        .then(result => res.json({ redirect: '/blogs' }))
        .catch(err => console.log(err))
}


const deleteBlog = (req, res) => {
    const blogID = req.params.id
    Blog.findByIdAndDelete(blogID)
        .then(result => res.json({ redirect: '/blogs' }))
        .catch(err => console.log(err))
}

const getDeleteBlogs = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => res.render('delete', { title: 'blog', blogs: result, date }))
        .catch(err => console.log(err))
}

const deleteSelectedBlogs = (req, res) => {
    Blog.deleteMany(req.body)
        .then(result => res.json({ redirect: '/' }))
        .catch(err => console.log(err))
}

module.exports = {
    allBlogs,
    getSearchedBlogs,
    singleBlog,
    getCreateBlog,
    createNewBlog,
    addDummyData,
    getEditBlog,
    editBlog,
    deleteBlog,
    getDeleteBlogs,
    deleteSelectedBlogs
}
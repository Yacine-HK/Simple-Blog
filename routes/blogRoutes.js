const express = require('express')
const router = express.Router()
const blogControllers = require('../controllers/blogControllers')

router.get('/', blogControllers.allBlogs)

router.get('/create', blogControllers.getCreateBlog)

router.get('/delete', blogControllers.getDeleteBlogs)

router.get('/blog', blogControllers.getSearchedBlogs)

router.delete('/delete', blogControllers.deleteSelectedBlogs)

router.get('/edit/:id', blogControllers.getEditBlog)

router.put('/:id', blogControllers.editBlog)

router.get('/:id', blogControllers.singleBlog)

router.delete('/:id', blogControllers.deleteBlog)

router.post('/create', blogControllers.createNewBlog)

router.post('/', blogControllers.addDummyData)

module.exports = router
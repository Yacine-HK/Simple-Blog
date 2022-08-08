const express = require('express')
const connectDB = require('./config/db')
const blogRouter = require('./routes/blogRoutes')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')

dotenv.config({ path: "./config/config.env" })

connectDB()

// express app
const app = express()

//ejs & layouts
app.set('view engine', 'ejs')
app.set("layout", "layouts/blogLayout")
app.use(expressLayouts)

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/blogs')
})

// blog routes
app.use('/blogs', blogRouter)

// port
const PORT = process.env.PORT || 3000

app.listen(PORT)

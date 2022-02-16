const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const ejs = require('ejs')
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");
const articlesRouter = require("./routes/articles");
const methodOverride = require('method-override');
const quizRouter = require("./routes/quiz")

// Load configuration
dotenv.config({ path: "./config/config.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//EJS
app.set('view engine', 'ejs')

// Handlebars

app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//method overide for delete button
app.use(methodOverride('_method'))

//Read blog posts 
app.use(express.urlencoded({ extended: false}))

// Sessions

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
  })
);

// Passports Middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/articles", articlesRouter)
app.use("/quiz", quizRouter)


const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`SERVER running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const AuthRouters = require('./routes/Auth.route');
const NoteRouters = require('./routes/note.route')
const cors = require('cors')

dotenv.config();

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}
));


app.use('/api/auth', AuthRouters)
app.use('/api/note',NoteRouters)

module.exports = app
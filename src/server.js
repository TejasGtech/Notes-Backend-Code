const app = require('./app')
const connectDB = require('./db/db')

connectDB();


app.listen(3000 || process.env.PORT,()=>{
    console.log('Server start....');
})


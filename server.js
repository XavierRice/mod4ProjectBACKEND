//DEPENDENCIES
const app = require('./app');


//CONFIGURING
require('dotenv').config();
const PORT = process.env.PORT;

//LISTENING
app.listen(PORT, () =>{
    console.log(`LISTENING:💡💡I can hear you on port ${PORT}💅🏾`)
});
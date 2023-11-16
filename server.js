//DEPENDENCIES
const app = require('./app.js');


//CONFIGURING
require('dotenv').config();
const PORT = process.env.PORT || 4400 ;

//LISTENING
app.listen(PORT, () => {
    console.log(`LISTENING:💡💡I can hear you on port ${PORT}💅🏾`)
});
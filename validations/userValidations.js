
const checkUserName = (req, res, next) => {
    if (req.body.username){
        return next();
    }else{
        res.status(400).json({error: "you need a username"})
    }
};

const checkBoolean = (req, res, next) => {
    const { is_favorite, membership } = req.body;
    if (
        is_favorite === "true" || membership == "true" ||
        is_favorite === "false" || membership == "false" ||
        is_favorite === undefined || membership == undefined ||
        typeof is_favorite === "boolean" || typeof membership === "boolean"
    ) {
        next();
    } else {
        res.status(400).json({error:"I need a boolean"})
    }
};

const checkEmail = (req, res, next) => {
    const { email } = req.body;
    if ( email && isValidEmail(email)){
        next();
    }else{
        res.status(400).json({error: "No fake emails here please"})
    }
}

const checkUrl = (req, res, next) => {
    const {profilePic, videos } = req.body;
    if ( 
        ( profilePic && profilePic.startsWith("https://")) || ( videos && videos.startsWith("https://"))){
        return next()
    } else {
        res.status(400).json({error:"You must have a link for a photo or video"})
    }
};

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Continuing my emploration of regex this the wordle lab. /  /- are the boundaries. any character(notwhite space or @) + "@" and "."
    return emailRegex.test(email)  // test is a method of regex. you make the case or expression then you run tests on it. returns a boolean.
};

const checkPassword = (req, res, next) => {
    const { username, password } = req.body;
   
    const userPasswords = {
        user1: "passwordOne1",
        user2: "passwordTwo2"
    }

    if(userPasswords[username] && userPasswords[username] === password){
        return next();
    } else {
        res.status(401).json({error: "Access Denied🙅‍♀️: invalid username or password"})
    }
};


module.exports = {
    checkBoolean,
    checkPassword,
    checkUrl,
    checkUserName,
    checkEmail
}


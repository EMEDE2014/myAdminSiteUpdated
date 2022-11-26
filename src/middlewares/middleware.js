exports.middlewareGlobal = (req, res, next) => {
    console.log(res.locals.ert);
    
    next();
}

exports.checkCsrfError = (err,req, res, next) => {
    if(err){
        console.log(err)
        return res.render('404');
    }
    next();
}


exports.csrfMiddlewareToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
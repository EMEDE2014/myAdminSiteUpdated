exports.middlewareGlobal = (req, res, next) => {
    // res.locals.errors = req.flash('errors');
    // res.locals.success = req.flash('success');

    next();
}


exports.outroMiddleware = (req, res, next) => {

    next();
}

// exports.checkCsrfError = (err, req, res, next) => {
//     if (err) {
//         console.log(err)
//         return res.render('404');
//     }


//     next();
// }

// exports.csrfMiddlewareToken = (req, res, next) => {
//     res.locals.csrfToken = req.csrfToken();
//     next();
// }


// exports.cspValidation = (req, res, next) => {
//     res.setHeader(
//         'Content-Security-Policy-Report-Only',
//         "frame-src"
//     )
//     next();
// }
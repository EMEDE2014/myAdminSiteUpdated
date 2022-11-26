exports.about = (req, res, next) => {
    res.render('about', {
        title: 'Sobre'
    })
    next();
}
exports.terms = (req, res, next) => {
    res.render('terms', {
        title: 'Termos de Uso'
    })
    next();
}
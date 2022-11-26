exports.alumi = (req, res, next) => {
    res.render('alumi', {
        title: 'Alumi'
    })
    next();
}
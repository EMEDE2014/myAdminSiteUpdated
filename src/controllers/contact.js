exports.contacts = (req, res, next) => {

    res.render('contact', {
        title: 'Contactos'
    })
    next();
}
exports.policy = (req, res,next) => {
res.render('policy',{
    title: 'Privacy Policy'
});

    next();
}
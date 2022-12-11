

exports.HomePage = (req, res, next) =>{

    
res.render('homePage',{
    title: 'Home'
});
    next();
}
const error404 = function(req, res){
    res.status(404).render('404');
};

module.exports = error404;

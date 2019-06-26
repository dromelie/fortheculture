/** GET Trending Page */

module.exports.trending = function(req, res){
    res.render('trending', {title: 'Trending'});
};
/** GET History Page */

module.exports.history = function(req, res){
    res.render('history', {title: 'History'});
};
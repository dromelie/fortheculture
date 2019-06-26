/** GET Artist's Alley page */

module.exports.artistsAlley = function(req, res){
    res.render('artistsAlley', {title: 'Artist\'s Alley'});
};
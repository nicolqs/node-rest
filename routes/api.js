var express = require('express'),
    request = require('request'),
	router  = express.Router();

// Conf
var API   = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/',
    posts = 'posts/';

/**
 * Listing of all the routes for AOL REST API
 */
router.get('/content', function(req, res, next) {
    request(API + posts + '?number=3', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var posts = JSON.parse(body);
            res.json(posts);
        } else {
            res.send(err);
        }
    })
});

module.exports = router;

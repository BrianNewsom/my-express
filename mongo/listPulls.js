module.exports = function(app) {

    app.get('/list/pulls', function(req, res) {

        // get the repos collection
        var pulls = app.db.get('pulls')

        // execute the query to find those matched limiting to 20
        pulls.find({}, {
            limit: 20
        }, function(err, pulls) {

            res.render('listPulls.jade', {
                pulls: pulls
            })
        })

    })
}

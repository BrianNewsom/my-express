module.exports = function(app) {

    app.get('/view/pull/:pull_id', function(req, res) {

        // get the business collection
        var pulls = app.db.get('pulls')

         var q = {
            'id' : Number(req.params.pull_id)
        }

        var pull = pulls.findOne(q, function(err, item) {
            res.render('viewPull.jade', {
                pull: item
            })
        })

    })
}

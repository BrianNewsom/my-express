module.exports = function(app) {

    app.get('/list/repos', function(req, res) {

        // get the repos collection
        var repos = app.db.get('repos')

        // execute the query to find those matched limiting to 20
        repos.find({}, {
            limit: 20
        }, function(err, repos) {
            console.log(repos);

            res.render('listRepos.jade', {
                repos: repos
            })
        })

    })
}
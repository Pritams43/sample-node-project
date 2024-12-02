module.exports = function(app) {

    app.get('/', function(req, res) { // CODE BLOCK THAT HANDLES THE CLIENT'S '/' REQUEST
        res.render('index'); // INDEX VIEW FILE RENDERED
    });

}

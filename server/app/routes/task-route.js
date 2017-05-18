function load(router) {

    var Task = require('../models/task');
    console.log('Task.db.readyState ' + Task.db.readyState)
    // if (Task.db.readyState === 2) {
    var _checkDBConnection = function (req, res) {
        if (Task.db.readyState === 0)
            res.json({
                STATUS: "DB_CONNECTION_CLOSE"
            });
    }
    //     router.route('*')
    //         .post(_errorDBConnection)
    //         .get(_errorDBConnection);
    //     return;
    // }
    var setTask = function (req, task) {
        var task = task || new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.endDate = req.body.endDate;
        return task;
    };
    router.route('/tasks')
        .post(function (req, res) {
            console.log(req.body);
            var task = setTask(req, null);;

            task.save(function (err) {
                    err && res.send(err);
                    res.json({
                        status: 'ok',
                        task: task,
                        message: 'Task created!'
                    });
                },
                _errorDBConnection);
        })
        .get(function (req, res) {
            _checkDBConnection(req, res);
            Task.find(function (err, tasks) {
                    err && res.send(err);
                    res.json(tasks);
                },
                _errorDBConnection);
        });

    router.route('/tasks/:_id')
        .get(function (req, res) {
            Task.findById(req.params._id, function (err, task) {
                err && res.send(err);
                res.json(task);
            });
        })
        .put(function (req, res) {
            Task.findById(req.params._id, function (err, task) {
                err && res.send(err);
                setTask(req, task);
                task.save(function (err) {
                    err && res.send(err);
                    res.json({
                        task: task,
                        message: 'Task updated!'
                    });
                });
            });

        })
        .delete(function (req, res) {
            Task.remove({
                _id: req.params._id
            }, function (err, task) {
                err && res.send(err);
                res.json({
                    message: 'Successfully deleted'
                });
            });
        });
}

module.exports.load = load;
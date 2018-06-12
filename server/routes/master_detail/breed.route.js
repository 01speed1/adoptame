const router = require('express').Router();

router.get('/breed', (req, res)=> {
    res.end('En breed');
})

module.exports = router;

/*





router.get('/tasks', (req, res, next)=> {
    db.task.find( (err, tasks) => {
        if(err) return next(err);
        res.json(tasks);
    })
})

router.get('/tasks/:id', (req, res, next)=> {

    db.task.findOne({_id: mongojs.ObjectId(task)}, (err, task) => {
        if(err) return next(err);
        res.json(task);
    })
})

router.post('/tasks', (req, res, next) => {
    const task = req.body;

    if(!task.title || !(task.isDone + '') ){
        res.status(400).json({
            error: 'Bad Data'
        })
    } else {
        db.task.save(task, (err, task) => {
            if(err) return next(err);
            res.json(task);
        })
    }
})

router.delete('/tasks/:id', (req, res, next) => {
    const task = req.params.id;

    db.task.remove({_id: mongojs.ObjectId(task)}, (err, task) => {
        if(err) return next(err);
        res.json(task);
    })
    
})

router.put('/tasks/:id', (req, res, next) => {
    const task = req.body;
    const updateTask = {}
    
    if(task.isDone) {
        updateTask.isDone = task.isDone;
    }

    if(task.title) {
        updateTask.title = task.title;
    }

    if(!updateTask) {
        res.status(400).json({
            error: 'Bad Request'
        })
    } else {
        db.task.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, (err, task) => {
            if(err) return next(err);
            res.json(task)
        })
    }

    
})




module.exports = router;
¨

*/
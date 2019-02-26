const Task  = require('../models/task.model');

exports.task_details = function (req, res) {
    Task.findById(req.params.id, (err, task)=>{
        if(err){
            console.error(error);
            return;
        }
        res.send(task);
    })
};

exports.task_list = function (req, res) {
    Task.find((err, task) => {
        if (err) return res.json({ statusCode: 500, err });
        return res.status(200).send({ statusCode: 200, task })
    });
};

exports.task_create = function (req, res) {
  let task = new Task({
      title:req.body.title,
      description:req.body.description,
      status:req.body.status
  });

  task.save((err)=>{
      if(err){
          console.error(err);
          return;
      }
      res.send('Task is added successfully');
  })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set:req.body}, (err)=>{
        if(err){
          console.error(err);
        }
        res.send('Your request updated');
    });
};

exports.task_delete = function (req, res) {
    console.info('Request for deleting task id:', req.params.id);

    Task.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            console.error('Deletion failed for ', req.params.id,' with error ', err);
        }
        res.send('Task is successfully deleted');
    })

};
const express = require('express');

const router = express.Router();
const task_controller = require('../controllers/task_controller');

router.get('/',task_controller.task_list);
router.get('/:id',task_controller.task_details);
router.post('/create', task_controller.task_create);
router.put('/update/:id', task_controller.task_update);
router.delete('/delete/:id', task_controller.task_delete);

module.exports = router;
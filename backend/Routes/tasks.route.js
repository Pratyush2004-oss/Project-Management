import express from 'express';
import { getUserTask, PostTask, updateTaskCompleted, updateTaskImportant } from '../controller/task.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/post').post(isAuthenticated, PostTask)
router.route('/get').get(isAuthenticated, getUserTask)
router.route('/:id/updatecomplete').post(isAuthenticated, updateTaskCompleted)
router.route('/:id/updateimportant').post(isAuthenticated, updateTaskImportant)

export default router;
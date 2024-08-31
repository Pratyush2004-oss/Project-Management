import { Task } from "../model/Task.model.js";

// Post Job
export const PostTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.id;
        if (!title || !description) {
            return res.status(400).json({
                message: "Someting is missing",
                success: false,
            })
        }
        const task = await Task.create({
            title,
            description,
            user: userId
        });
        return res.status(201).json({
            message: "New task created",
            task,
            success: true
        })
    } catch (error) {
        console.log('Error in PostTask Controller ' + error.message)
        return res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}

// Get User Task
export const getUserTask = async (req, res) => {
    try {
        const userId = req.id;
        const tasks = await Task.find({ user: userId }).populate({
            path: 'user'
        }).sort({ createdAt: -1 })
        if (!tasks) {
            return res.status(404).json({
                message: "No task found",
                success: false
            })
        }
        return res.status(200).json({
            tasks,
            success: true
        })

    } catch (error) {
        console.log('Error in getUserTasks Controller ' + error.message)
        return res.status(500).json({
            message: "Internal server Error",
            success: false
        })

    }
}

// update task by id as Complete/incomplete
export const updateTaskCompleted = async (req, res) => {
    try {
        const { complete } = req.body;
        const taskId = req.params.id;

        // find task by taskId
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({
                message: "No Task found",
                success: false
            })
        }
        // update as complete
        task.complete = complete;
        await task.save();

        return res.status(200).json({
            message: "Status updated Successfully",
            success: true
        })
    } catch (error) {
        console.log('Error in updateTaskCompleted Controller ' + error.message)
        return res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}

// update task by id as Complete/incomplete
export const updateTaskImportant = async (req, res) => {
    try {
        const { important } = req.body;
        const taskId = req.params.id;

        // find task by taskId
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({
                message: "No Task found",
                success: false
            })
        }
        // update as Important
        task.important = important;
        await task.save();

        return res.status(200).json({
            message: "Status updated Successfully",
            success: true
        })
    } catch (error) {
        console.log('Error in updateTaskImportant Controller ' + error.message)
        return res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}
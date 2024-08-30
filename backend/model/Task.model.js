import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })
export const Task = mongoose.model("Task", TaskSchema)
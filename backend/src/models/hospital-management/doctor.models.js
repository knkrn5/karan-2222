import mongoose from "mongoose";

/* const workingHoursSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
}, {timestamps: true}) */

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYear: {
        type: Number,
        default: 0,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    workInHospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }],
}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", orderSchema)
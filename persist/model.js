const mongoose = require("mongoose");

// const postSchema = mongoose.Schema(
//     {
//         user_id: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//             required: true,
//         },
//         body: {
//             type: String,
//             required: true,
//             default: "",
//         },
//         thread_id: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Thread",
//             required: true,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = {
    User
};

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Load MongoDB URI from environment variables
const mongoDB = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit with failure
    });

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 30,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Define Account Schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// Define User and Account models
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

// Export User and Account models
module.exports = { User, Account };






// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// const mongoDB = process.env.MONGODB_URI

// mongoose.connect(mongoDB).then(() => console.log("connected to MongoDb successfully")).catch((err) => console.log(err));

// const userSchema = mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         minLength: 4,
//         maxLength: 30,
//         trim: true 
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// })

// const accountSchema = mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId, ref: "User",
//         required : true
//     },
//     balance: {
//         type: Number,
//         required : true
//     }
// })

// const User = mongoose.model("PaytmUser", userSchema);
// const Account = mongoose.model("PaytmAccount", accountSchema);

// module.exports = {
//     User, Account
// };
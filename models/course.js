const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "desc":String,
        "date":String,
        "duration":Number,
        "venue":String,
        "trainername":String
    }
)
let coursemodel=mongoose.model("course",schema)
module.exports={coursemodel}
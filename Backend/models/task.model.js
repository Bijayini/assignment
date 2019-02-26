const moongose =require('mongoose');

const Schema = moongose.Schema;
const taskSchema = new Schema(
    {
        title: {type:String,required:true},
        description: {type:String,required:true},
        status:{type:String,required:true}
    }
);

module.exports= moongose.model('Task',taskSchema);
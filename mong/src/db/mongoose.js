const mongoose = require('mongoose')

mongoose.connect(('mongodb://127.0.0.1:27017/task-manager-api'),{
    useNewUrlParser:true,
   // useCreateIndex:true
})



// const Task = mongoose.model('Tasks',{
//     name:{
//          type:String ,
//          required :true     
//     },
//     age:{
//         type:Number,
//         validate(value){
//             if(value < 18){
//                throw new Error('Age must be greater than 18')
//             }
//         }
//     }
// })

// const task = new Task({
//     name: 'Bill gates ',
//     age : 52
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((e) => {
//     console.log(e)
// })
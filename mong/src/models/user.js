const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('Users',{
    name : {
        type : String,
        required :true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        validate(value)
        {

            if(!validator.isEmail(value)){
                throw new Error('Email is invalid..')
            }
        }

    },
    password :{
        required: true,
        type : String,
        minlength : 7,
        trim :true,
        validate(value){
            if(value.includes('password')){
                throw new Error('Password cannot contain password..');
            }
        }

    },
    age : {
        type : Number,
        trim :true,
        validate(value){
            if(value < 0 ){
                throw new Error('Age must be positive number');
            }
        }
    }
})

// const me = new User({
//     name : 'John',
//     email : 'John@creatiosoft.com',
//     password : 'pass2345',
//     age : 23
    
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((e)=>{
//     console.log(e);
// })
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid');
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"');
//             }
//         }
//         // validate(value) {
//         //     if (value.length < 6) {
//         //         throw new Error('Length must be greater than 6')
//         //     }
//         // }
//     },
//     age: {
//         type: Number,
//         default: 8
//     }
// });


module.exports = User;
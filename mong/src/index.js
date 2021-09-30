const express = require('express');
require('./mongoose');
const User = require('./models/user');
const Tasks = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async(req, res) => {

    const user = new User(req.body);

    try{
        await user.save();
        res.status(201).send(user);
    }catch(e){
        res.status(400).send(e);
    }

    // user.save().then(() => {
    //     res.send(user);
    // }).catch((e) => {
    //     res.status(400);
    //     res.send(e);
    // });

    //console.log(req.body)
    //res.send('Testing post..');
});


app.get('/users', async(req, res) => {

    try{
        const user = await User.find({})
        res.status(201).send(user);
    }catch(e){
        res.status(500).send(e);
    }

    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send(e);

    // });
});

app.get('/users/:id', async(req, res) => {

    //console.log(req.params);
    const _id = req.params.id;

    try{
        const user = await User.findById(_id);
        if(!user){
            return res.status(404).send()
        }
        res.send(user);

    }catch(e){
        res.status(400).send(e);
    }
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send();
    //     }
    //     res.send(user);
    // }).catch((e) => {
    //     res.status(500).send();
    // });

});

app.patch('/users/:id',async(req, res)=>{


   // this commented code not working --lecture 98 ending.
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid updates!'})
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators : true})
        if(!user){
            return res.status(404).send();
        } 

        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
})






app.post('/tasks', async(req, res) => {

    const task = new Tasks(req.body);

    try{
        await task.save();
        res.status(201).send(task);
    }catch(e){
        res.status(400).send(e);
    }

    // tasks.save().then(() => {
    //     res.send(tasks);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // });
});

app.get('/tasks', async(req, res) => {

    try{
        const task = await Tasks.find({})
        res.status(201).send(tas);
    }catch(e){
        res.status(400).send();
    }
    // Tasks.find({}).then((task) => {
    //     res.send(task);
    // }).catch(() => {
    //     res.status(500).send();
    // });
});

app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;

    try{
        const task = await Tasks.findById(_id);
        if(!task){
            return res.status(404).send();
        }
    }catch(e){
        res.status(400).send();
    }
    // Tasks.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }
    //     res.send(task);
    // }).catch(() => {
    //     res.status(500).send();
    // });
});

// app.patch('/tasks/:id', async(req, res)=> {
//     const updates = Object.keys(req.body);
//     const allowUpdates = ['description', 'completed'];
//     const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

//     if(!isValidOperation){
//         return res.status(400).send({error: 'Invalid error'})
//     }

//     try{
//         const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators: true})
//         if(!task){
//             return res.status(404).send();
//         }
//     }catch(e){
//         res.status(500).send(e);
//     }

// })


app.listen(port, () => {
    console.log('server is up on port ' + port);
});
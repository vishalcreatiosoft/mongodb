require('./mongoose.js');
const Task = require('./models/task');


Task.findByIdAndDelete('615424c05b0c7a322abd04ca').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: true });
}).then((task2) => {
    console.log(task2);
}).catch((msg) => {
    console.log(msg);
});
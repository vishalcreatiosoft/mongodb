require('./mongoose.js');
const User = require('./models/user');

User.findByIdAndUpdate('6155709e0342df39eed2fb77', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: 0 })
    const count = await User.countDocuments({ age })
    return count;
};

updateAgeAndCount('6154179490bef6d4f9ada4f8', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});



module.exports.square = (x, callback) => {
    setTimeout(() => {
    callback(x*x)
    }, 1000);
}




module.exports.setNames = (user,
     fullname) => {
    var names = fullname.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
};
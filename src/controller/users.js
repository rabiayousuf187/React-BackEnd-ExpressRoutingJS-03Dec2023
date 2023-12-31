const users = {
    getAllUsers : (req, res) => {
        res.send("get all users Data...............");
    },
    addUser : (req, res) => {
        let newUser = {
            firstName: "John",
            lastName: "Doe",
            password: "123456",
            email: "Johndoe@gmail.com"
        };
        Users.findOne({ email: newUser.email })
            .then(
                data => {
                    if (data) {
                        console.log("User already exists.");
                        res.send("User already exists.");
                    }
                    else {
                        Users.create(
                            {
                                firstName: newUser.firstName,
                                lastName: newUser.lastName,
                                email: newUser.email,
                                password: newUser.password
                            },
                            function (err, user) {
                                if (err) return res.status(500).send("There was a problem registering the user.")
                                res.status(200).send({user: user });
                            });
                    }
                });
    }
}

module.exports = users;

// const getUser = (req, res) => {
//     res.send("get all users...............");
// }

// module.exports = getUser
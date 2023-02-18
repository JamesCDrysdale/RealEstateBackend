import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).limit(req.query._end);

        res.status(200).json(users);
    } catch (error) {
       res.status(500).json({ message: error.message }); 
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        // Check user exists
        const userExists = await User.findOne({ email });

        if (userExists) return res.status(200).json(userExists);

        // Create new user in DB if they are not there
        const newUser = await User.create({
            name,
            email,
            avatar
        })

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }   
};

const getUserInfoByID = async (req, res) => {};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
}
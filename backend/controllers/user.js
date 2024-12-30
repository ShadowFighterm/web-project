const userServices = require('../services/user');


exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const
            {
                username,
                password,
                role,
            } = req.body;
        const SameUser = await userServices.GetUserByName(username);
        if (SameUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await userServices.RegisterUser(username, password, role);
        res.status(200).json({ status: "Success", message: "User has been registered succesfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userServices.GetUserByName(username);
        if (!user) {
            return res.status(400).json({ message: 'User does not exists' });
        }
        const PasswordMatch = await userServices.ComparePassword(username, password);
        if (!PasswordMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        let tokenData = {
            name: user.name,
        }
        const jwtKey = "A123";
        const token = await userServices.GenerateTokens(tokenData, jwtKey, "24h");
        res.status(200).json(
            {
                status: "success",
                message: "User logged in successfully",
                token: token,
                userId: user.id 
            }
        );
        console.log('Loged in');
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }

};
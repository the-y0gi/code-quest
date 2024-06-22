import users from '../models/auth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ message: "User already exists" }); // 404 is typically for "Not Found". Consider using 400 for "Bad Request".
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({
            name,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({
            email: newUser.email, id: newUser._id
        }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: newUser, token });
    } catch (error) {
        console.error("Signup error:", error); // Log the error for debugging purposes.
        res.status(500).json("Something went wrong...");
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User does not exist" }); // 404 is fine here.
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" }); // Ensure to return here to stop execution.
        }

        const token = jwt.sign({
            email: existingUser.email, id: existingUser._id
        }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging purposes.
        res.status(500).json("Something went wrong...");
    }
};

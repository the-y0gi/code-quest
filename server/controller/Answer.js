import mongoose from "mongoose";
import Question from "../models/Question.js";

export const postanswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noofanswers, answerbody, useranswered } = req.body;
    const userId = req.userid;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question unavailable...");
    }

    updatenoofquestion(_id, noofanswers);

    try {
        const updatedQuestion = await Question.findByIdAndUpdate(
            _id,
            {
                $addToSet: { answer: { answerbody, useranswered, userid: userId } }
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedQuestion);
    } catch (error) {
        console.error("Error in uploading:", error);
        res.status(500).json({ message: "Error in uploading" });
    }
};

export const deleteanswer = async (req, res) => {
    const { id: _id } = req.params;
    const { answerid, noofanswers } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question unavailable...");
    }

    if (!mongoose.Types.ObjectId.isValid(answerid)) {
        return res.status(404).send("Answer unavailable...");
    }

    updatenoofquestion(_id, noofanswers);

    try {
        await Question.updateOne(
            { _id },
            { $pull: { answer: { _id: answerid } } }
        );

        res.status(200).json({ message: "Successfully deleted.." });
    } catch (error) {
        console.error("Error in deleting:", error);
        res.status(500).json({ message: "Error in deleting.." });
    }
};

const updatenoofquestion = async (_id, noofanswers) => {
    try {
        await Question.findByIdAndUpdate(
            _id,
            { $set: { noofanswers: noofanswers } }
        );
    } catch (error) {
        console.error("Error in updating number of answers:", error);
    }
};

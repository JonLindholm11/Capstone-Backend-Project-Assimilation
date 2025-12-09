import express from "express"

const router = express.Router();
export default router;

router.route("/ping").get(async (req, res) => {
    res.send({ "message": "alive" })
})
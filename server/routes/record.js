import Article from "../models/recordModel"
import express from "express"

const router = express.Router();

// get the list of all the records
router.get("/", async(req, res) => {
    const results = await Article.find({})
    //let results = articles.toArray();
    res.send(results).status(200)
})

// get single record by id
router.get("/:id", async (req, res) => {

    console.log('Get record by id called')
    const {id} = req.params;
    const result = await Article.findById(id)
    console.log(result)
    if(!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

// create a new record
router.post("/", async (req, res) => {
    let newDocument = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    }
    const result = await Article.create(newDocument)
    res.send(result).status(204);
})

//update record by id
router.patch("/:id", async(req, res) => {
    let updatedDoc = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    }
    console.log('Patch called')
    const {id} = req.params;
    let result = await Article.findByIdAndUpdate(id, updatedDoc);
    result = await Article.findById(id)
    res.send(result).status(200);
})

// delete record by id
router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const result = await Article.findByIdAndDelete(id);
    res.send(result).status(200);
})

export default router
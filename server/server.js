import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import records from "./routes/record.js"

const PORT = 5050
const app = express()

// Connect to mongoDB
mongoose.connect('mongodb+srv://hussainabuwala1997:djFbd3fselGqdCF1@hussainapi.sslerxx.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected! to MongoDB')
}).catch((error) => {
    console.log(error)
});


app.use(cors())
app.use(express.json())

app.use("/record", records);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
    ],
    credentials: true
}))

// API ROUTE

app.get("/api/message", (req, response) => {
    response.json({ message: "Hellow from vid nik server!"})
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
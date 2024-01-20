import 'dotenv/config'
import expres from 'express'

const app = expres()

const port = process.env.PORT || 8080
app.listen(port ,() => {
    console.log(`http://localhost:${port}`);
})
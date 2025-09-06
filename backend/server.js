import express from "express"
const app = express()

app.get('/', (req, res)=>{
    return res.send("hello world")
})
app.get('/jokes', (req, res)=>{
    const jokes=[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "age": 24,
    "city": "Delhi"
  },
  {
    "id": 2,
    "name": "Sophia Johnson",
    "email": "sophia.j@example.com",
    "age": 29,
    "city": "New York"
  },
  {
    "id": 3,
    "name": "Hiro Tanaka",
    "email": "hiro.tanaka@example.com",
    "age": 31,
    "city": "Tokyo"
  },
  {
    "id": 4,
    "name": "Fatima Ali",
    "email": "fatima.ali@example.com",
    "age": 27,
    "city": "Dubai"
  },
  {
    "id": 5,
    "name": "Lucas Müller",
    "email": "lucas.mueller@example.com",
    "age": 35,
    "city": "Berlin"
  }
];


    return res.send(jokes)
})
const port =process.env.PORT || 3000

app.listen(port ,()=>{
    console.log(`server runnit at ${port}`);
});
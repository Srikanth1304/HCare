const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M1racle@123',
  database: 'Node'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// GET route to fetch patient data
app.get('/getDetails', (req, res) => {
  const query = "SELECT * FROM Hcare";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching data from database');
    }
    res.status(200).json(results);
  });
});

// POST route to handle patient data
app.post('/patient', (req, res) => {
  const { name, age, address } = req.body;


  const query = 'INSERT INTO Hcare (name, age, address) VALUES (?, ?, ?)';
  db.query(query, [name, age, address], (err, result) => {
    if (err) {
      return res.status(500).send('Error saving data to database');
    }
    res.status(201).send('Patient data saved successfully');
  });
});


app.delete('/deletePatient/:id',(req,res)=>{
    const pId=req.params.id;
    const query="Delete from Hcare where id=?";
    db.query(query,[pId],(err,result)=>{
        if(err){
        return res.status(500).send("Error in deleting");
        }
        else{
            res.status(200).send("patient deleted");
        }
        
    })
})

// Start server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

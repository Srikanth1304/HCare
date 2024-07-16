const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.json());


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


app.get('/getDetails', (req, res) => {
  const query = "SELECT * FROM Hcare";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching data from database');
    }
    res.status(200).json(results);
  });
});


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

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      return res.status(500).send('Error saving data to database');
    }
    res.status(201).send('User created successfully');
  });
});

// Sign-in route
app.post('/signin', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  const query = 'SELECT * FROM Users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).send('Error querying database');
    }
    if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
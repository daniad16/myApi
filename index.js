const express = require('express')
var cors = require('cors')
var xlsx = require('xlsx')
const app = express()
app.use(cors())

var wb = xlsx.readFile('data.xlsx');
var ws = wb.Sheets['Sheet1'];

var data =xlsx.utils.sheet_to_json(ws);

app.get('/', (req, res)=> {
  res.send(data)
})
 

app.listen(3000)
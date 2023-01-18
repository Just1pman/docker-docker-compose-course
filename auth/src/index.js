const express = require('express');
const axios = require('axios')
const { connectDb } = require('./helpers/db')
const { port, db, apiUrl } = require('./configuration/index')
const app = express();

const startServer = () => {
  app.listen(port, async () => {
    console.log(`Started auth service on port: ${port}`);
    console.log(`DB: ${db}`);
  })
}

app.get('/testwithapidata', (req, res) => {
  axios.get(apiUrl + '/testapidata')
    .then(ressponse => {
      res.json({
        ...ressponse.data,
        id: 'Data from auth service',
      });
    })

})

app.get('/', (req, res) => {
  res.send('Auth server is working correctly');
})

app.get('/api/currentuser', (req, res) => {
  res.json({
    id: 12313123123123,
    email: 'email@yandex.ru'
  });
})

connectDb()
  .on("error", () => console.log('error db connect'))
  .on("disconnect", connectDb)
  .once("open", startServer)





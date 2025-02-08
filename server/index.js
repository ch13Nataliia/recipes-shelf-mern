import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Port i s reasdy')
})
app.listen(5000, () => {
  console.log('Server listen at http://localhost:5000');
});

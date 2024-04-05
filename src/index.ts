import app from './config/express'
// require('dotenv').config()
export  const env = process.env
const port =  process.env.PORT;

app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});
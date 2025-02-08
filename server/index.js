import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/contact', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Contact Page</title>
        </head>
        <body>
          <h1>Contact Us</h1>
          <p>This is the contact page.</p>
        </body>
      </html>
    `)
  })

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
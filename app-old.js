const http = require("http")

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json"
  })

  const salida = {
    nombre: "Tilo",
    edad: 18,
    url: req.url
  }
  res.write(JSON.stringify(salida))
  res.end()
}).listen(8080)

console.log("Escucha");
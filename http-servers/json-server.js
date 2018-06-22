import http from 'http';

const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const product = {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
      { color: 'blue' },
      { size: 'XL' }
    ]
  };
  res.end(JSON.stringify(product));
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log(`Server is listening on ${port}`);
});

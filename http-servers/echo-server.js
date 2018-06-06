import http from 'http';

const port = 3000;

const requestHandler = (req, res) => {
  req.pipe(res);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log(`Server is listening on ${port}`);
});

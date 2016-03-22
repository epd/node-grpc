'use strict';

const grpc = require('grpc');
const server = new grpc.Server();

//
// Transactions implementation.
//
const T = grpc.load('transactions.proto').transactions;
server.addProtoService(T.TransactionRetreiverService.service, {
  getTransactions: (call, cb) => {
    setTimeout(() => cb({
      code: grpc.status.NOT_FOUND,
      details: 'No transactions were found matching your query'
    }), 1000);
  }
});

//
// Server initialization.
//
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

console.log('Server started on port %d', 50051);

//
// Properly handle shutdown.
//
process.on('SIGINT', () => {
  let _timeout;

  server.tryShutdown(() => {
    clearTimeout(_timeout);
    console.log('Server shut down.')
  });

  _timeout = setTimeout(() => {
    console.log('Forcing shutdown, timeout exceeded...');
    server.forceShutdown();
  }, 6000);
});

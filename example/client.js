'use strict';

const grpc = require('grpc');
const T = grpc.load('transactions.proto').transactions;

for (let i = 0; i < 5; i++) {
  ((i) => {
    const TransactionRetreiverService = new T.TransactionRetreiverService(
      'backend:50051',
      grpc.credentials.createInsecure()
    );
    TransactionRetreiverService.getTransactions({}, (err, response) => {
      if (err) return console.log('An error occurred (%d):', i, err.message);

      console.log('Got response (%d):', i, response);
    });
  })(i);
}

'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDb.DocumentClient();

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: 'todos',
        Key: {
            id: event.pathParameters.id
        }
    };
    
    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.error(error);
            callback (new Error('Could not fetch the todo items.'));
            return;
        }
        
        const response = {
            statusCode: 200,
            body: JSON
        }
    });
  
    
}
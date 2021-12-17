// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

//inputting from user
const prompt = require('prompt-sync')();

const topicArn = prompt('Enter the topic Arn: ');
const msg = prompt('Enter the message you want to publish: ');

// Create publish parameters
var params = {
  Message: msg, /* required */
  TopicArn: topicArn
};

// Create promise and SNS service object
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'})
var publishTextPromise = new AWS.SNS({credentials: credentials, region: 'ap-south-1'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message '${params.Message}' sent to the topic '${params.TopicArn}'`);
    console.log("MessageID is '" + data.MessageId + "'");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
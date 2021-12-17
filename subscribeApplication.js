// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

//inputting form user
const prompt = require('prompt-sync')();

const topicArn = prompt('Enter the ARN of the topic which you want to subscribe to: ');

//getting credentials from local
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'})

// Create subscribe/email parameters
var params = {
  Protocol: 'http', /* required */
  TopicArn: topicArn, /* required */
  Endpoint: 'http://103.165.115.59:3000' //configure this
};

// Create promise and SNS service object
var subscribePromise = new AWS.SNS({credentials: credentials, region: 'ap-south-1'}).subscribe(params).promise();

// Handle promise's fulfilled/rejected states
subscribePromise.then(
  function(data) {
    console.log("Subscription ARN is '" + data.SubscriptionArn + "'");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
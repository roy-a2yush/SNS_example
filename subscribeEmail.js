// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

//inputting form user
const prompt = require('prompt-sync')();

const topicArn = prompt('Enter the ARN of the topic which you want to subscribe to: ');

const email = prompt('Enter the email which is to be subscribed: ');

//getting credentials from local
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'})

// Create subscribe/email parameters
var params = {
  Protocol: 'email', /* required */
  TopicArn: topicArn, /* required */
  Endpoint: email //configure this
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
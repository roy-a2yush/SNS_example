// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

//inputting form user
const prompt = require('prompt-sync')();

const topicName = prompt('What is the name of the topic you want to create: ');

//getting credentials from local
const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'})

//SET TOPIC NAME
var createTopicPromise = new AWS.SNS({credentials: credentials, region: 'ap-south-1'}).createTopic({Name: topicName}).promise();

// Handle promise's fulfilled/rejected states
createTopicPromise.then(
  function(data) {
    console.log("Topic ARN is '" + data.TopicArn + "'");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
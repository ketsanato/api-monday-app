
require("dotenv").config();
const admin = require('firebase-admin');
const {initializeApp} = require('firebase-admin/app');
const {getAppCheck} = require('firebase-admin/app-check');

const serviceAccount = require("./starlit-lotus-440808-u3-firebase-adminsdk-mn5n8-1d15c760fb.json");
const axios = require('axios')

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

const https = require('https');
const { google } = require('googleapis');

const PROJECT_ID = serviceAccount.project_id;
const HOST = 'fcm.googleapis.com';
const PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];


/**
 * Get a valid access token.
 */
// [START retrieve_access_token]
function getAccessToken() {
  return new Promise(function(resolve, reject) {
    const key = serviceAccount;
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function(err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}
// [END retrieve_access_token]

/**
 * Send HTTP request to FCM with given message.
 *
 * @param {object} fcmMessage will make up the body of the request.
 */

function sendFcmMessage(fcmMessage) {
  getAccessToken().then(function(accessToken) {
    const options = {
      hostname: HOST,
      path: PATH,
      method: 'POST',
      // [START use_access_token]
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
      // [END use_access_token]
    };

    const request = https.request(options, function(resp) {
      resp.setEncoding('utf8');
      resp.on('data', function(data) {
        console.log('Message sent to Firebase for delivery, response:');
        console.log(data);
      });
    });

    request.on('error', function(err) {
      console.log('Unable to send message to Firebase');
      console.log(err);
    });

    request.write(JSON.stringify(fcmMessage));
    request.end();
  });
}

/**
 * Construct a JSON object that will be used to customize
 * the messages sent to iOS and Android devices.
 */
function buildOverrideMessage() {
  const fcmMessage = buildCommonMessage();
  const apnsOverride = {
    'payload': {
      'aps': {
        'badge': 1
      }
    },
    'headers': {
      'apns-priority': '10'
    }
  };

  const androidOverride = {
    'notification': {
      'click_action': 'android.intent.action.MAIN'
    }
  };

  fcmMessage['message']['android'] = androidOverride;
  fcmMessage['message']['apns'] = apnsOverride;

  return fcmMessage;
}

/**
 * Construct a JSON object that will be used to define the
 * common parts of a notification message that will be sent
 * to any app instance subscribed to the news topic.
 */
function buildCommonMessage() {
  return {
    'message': {
      'topic': 'news',
      'notification': {
        'title': 'FCM Notification',
        'body': 'Notification from FCM'
      }
    }
  };
}

const message = process.argv[2];
if (message && message == 'common-message') {
  const commonMessage = buildCommonMessage();
  console.log('FCM request body for message using common notification object:');
  console.log(JSON.stringify(commonMessage, null, 2));
  sendFcmMessage(buildCommonMessage());
} else if (message && message == 'override-message') {
  const overrideMessage = buildOverrideMessage();
  console.log('FCM request body for override message:');
  console.log(JSON.stringify(overrideMessage, null, 2));
  sendFcmMessage(buildOverrideMessage());
} else {
  console.log('Invalid command. Please use one of the following:\n'
      + 'node index.js common-message\n'
      + 'node index.js override-message');
}



module.exports={getAccessToken,sendFcmMessage,buildOverrideMessage,buildCommonMessage};
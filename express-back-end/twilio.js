require('dotenv').config();


const twilio = require("twilio");

const accountNumber = process.env.TWILIO_ACCTNUM;
const authToken = process.env.TWILIO_TOKEN;

// const client = new twilio(accountNumber, authToken);

// client.messages
// .create({
//   body: 'hey',
//   to: '+15872285886',
//   from: '+12055397732'
// })
// .then(message => console.log(messages.sid));


const sendUserText = (phone, message) => {
  const client = new twilio(accountNumber, authToken);
  client.messages
  .create({
    body: message,
    to: phone,
    from: process.env.TWILIO_PHONENUM
  })
  .then(message => console.log("A message was sent to the user's phone number, message.sid is:",message.sid));
};

module.exports = sendUserText;

// function joinRunMessage() {
//   client.messages
//   .create({
//     body: 'You have just registered to join a run. This event takes place in 2 days. You will receive another reminder the day before the run.',
//     to: '+15872285886',
//     from: '+12055397732'
//   })
//   .then(message => console.log(message.sid));
// };

// function oneDayReminder() {
//   client.messages
//   .create({
//     body: 'This is a reminder that the run you joined takes place tomorrow at this address. Make sure you are on time and ready. Enjoy your run and remember to have fun!',
//     to: '+15872285886',
//     from: '+12055397732'
//   })
//   .then(message => console.log(message.sid));
// };

// console.log(newUserMessage());
// console.log(joinRunMessage());
// console.log(oneDayReminder());
//module.exports = newUserMessage, joinRunMessage, oneDayReminder;
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});

const sendEmail = async (data) => {
  const email = { ...data, from: "'cute sun' <ilyxa2836@gmail.com>" };
  await mg.messages.create(MAILGUN_DOMAIN, email);

  return true;
};

module.exports = sendEmail;

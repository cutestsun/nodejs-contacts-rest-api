const BaseJoi = require("joi");
const Joi = BaseJoi.extend(require("joi-phone-number"));

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .phoneNumber({
      defaultCountry: "US",
      // format: "national",
      strict: true,
    })
    .required()
    .messages({ "any.required": "missing required phone field" }),
});

module.exports = addSchema;

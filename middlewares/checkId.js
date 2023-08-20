const { isValidObjectId } = require("mongoose");
const { HttpError } = require("@root/helpers");

const checkId = (req, res, next) => {
  try {
    const { contactId } = req.params;

    if (!isValidObjectId(contactId)) {
      throw HttpError(404, `not found`);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkId;

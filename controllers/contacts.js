require("module-alias/register");
const {
  HttpError,
  ctrlWrapper,
  validationSchema: addSchema,
} = require("@root/helpers");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("@root/models/contacts");

const getAll = async (req, res) => {
  const result = await listContacts();

  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

const addById = async (req, res) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "missing fields");
  }

  const { error } = addSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error.message);
  }

  const result = await addContact(req.body);

  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "missing fields");
  }

  const { error } = addSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error.message);
  }

  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addById: ctrlWrapper(addById),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};

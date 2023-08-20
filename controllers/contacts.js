require("module-alias/register");
const { HttpError, controllerWrapper } = require("@root/helpers");
const {Contact} = require("@root/models/contacts");

const getAllController = async (req, res) => {
  const result = await Contact.find();

  res.status(200).json(result);
};

const getByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.status(200).json(result);
};

const addContactController = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const deleteByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

const updateByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.status(200).json(result);
};

const updateStatusContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.status(200).json(result);
};

module.exports = {
  getAllController: controllerWrapper(getAllController),
  getByIdController: controllerWrapper(getByIdController),
  addContactController: controllerWrapper(addContactController),
  deleteByIdController: controllerWrapper(deleteByIdController),
  updateByIdController: controllerWrapper(updateByIdController),
  updateStatusContactController: controllerWrapper(
    updateStatusContactController
  ),
};

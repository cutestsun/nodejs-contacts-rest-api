require("module-alias/register");
const { HttpError, controllerWrapper } = require("@root/helpers");
const { Contact } = require("@root/models/contacts");

const getAllController = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(
    favorite ? { owner, favorite } : { owner },
    null,
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

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
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });

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

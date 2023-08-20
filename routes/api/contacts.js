require("module-alias/register");
const express = require("express");
const {
  getAllController,
  getByIdController,
  addContactController,
  deleteByIdController,
  updateByIdController,
  updateStatusContactController,
} = require("@root/controllers/contacts");
const {
  validateBody,
  validateUpdateStatus,
  checkId,
} = require("@root/middlewares");
const {
  schemas: { validationSchema, updateFavoriteSchema },
} = require("@root/models/contacts");

const router = express.Router();

router.get("/", getAllController);

router.get("/:contactId", checkId, getByIdController);

router.post("/", validateBody(validationSchema), addContactController);

router.delete("/:contactId", checkId, deleteByIdController);

router.put(
  "/:contactId",
  checkId,
  validateBody(validationSchema),
  updateByIdController
);

router.patch(
  "/:contactId/favorite",
  checkId,
  validateUpdateStatus(updateFavoriteSchema),
  updateStatusContactController
);

module.exports = router;

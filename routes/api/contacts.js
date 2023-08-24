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
  authenticate,
} = require("@root/middlewares");
const {
  schemas: { contactValidationSchema, updateFavoriteSchema },
} = require("@root/models/contacts");

const router = express.Router();

router.get("/", authenticate, getAllController);

router.get("/:contactId", authenticate, checkId, getByIdController);

router.post(
  "/",
  authenticate,
  validateBody(contactValidationSchema),
  addContactController
);

router.delete("/:contactId", authenticate, checkId, deleteByIdController);

router.put(
  "/:contactId",
  authenticate,
  checkId,
  validateBody(contactValidationSchema),
  updateByIdController
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  checkId,
  validateUpdateStatus(updateFavoriteSchema),
  updateStatusContactController
);

module.exports = router;

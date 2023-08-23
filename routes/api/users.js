require("module-alias/register");
const express = require("express");
const {
  registerController,
  loginController,
  getCurrentController,
  logoutController,
  updateSubscriptionController,
} = require("@root/controllers/users");
const { validateBody, authenticate } = require("@root/middlewares");
const {
  schemas: { userValidationSchema, updateSubscriptionSchema },
} = require("@root/models/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(userValidationSchema),
  registerController
);

router.post("/login", validateBody(userValidationSchema), loginController);

router.get("/current", authenticate, getCurrentController);

router.post("/logout", authenticate, logoutController);

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateSubscriptionController
);

module.exports = router;

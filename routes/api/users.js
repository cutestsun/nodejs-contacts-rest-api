require("module-alias/register");
const express = require("express");
const {
  registerController,
  loginController,
  getCurrentController,
  logoutController,
  updateSubscriptionController,
  updateAvatarController,
  verificationController,
  resendEmailConfirmationController,
} = require("@root/controllers/users");
const { validateBody, authenticate, upload } = require("@root/middlewares");
const {
  schemas: {
    userValidationSchema,
    updateSubscriptionSchema,
    resendEmailConfirmationSchema,
  },
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatarController
);

router.get("/verify/:verificationToken", verificationController);

router.post(
  "/verify",
  validateBody(resendEmailConfirmationSchema),
  resendEmailConfirmationController
);

module.exports = router;

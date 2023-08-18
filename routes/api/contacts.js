require("module-alias/register");
const express = require("express");
const ctrl = require("@root/controllers/contacts");
const validateBody = require("@root/middlewares/validateBody");
const { validationSchema: addSchema } = require("@root/helpers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.addById);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(addSchema), ctrl.updateById);

module.exports = router;

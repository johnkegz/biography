"use strict";

var _PeopleController = _interopRequireDefault(require("./PeopleController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();
router.get('/people', _PeopleController.default.getPeople);
router.get('/people/:id', _PeopleController.default.getOnePerson);
router.post('/people', _PeopleController.default.postPeople);
router.put('/people/:id', _PeopleController.default.updatePeople);
router.delete('/people/:id', _PeopleController.default.deletePeople);
module.exports = router;
//# sourceMappingURL=index.js.map
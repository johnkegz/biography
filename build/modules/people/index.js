"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PeopleController = _interopRequireDefault(require("./PeopleController"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router(); // router.get('/people', passport.authenticate('jwt', { session: false }), PeopleController.getPeople)

router.get('/people', _PeopleController.default.getPeople);
router.get('/people/:id', _PeopleController.default.getOnePerson);
router.post('/people', _PeopleController.default.postPeople);
router.put('/people/:id', _PeopleController.default.updatePeople);
router.delete('/people/:id', _PeopleController.default.deletePeople);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map
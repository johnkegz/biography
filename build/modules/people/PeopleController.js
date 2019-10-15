"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../../database/models"));

var _http = require("http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PeopleController {
  //Method getting all the members from the database
  static async getPeople(req, res) {
    try {
      const people = await _models.default.Person.findAll();
      return res.json(people);
    } catch (err) {
      return res.json('Server err');
    }
  } //Method getting one member from the database


  static async getOnePerson(req, res) {
    try {
      const person = await _models.default.Person.findByPk(req.params.id);
      return res.json(person);
    } catch (err) {
      return res.json('Server err');
    }
  } //Method posting people information to database


  static async postPeople(req, res) {
    try {
      const checkForName = await _models.default.Person.findOne({
        where: {
          name: req.body.name
        }
      });

      if (checkForName) {
        return res.json('name already exists');
      } else {
        const postedPeople = await _models.default.Person.create(req.body);
        return res.json(postedPeople);
      }
    } catch (err) {
      return res.json('server error ');
    }
  } //Update database


  static async updatePeople(req, res) {
    try {
      const updatedPeople = await _models.default.Person.update({
        name: req.body.name,
        subject: req.body.subject,
        institution: req.body.institution,
        status: req.body.status,
        knownfor: req.body.knowfor,
        bio: req.body.bio
      }, {
        where: {
          id: req.params.id
        }
      });
      return res.json(updatedPeople);
    } catch (err) {
      return res.json(err);
    }
  } //Delete entry in database


  static async deletePeople(req, res) {
    const deletedPeople = await _models.default.Person.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json(deletedPeople);
  }

}

var _default = PeopleController;
exports.default = _default;
//# sourceMappingURL=PeopleController.js.map
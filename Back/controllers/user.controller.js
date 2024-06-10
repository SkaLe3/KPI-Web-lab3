const userService = require("../services/userService");

class UserController {
  async signUp(req, res) {
    const { name, username, password, email } = req.body;
    const newUser = await userService.signUp(name, username, password, email);
    return res.json(newUser);
  }

  async signIn(req, res) {
    const { username, password } = req.body;
    const user = await userService.signIn(username, password);
    return res.json(user);
  }

  async addGame(req, res) {
    const { gamePhoto, gameName, gameMark, gameGrade } = req.body;
    const user = await userService.addGame(
      gamePhoto,
      gameName,
      gameMark,
      gameGrade
    );
    return res.json(user);
  }
}

module.exports = new UserController();

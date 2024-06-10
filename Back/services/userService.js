const dataSource = require("../databaseConnection/database");

class UserService {
  async signUp(name, username, password, email) {
    const userRepository = dataSource.getRepository("User");
    const id = Math.floor(Math.random() * 100) + 1;
    const newUser = await userRepository.create({
      name: name,
      username: username,
      password: password,
      email: email,
      productName: [],
      productCode: [],
      productManufacturer: [],
      productQuantity: [],
      productCost: [],
      id: id,
    });
    const savedUser = await userRepository.save(newUser);
    return savedUser;
  }

  async signIn(username, password) {
    const userRepository = dataSource.getRepository("User");
    const user = await userRepository.findOneBy({ username });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    if (user.password === password) {
      return user;
    } else {
      return "Not log in";
    }
  }

  async addGame(gamePhoto, gameName, gameMark, gameGrade, username) {
    const userRepository = dataSource.getRepository("User");
    const user = await userRepository.findOneBy({ username });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    user.gamePhoto.push(gamePhoto);
    user.gameName.push(gameName);
    user.gameMark.push(gameMark);
    user.gameGrade.push(gameGrade);
    return user;
  }
}

module.exports = new UserService();

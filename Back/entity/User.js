const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "user",
  columns: {
    username: {
      type: "varchar",
    },
    name: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    id: {
      type: "int",
      primary: true,
    },
    productName: {
      type: "varchar",
      array: true,
    },
    productCode: {
      type: "int",
      array: true,
    },
    productManufacturer: {
      type: "varchar",
      array: true,
    },
    productQuantity: {
      type: "varchar",
      array: true,
    },
    productCost: {
      type: "int",
      array: true,
    },
  },
});

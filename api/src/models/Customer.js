const { DataTypes  } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "customer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      first_name: {
        type: DataTypes.STRING,
        required: true,
      },
      last_name: {
        type: DataTypes.STRING,
        required: true,
      },
      city: {
        type: DataTypes.STRING,
        required: true,
      },
      street: {
        type: DataTypes.STRING,
        required: true,
      },
      phone: {
        type: DataTypes.STRING,
        required: true,
      },
      postal_code: {
        type: DataTypes.STRING,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isPremium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true }
  );
}
/* name modified from customer_id to id */
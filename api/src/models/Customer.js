const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const { JWT } = process.env;

module.exports = (sequelize) => {
  sequelize.define(
    'customer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.VIRTUAL,
        get() {
          return jwt.sign(
            {
              id: this.id,
              isAdmin: this.isAdmin,
              isPremium: this.isPremium,
              isBanned: this.isBanned,
            },
            JWT
          );
        },
      },
    },
    { timestamps: false }
  );
};
/* name modified from customer_id to id */

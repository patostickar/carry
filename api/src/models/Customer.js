const { DataTypes } = require('sequelize');

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
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      img:{
        type: DataTypes.STRING,
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
    { timestamps: false }
  );
};
/* name modified from customer_id to id */

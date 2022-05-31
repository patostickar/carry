const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'location',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      geo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      time_open: {
        type: DataTypes.TIME,
        allowNull: false
      },
      time_close: {
        type: DataTypes.TIME,
        allowNull: false
      },
      airport_location: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    },
    { timestamps: false }
  );
};

// telephone: name modified to "phone"

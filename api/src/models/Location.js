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
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stateName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      geo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeOpen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeClose: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airportLocation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

// telephone: name modified to "phone"

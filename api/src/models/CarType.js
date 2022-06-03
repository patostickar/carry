const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'cartype',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      className: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      transmission: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      mpg: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      doors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      airConditioning: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        unique: 'uniqueCarType',
      },
      largeSuitcase: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      smallSuitcase: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'uniqueCarType',
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'uniqueCarType',
      },
    },
    { timestamps: false }
  );
};

/*
image_url: name modified to "img"
carType_ide: name modified to "id"
*/

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
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transmission: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mpg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doors: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      air_conditioning: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      large_suitcase: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      small_suitcase: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

/*
image_url: name modified to "img"
carType_ide: name modified to "id"
*/

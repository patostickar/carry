const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cartype",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      make: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      class_code: {
        type: DataTypes.STRING,
      },
      class_name: {
        type: DataTypes.STRING,
      },
      transmition: {
        type: DataTypes.STRING,
      },
      mpg: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
      doors: {
        type: DataTypes.INTEGER,
      },
      seats: {
        type: DataTypes.INTEGER,
      },
      air_conditioning: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      targe_suitcase: {
        type: DataTypes.INTEGER,
      },
      small_suitcase: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true }
  );
};

/*
image_url: name modified to "img"
carType_ide: name modified to "id"
*/

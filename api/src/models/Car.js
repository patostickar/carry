const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "car",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      }
    },
    { timestamps: false }
  );
};

/*
were not added
car_type
location
*/

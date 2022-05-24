const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "car",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      pickup_date: {
        type: DataTypes.DATEONLY,
      },
      return_date: {
        type: DataTypes.DATEONLY,
      },
    },
    { timestamps: true }
  );
};

/*
were not added
car_type
location
*/

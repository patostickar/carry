const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Review',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      review:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  );
};



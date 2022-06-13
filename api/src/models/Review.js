const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'review',
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
    { timestamps: true }
  );
};



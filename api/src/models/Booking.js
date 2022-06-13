const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'booking',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      pickUpDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dropOffDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      reservationTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PremiumSecure:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: false,
      },
      paymentId:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'activo',
      },
    },
    { timestamps: false }
  );
};

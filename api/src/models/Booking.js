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
      pickupDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      returnDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      reservationTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

/*      
=> customer_id wasn't added
=> booking_id wasn't added
        */

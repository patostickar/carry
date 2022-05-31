const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "booking",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      pickup_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      return_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      reservation_total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Status: {
        type : DataTypes.STRING
      }
    },
    { timestamps: false }
  );
};

/*      
=> customer_id wasn't added
=> booking_id wasn't added
        */

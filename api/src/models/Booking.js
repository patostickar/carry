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
      base_rate: {
        type: DataTypes.INTEGER,
      },
      taxes_fees_total: {
        type: DataTypes.INTEGER,
      },
      insurance_total: {
        type: DataTypes.INTEGER,
      },
      discount_total: {
        type: DataTypes.INTEGER,
      },
      reservation_total: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};

/*      
=> customer_id wasn't added
=> booking_id wasn't added
        */

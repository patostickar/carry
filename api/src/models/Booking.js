const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "booking",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true,
      },
      pickup_date: {
        type: DataTypes.DATEONLY,
        required: true,
      },
      return_date: {
        type: DataTypes.DATEONLY,
        required: true,
      },
      pickup_location: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        required: true,
      },
      return_location: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        required: true,
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
    { timestamps: true }
  );
};

/*      
=> booking_id:
name modified to "id"
attributes added
        id: {
        autoIcrement: true,
        unique: true, 
=> customer_id wasn't added
=> booking_id wasn't added
=> dropoff_location: name modified to "return_location"
        */

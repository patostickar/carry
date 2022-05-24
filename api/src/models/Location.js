const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'location',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state_name: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      geo: {
        type: DataTypes.JSON,
      },
      /*       
const point = { type: 'Point', coordinates: [-76.984722, 39.807222]}; // GeoJson format: [lng, lat]

User.create({username: 'username', geometry: point }); */
      phone: {
        type: DataTypes.STRING,
      },
      time_open: {
        type: DataTypes.TIME,
      },
      time_close: {
        type: DataTypes.TIME,
      },
      airport_location: {
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: false }
  );
};

// telephone: name modified to "phone"

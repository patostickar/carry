const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "customer",
    {
      customer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      first_name: {
        type: DataTypes.STRING,
        required: true,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        required: true,
      },
      street: {
        type: DataTypes.STRING,
        required: true,
      },
      phone: {
        type: DataTypes.STRING,
        required: true,
      },
      /* QUESTIONS 
      postal_code 
      state_name
      is necessary??*/
      postal_code: {
        type: DataTypes.STRING,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
      /* CHANGES:
      isAdmin => added
      isPremium => name modified
      isBanned => name modified
         */
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isPremium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true }
  );
}

const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "customer",
    {
      customer_id: {
        type: UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      /* QUESTIONS 
      postal_code 
      state_name
      is necessary??*/
      postal_code: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      /* CHANGES:
      isAdmin => added
      isPremium => name modified
      isBanned => name modified
         */
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isPremium: {
        type: Boolean,
        default: false,
      },
      isBanned: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
}

import { Schema, models, model } from "mongoose";

const account =
  models.account ||
  model(
    "account",
    new Schema({
      AccountID: Number,
      username: String,
      password: String,
      email: String,
      profile_name: String,
      first_name: String,
      last_name: String,
      address: String
    })
  );

export default account;

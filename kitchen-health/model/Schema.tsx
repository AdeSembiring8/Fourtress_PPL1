import { Schema, models, model } from "mongoose";

const account =
  models.account ||
  model(
    "account",
    new Schema({
      username: String,
      password: String,
    }),
  );

export default account;

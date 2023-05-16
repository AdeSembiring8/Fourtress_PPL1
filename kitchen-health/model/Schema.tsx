import { Schema, models, model } from "mongoose";

export const account =
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
      address: String,
    })
  );

  export const disease =
  models.disease ||
  model(
    "disease",
    new Schema({
      DiseaseID: Number,
      name: String,
      desc: String,
    })
  );

  export const dish =
  models.dish ||
  model(
    "dish",
    new Schema({
      DishID: Number,
      title: String,
      price: String,
      qty : Number,
      desc : String,
      guide : String,
    })
  );

  export const ingredient =
  models.ingredient ||
  model(
    "ingredient",
    new Schema({
      IngredientID: Number,
      name: String,
      price: String,
      desc : String,
      qty : Number,
    })
  );

  export const nutrient =
  models.nutrient ||
  model(
    "nutrient",
    new Schema({
      NutrientID: Number,
      name: String,
      desc : String,
    })
  );

  export const discussion =
  models.discussion ||
  model(
    "discussion",
    new Schema({
      DiscussionID: Number,
      opID: Number,
      title : String,
      subject : String,
      content : String,
    })
  );

  export const comment =
  models.comment ||
  model(
    "comment",
    new Schema({
      CommentID: Number,
      AuthorID: Number,
      DiscussionID : Number,
      content : String,
    })
  );
import { Schema } from "effect";

export const ProductSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
  price: Schema.Number,
  category: Schema.String,
  image: Schema.String.pipe(Schema.pattern(/^https?:\/\/.+/)),
  description: Schema.String,
  rating: Schema.Struct({
    rate: Schema.Number,
    count: Schema.Number,
  }),
});

export type Product = {
  -readonly [K in keyof typeof ProductSchema.Type]: (typeof ProductSchema.Type)[K];
};

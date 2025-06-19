import { useQuery } from "@tanstack/react-query";
import { ProductSchema, type Product } from "@/types/product";
import { Effect, Schema } from "effect";
import { HttpClient, FetchHttpClient } from "@effect/platform";

const BASE_URL = "https://fakestoreapi.com";

const fetchJson = <T>(url: string, schema?: Schema.Schema<T>) =>
  HttpClient.get(url).pipe(
    Effect.flatMap((response) => response.json),
    Effect.flatMap((data) =>
      schema ? Schema.decodeUnknown(schema)(data) : Effect.succeed(data as T),
    ),
    Effect.provide(FetchHttpClient.layer),
  );

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: (): Promise<Product[]> =>
      Effect.runPromise(
        fetchJson(`${BASE_URL}/products`, Schema.Array(ProductSchema)),
      ) as Promise<Product[]>,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: (): Promise<Product> =>
      Effect.runPromise(
        fetchJson(`${BASE_URL}/products/${id}`, ProductSchema),
      ) as Promise<Product>,
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: (): Promise<string[]> =>
      Effect.runPromise(
        fetchJson(
          `${BASE_URL}/products/categories`,
          Schema.Array(Schema.String),
        ),
      ) as Promise<string[]>,
  });
};

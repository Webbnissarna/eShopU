import { IProduct } from "./product.type";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

type TOptions = {
  variables?: Record<string, unknown>;
  preview?: boolean;
};

async function fetchAPI(query: string, { variables, preview }: TOptions = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewProductBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query ProductBySlug($slug: String) {
      product(filter: {slug: {eq: $slug}}) {
        slug
        name
      }
    }
    `,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.product;
}

export async function getProductBySlug(slug: string): Promise<IProduct> {
  const data = await fetchAPI(
    `
    query ProductBySlug($slug: String) {
      product(filter: {slug: {eq: $slug}}) {
        slug
        name
        price
        currency
        productDescription
      }
    }
    `,
    {
      preview: false,
      variables: {
        slug,
      },
    }
  );
  return data?.product;
}

export async function getAllProductsWithSlug(): Promise<Array<IProduct>> {
  const data = await fetchAPI(
    `
    query GetAllProducts {
      allProducts {
        slug
        name
        price
        currency
        productDescription
      }
    }
    `
  );

  return data?.allProducts;
}

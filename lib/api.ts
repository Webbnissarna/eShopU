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
        category
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

export async function getAllProducts(): Promise<Array<IProduct>> {
  const data = await fetchAPI(
    `
    query GetAllProducts {
      allProducts {
        slug
        name
        price
        currency
        productDescription
        category
      }
    }
    `
  );

  return data?.allProducts;
}

export async function getAllProductByCategory(
  category: string
): Promise<Array<IProduct>> {
  const data = await fetchAPI(
    `
    query getAllProductsByCategory($category: String) {
      allProducts(filter: {category: {eq: $category}}) {
        slug
        name
        price
        currency
        productDescription
        category
      }
    }
    `,
    {
      preview: false,
      variables: {
        category,
      },
    }
  );

  return data?.allProducts;
}

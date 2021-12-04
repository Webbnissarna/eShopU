import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import React from "react";
import { Box, Grid } from "theme-ui";
import Layout from "../components/Layout";
import ProductContainer from "../components/ProductContainer";
import TopMenu from "../components/TopMenu/TopMenu";
import { getAllProductByCategory, getAllProducts } from "../lib/api";
import { IProduct } from "../lib/product.type";

export default function Category({
  products,
  allProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !products) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box>
      <TopMenu products={allProducts} />
      <Layout>
        <Grid columns={[1, null, 2, 4]} gap={"lg"}>
          {products.map((product: IProduct) => {
            return <ProductContainer product={product} key={product.slug} />;
          })}
        </Grid>
      </Layout>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const products: Array<IProduct> = await getAllProductByCategory(
    params?.category as string
  );
  const allProducts: Array<IProduct> = await getAllProducts();

  return {
    props: {
      preview,
      products: products,
      allProducts: allProducts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await getAllProducts();
  const paths = allProducts.reduce<Array<{ params: { category: string } }>>(
    (categories, product) => {
      const isNewCategory = categories.find(
        (p) => p.params.category === product.category
      )
        ? false
        : true;
      if (isNewCategory && product.category) {
        categories.push({ params: { category: product.category } });
      }

      return categories;
    },
    []
  );
  return {
    paths: paths || [],
    fallback: true,
  };
};

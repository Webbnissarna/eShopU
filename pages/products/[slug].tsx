import React from "react";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next/types";
import { getAllProductsWithSlug, getProductBySlug } from "../../lib/api";
import { IProduct } from "../../lib/product.type";
import Layout from "../../components/Layout";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Box } from "theme-ui";
import ProductContainer from "../../components/ProductContainer";

export default function Product({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const navigations = [
    { title: "Categories", links: ["IT", "Games", "Teddybears"] },
    { title: "Best sellers", links: ["Rainbow teddy"] },
  ];

  return <Layout>{product.productDescription}</Layout>;
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const data: IProduct = await getProductBySlug(params?.slug as string);

  return {
    props: {
      preview,
      product: {
        ...data,
      },
    },
  };
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await getAllProductsWithSlug();
  const paths = allProducts.map((product) => {
    return { params: { ...product } };
  });
  return {
    paths: paths || [],
    fallback: true,
  };
};

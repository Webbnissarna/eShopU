import React from "react";
import { Box, Flex } from "theme-ui";
import { IProduct } from "../../lib/product.type";
import Logo from "./Logo";
import TopMenuContainer from "./TopMenuContainer";
import TopMenuList from "./TopMenuList";

type TLink = {
  title: string;
  href: string;
};

export default function TopMenu({ products }: { products: Array<IProduct> }) {
  const c = products.reduce<Array<TLink>>((categories, product) => {
    const isNewCategory = categories.find((p) => p.title === product.category)
      ? false
      : true;

    if (isNewCategory && product.category) {
      categories.push({ title: product.category, href: product.category });
    }

    return categories;
  }, []);
  return (
    <Flex
      as="nav"
      sx={{
        padding: "3xs",
        backgroundColor: "tertiaryScale.7",
        alignItems: "center",
        gap: "md",
      }}
    >
      <Box sx={{ padding: "sm" }}>
        <Logo height={40} width={40} />
      </Box>
      <Flex as="ul" sx={{ listStyle: "none", padding: 0, gap: "2xs" }}>
        <TopMenuContainer title={`Categories`}>
          <TopMenuList links={c} />
        </TopMenuContainer>
      </Flex>
    </Flex>
  );
}

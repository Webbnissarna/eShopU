import React from "react";
import { Box, Text } from "theme-ui";

import { IProduct } from "../../lib/product.type";
import Animate from "../Animate";

export default function ProductContainer({ product }: { product: IProduct }) {
  const animationVariants = {
    idle: {
      boxShadow: "0px 2px 2px #000",
    },
    hover: {
      boxShadow: "2px 5px 6px #111",
    },
  };
  return (
    <Animate
      sx={{
        padding: "lg",
        borderRadius: "lg",
        boxShadow: "0px 2px 2px #000",
        color: "inherit",
        textDecoration: "none",
      }}
      variants={animationVariants}
      initial={"idle"}
      whileHover={"hover"}
    >
      <Box
        as={"ul"}
        sx={{ listStyle: "none", padding: 0, position: "relative" }}
      >
        <Box as={"li"}>
          <Text as="h3" sx={{ paddingBottom: "sm" }}>
            {product.name}
          </Text>
        </Box>
        <Box
          as={"li"}
          sx={{
            position: "absolute",
            right: -30,
            top: -30,
            backgroundColor: "secondaryScale.8",
            padding: "xs",
            borderRadius: "xl",
            color: "white",
            fontWeight: "bold",
            transform: "rotateZ(25deg)",
          }}
        >
          {product.currency} {product.price}
        </Box>
        <Box as={"li"}>{product.productDescription}</Box>
      </Box>
    </Animate>
  );
}

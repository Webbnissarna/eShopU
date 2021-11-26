import React from "react";
import { Box } from "theme-ui";

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
      sx={{ padding: "lg", borderRadius: "lg", boxShadow: "0px 2px 2px #000" }}
      variants={animationVariants}
      initial={"idle"}
      whileHover={"hover"}
    >
      <Box as={"ul"}>
        <Box as={"li"}>{product.name}</Box>
        <Box as={"li"}>{product.productDescription}</Box>
        <Box as={"li"}>
          {product.currency} {product.price}
        </Box>
      </Box>
    </Animate>
  );
}

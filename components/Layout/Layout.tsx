import React from "react";

import { Box, Flex } from "@theme-ui/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex sx={{ justifyContent: "center", width: "100%" }}>
      <Box sx={{ maxWidth: "lg" }}>{children}</Box>
    </Flex>
  );
}

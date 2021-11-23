import React, { useState } from "react";

import { Box, Flex } from "theme-ui";
import TopMenuLink from "./TopMenuItem";

export default function TopMenuContainer({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box onClick={() => setOpen(!isOpen)}>
      <TopMenuLink title={title} />
      <Box sx={{ position: "relative", width: "100%" }}>
        <Flex
          sx={{
            position: "absolute",
            top: "sm",
            zIndex: 1,
            color: "primaryScale.5",
            width: "100%",
          }}
        >
          {isOpen ? children : null}
        </Flex>
      </Box>
    </Box>
  );
}

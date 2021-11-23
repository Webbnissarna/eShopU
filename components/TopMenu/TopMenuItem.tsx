import React, { useState } from "react";
import { useThemeUI, Box, Flex } from "theme-ui";

import { motion } from "framer-motion";

import Animate from "../Animate";

export default function TopMenuItem({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  const {
    theme: { colors },
  } = useThemeUI();

  const [isOpen, setOpen] = useState(false);

  return (
    <Animate
      sx={{
        padding: "sm",
        borderRadius: "md",
        cursor: "pointer",
        color: "white",
        fontSize: "lg",
        fontWeight: "semibold",
        background: `linear-gradient(45deg, ${colors?.primaryScale?.[3]}, ${colors?.secondaryScale?.[3]})`,
        userSelect: "none",
      }}
      initial={{ scale: 1 }}
      whileTap={{
        scale: [1, 0.9, 1.1],
        transition: { duration: 0.1 },
      }}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <Box as={`span`}>{title}</Box>
      <Box sx={{ position: "relative" }}>
        <Flex
          sx={{
            position: "absolute",
            top: 0,
            zIndex: 1,
            color: "primaryScale.5",
          }}
        >
          {isOpen ? children : null}
        </Flex>
      </Box>
    </Animate>
  );
}

/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";

import { motion, AnimationProps, HTMLMotionProps } from "framer-motion";

import { SxProp, jsx } from "@theme-ui/core";
import { BoxProps } from "@theme-ui/components";

interface IAnimateProp
  extends AnimationProps,
    SxProp,
    Pick<BoxProps, "as">,
    HTMLMotionProps<"div"> {
  children?: React.ReactNode;
}

export default function Animate({ children, ...props }: IAnimateProp) {
  return <motion.div {...props}>{children}</motion.div>;
}

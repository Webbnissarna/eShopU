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
interface IAnimateAProp
  extends AnimationProps,
    SxProp,
    Pick<BoxProps, "as">,
    HTMLMotionProps<"a"> {
  children?: React.ReactNode;
}

export default function Animate({ children, ...props }: IAnimateProp) {
  return <motion.div {...props}>{children}</motion.div>;
}
function A({ children, ...props }: IAnimateAProp) {
  return <motion.a {...props}>{children}</motion.a>;
}

Animate.a = A;

import { ulVariants, liVariants } from "./topmenu.animations";

import Animate from "../Animate";

import { AnimatePresence, motion } from "framer-motion";

type TMenuLink = {
  href: string;
  title: string;
};
type TTopMenuItem = {
  links: Array<TMenuLink>;
};

export default function TopMenuList({ links }: TTopMenuItem) {
  return (
    <AnimatePresence>
      <Animate
        as={"ul"}
        sx={{
          listStyle: "none",
          padding: "xs",
          gap: "xs",
          width: "100%",
          backgroundColor: "secondaryScale.3",
          borderRadius: "md",
          display: "flex",
          flexDirection: "column",
        }}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        variants={ulVariants}
      >
        {links.map((link) => {
          return (
            <Animate.a
              key={link.title}
              sx={{
                padding: "sm",
                backgroundColor: "secondaryScale.2",
                borderRadius: "md",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              variants={liVariants}
              as={`a`}
              href={`/${link.href}`}
            >
              {link.title}
            </Animate.a>
          );
        })}
      </Animate>
    </AnimatePresence>
  );
}

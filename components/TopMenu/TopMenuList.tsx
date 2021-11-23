import { Box } from "@theme-ui/components";

import Animate from "../Animate";

import { AnimatePresence, motion } from "framer-motion";

type TopMenuItem = {
  links: Array<string>;
};

export default function TopMenuList({ links }: TopMenuItem) {
  const ulVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: -60,
      y: -40,
    },
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.1,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      x: -60,
      y: -40,
      transition: {
        duration: 4,
      },
    },
  };
  const liVariants = {
    initial: {
      opacity: 0,
      x: -20,
      scale: 0,
      transition: {
        duration: 2,
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0,
    },
  };
  return (
    <AnimatePresence>
      <Animate
        as={"ul"}
        sx={{
          listStyle: "none",
          padding: "xs",
          gap: "sm",
          width: "100%",
          backgroundColor: "secondaryScale.3",
          borderRadius: "md",
        }}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        variants={ulVariants}
      >
        {links.map((link) => {
          return (
            <Animate
              key={link}
              sx={{
                padding: "sm",
                backgroundColor: "secondaryScale.2",
                borderRadius: "md",
                marginY: "sm",
                cursor: "pointer",
              }}
              variants={liVariants}
            >
              {link}
            </Animate>
          );
        })}
      </Animate>
    </AnimatePresence>
  );
}

/** sad no work */

// const TopMenuList = React.forwardRef(({ links }, ref) => {
//   return (
//     <Box
//       as={`ul`}
//       sx={{
//         listStyle: "none",
//         padding: "xs",
//         gap: "sm",
//         width: "100%",
//         backgroundColor: "secondaryScale.3",
//         borderRadius: "md",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 2 } }}
//       whileHover={{ opacity: 0 }}
//       ref={ref}
//     >
//       {links.map((link) => {
//         return (
//           <Box
//             as={`li`}
//             key={link}
//             sx={{
//               padding: "sm",
//               backgroundColor: "secondaryScale.2",
//               borderRadius: "md",
//               marginY: "sm",
//             }}
//           >
//             {link}
//           </Box>
//         );
//       })}
//     </Box>
//   );
// });

// TopMenuList.displayName = "TopMenuList";

// export default motion(TopMenuList, { forwardMotionProps: true });

export const ulVariants = {
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
export const liVariants = {
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

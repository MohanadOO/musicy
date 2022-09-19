export const pictureVadeIn = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
}

export const formatTypeVariants: any = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: '0.5',
      staggerChildren: '0.8',
    },
  },
}

export const formatTypeChildVariant = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
}

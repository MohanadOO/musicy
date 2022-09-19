export const heroVariant: any = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: '0.4',
    },
  },
}
export const heroChildVariantLeft = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export const heroChildVariantRight = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'
import {
  heroVariant,
  heroChildVariantLeft,
  heroChildVariantRight,
} from '../variants/heroVariants'

export default function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'hero' })
  return (
    <section aria-labelledby='hero' className='mt-20 font-bold overflow-hidden'>
      <motion.div
        variants={heroVariant}
        initial='initial'
        animate='animate'
        className='lg:flex lg:gap-10 lg:mx-10 child:flex-1'
      >
        <motion.header
          variants={heroVariant}
          initial='initial'
          animate='animate'
          className='mx-5 sm:mx-10 lg:mx-0 2xl:mt-44 lg:max-w-lg 2xl:max-w-3xl'
        >
          <motion.h1
            variants={heroChildVariantLeft}
            id='hero'
            className='text-sm uppercase border border-black inline-block p-2'
          >
            {t('whyMusicy')}
          </motion.h1>
          <motion.h2
            variants={heroChildVariantLeft}
            className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl my-5'
          >
            {t('title1')}
            <span className='block'>{t('title2')}</span>
          </motion.h2>
          <motion.p
            variants={heroChildVariantLeft}
            className='sm:text-lg md:text-xl lg:text-2xl'
          >
            {t('body')}
          </motion.p>
        </motion.header>
        <div className='my-14 lg:mb-0 lg:mt-7 xl:mt-12 flex flex-col lg:mr-16'>
          <motion.picture variants={heroChildVariantRight}>
            <source srcSet='/piano.webp' type='image/webp' />
            <img
              className='aspect-[11/13] w-[75%] ltr:ml-auto rtl:mr-auto translate-x-6 lg:translate-x-0 rotate-[5deg] lg:w-[80%] object-cover border-2 border-black'
              src='/piano.jpg'
              alt='Keyboard and Piano'
            />
          </motion.picture>
          <motion.picture variants={heroChildVariantRight}>
            <source srcSet='/vinyl-collection.webp' type='image/webp' />
            <img
              className='aspect-[11/13] w-[75%] rotate-[-5deg] -translate-y-14 lg:w-[80%] object-cover border-2 border-black lg:-translate-y-[30%]'
              src='/vinyl-collection.jpg'
              alt='Vinyl Collection'
            />
          </motion.picture>
        </div>
      </motion.div>
    </section>
  )
}

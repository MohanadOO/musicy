import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'
import {
  communityChildVariants,
  communityVariants,
} from '../variants/communityVariants'

const communityImages = [1, 2, 3, 4, 5, 6, 7, 8]

export default function () {
  const { t } = useTranslation('translation', { keyPrefix: 'community' })
  return (
    <section
      aria-labelledby='community'
      className='flex flex-col items-center text-center pt-0 font-bold overflow-hidden'
    >
      <motion.header
        variants={communityVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='mx-5'
      >
        <motion.h2
          variants={communityChildVariants}
          id='community'
          className='text-xs lg:text-base uppercase bg-white text-black inline-block py-2 px-5 border-2 border-black'
        >
          {t('title')}
        </motion.h2>
        <motion.h3
          variants={communityChildVariants}
          className='font-bold text-3xl lg:text-4xl my-7'
        >
          {t('subTitle')}
        </motion.h3>
        <motion.p
          variants={communityChildVariants}
          className='pb-3 lg:text-lg max-w-2xl'
        >
          {t('body')}
        </motion.p>
        <motion.button
          variants={communityChildVariants}
          className='font-bold text-xs md:text-base md:w-[40%] uppercase rounded-full border-2 border-black w-full py-3 mt-8 mb-20'
        >
          {t('browseArtists')}
        </motion.button>
      </motion.header>

      <div className='grid grid-cols-2 gap-0 lg:grid-cols-4 child:border child:border-black w-full'>
        {communityImages.map((id) => (
          <div key={id}>
            <a href='#'>
              <picture>
                <source
                  srcSet={`/community/community-${id}.webp`}
                  type='image/webp'
                />
                <img
                  className='aspect-square w-full object-cover hover:brightness-75'
                  srcSet={`/community/community-${id}.jpg`}
                  alt='Artist Work'
                  loading='lazy'
                />
              </picture>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

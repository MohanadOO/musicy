import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  formatTypeChildVariant,
  formatTypeVariants,
  pictureVadeIn,
} from '../../../variants/formatVariants'

export default function ProjectType() {
  const { t } = useTranslation('translation', { keyPrefix: 'formats' })

  return (
    <>
      <div className='lg:flex child:border child:border-black child:flex-1'>
        <motion.div
          variants={formatTypeVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='flex flex-col gap-7 items-center overflow-hidden bg-yellow pt-10 pb-24 px-10'
        >
          <div className='w-full md:w-[70%] lg:order-1'>
            <motion.picture
              variants={pictureVadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <source srcSet='/cassettes.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                loading='lazy'
                src='/cassettes.jpg'
                alt='Cassettes collections'
              />
            </motion.picture>
          </div>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'
          >
            {t('crowdfundingTitle')}
          </motion.p>
          <motion.h3
            variants={formatTypeChildVariant}
            className='text-4xl lg:text-5xl'
          >
            {t('crowdfunding')}
          </motion.h3>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-center lg:text-lg max-w-2xl'
          >
            {t('crowdfundingBody')}
          </motion.p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            {t('learnMore')}
          </button>
        </motion.div>

        <motion.div
          variants={formatTypeVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='flex flex-col gap-7 items-center overflow-hidden bg-navy pt-10 pb-24 px-10'
        >
          <div className='w-full md:w-[70%] lg:order-1'>
            <motion.picture
              variants={pictureVadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <source srcSet='/cassette-2.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                loading='lazy'
                src='/cassette-2.jpg'
                alt='Single black cassette'
              />
            </motion.picture>
          </div>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'
          >
            {t('preOrderTitle')}
          </motion.p>
          <motion.h3
            variants={formatTypeChildVariant}
            className='text-4xl lg:text-5xl'
          >
            {t('preOrder')}
          </motion.h3>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-center lg:text-lg max-w-2xl'
          >
            {t('preOrderBody')}
          </motion.p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            {t('learnMore')}
          </button>
        </motion.div>
      </div>
    </>
  )
}

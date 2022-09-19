import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  formatTypeChildVariant,
  formatTypeVariants,
  pictureVadeIn,
} from '../../../variants/formatVariants'

export default function FormatsType() {
  const { t } = useTranslation('translation', { keyPrefix: 'formats' })

  return (
    <>
      <div className='lg:flex child:border child:border-black child:flex-1'>
        <motion.div
          variants={formatTypeVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='flex flex-col gap-7 items-center overflow-hidden bg-navy pt-10 pb-24 px-5 sm:px-10'
        >
          <div className='w-full md:w-[70%] lg:order-1'>
            <motion.picture
              variants={pictureVadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <source srcSet='vinyl.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                loading='lazy'
                src='vinyl.jpg'
                alt='A Single Vinyl'
              />
            </motion.picture>
          </div>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'
          >
            {t('circleVinyl')}
          </motion.p>
          <motion.h3
            variants={formatTypeChildVariant}
            className='text-4xl lg:text-5xl'
          >
            {t('vinyl')}
          </motion.h3>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-center lg:text-lg max-w-2xl'
          >
            {t('vinylBody')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={formatTypeVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='flex flex-col gap-7 items-center overflow-hidden bg-green pt-10 pb-24 px-5 sm:px-10'
        >
          <div className='w-full md:w-[70%] lg:order-1'>
            <motion.picture
              variants={pictureVadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <source srcSet='/cassette-1.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                loading='lazy'
                src='/cassette-1.jpg'
                alt='A Single white cassette'
              />
            </motion.picture>
          </div>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'
          >
            {t('rectanglePlastic')}
          </motion.p>
          <motion.h3
            variants={formatTypeChildVariant}
            className='text-4xl lg:text-5xl'
          >
            {t('cassette')}
          </motion.h3>
          <motion.p
            variants={formatTypeChildVariant}
            className='text-center lg:text-lg max-w-2xl'
          >
            {t('cassetteBody')}
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}

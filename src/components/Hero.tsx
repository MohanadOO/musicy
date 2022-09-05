import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'hero' })
  return (
    <section aria-labelledby='hero' className='mt-20 font-bold overflow-hidden'>
      <div className='lg:flex lg:gap-10 lg:mx-10 child:flex-1'>
        <header className='mx-5 sm:mx-10 lg:mx-0 2xl:mt-44 lg:max-w-lg 2xl:max-w-3xl'>
          <h1
            id='hero'
            className='text-sm uppercase border border-black inline-block p-2'
          >
            {t('whyMusicy')}
          </h1>
          <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl my-5'>
            {t('title1')}
            <span className='block'>{t('title2')}</span>
          </h2>
          <p className='sm:text-lg md:text-xl lg:text-2xl'>{t('body')}</p>
        </header>
        <div className='my-14 lg:mb-0 lg:mt-7 xl:mt-12 flex flex-col lg:mr-16'>
          <picture>
            <source srcSet='/piano.webp' type='image/webp' />
            <img
              className='aspect-[11/13] w-[75%] ml-auto   translate-x-6 lg:translate-x-0 rotate-[5deg] lg:w-[80%] object-cover border-2 border-black'
              src='/piano.jpg'
              alt='Keyboard and Piano'
            />
          </picture>
          <picture>
            <source srcSet='/vinyl-collection.webp' type='image/webp' />
            <img
              className='aspect-[11/13] w-[75%]  rotate-[-5deg] -translate-y-14 lg:w-[80%] object-cover border-2 border-black xl:-translate-x-[50%] lg:-translate-y-[30%]'
              src='/vinyl-collection.jpg'
              alt='Vinyl Collection'
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

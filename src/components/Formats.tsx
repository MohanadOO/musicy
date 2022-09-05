import { useTranslation } from 'react-i18next'

export default function Formats() {
  const { t } = useTranslation('translation', { keyPrefix: 'formats' })

  return (
    <section aria-labelledby='formats' className='font-bold'>
      <header>
        <h2
          id='formats'
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-20 px-3 mx-auto max-w-2xl'
        >
          {t('title')}
        </h2>
      </header>

      <div className='lg:flex child:border child:border-black child:flex-1'>
        <div className='flex flex-col gap-7 items-center bg-navy pt-10 pb-24 px-5 sm:px-10'>
          <div className='w-full md:w-[70%] lg:order-1'>
            <picture>
              <source srcSet='vinyl.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                src='vinyl.jpg'
                alt='A Single Vinyl'
              />
            </picture>
          </div>
          <p className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'>
            {t('circleVinyl')}
          </p>
          <h3 className='text-4xl lg:text-5xl'>{t('vinyl')}</h3>
          <p className='text-center lg:text-lg max-w-2xl'>{t('vinylBody')}</p>
        </div>
        <div className='flex flex-col gap-7 items-center bg-green pt-10 pb-24 px-5 sm:px-10'>
          <div className='w-full md:w-[70%] lg:order-1'>
            <picture>
              <source srcSet='/cassette-1.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                src='/cassette-1.jpg'
                alt='A Single white cassette'
              />
            </picture>
          </div>
          <p className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'>
            {t('rectanglePlastic')}
          </p>
          <h3 className='text-4xl lg:text-5xl'>{t('cassette')}</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            {t('cassetteBody')}
          </p>
        </div>
      </div>

      <div className='my-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mx-24'>
          {t('findFitTitle')}
        </h2>
        <p className='text-center lg:text-lg mx-10'>{t('findFitBody')}</p>
      </div>

      <div className='lg:flex child:border child:border-black child:flex-1'>
        <div className='flex flex-col gap-7 items-center bg-yellow pt-10 pb-24 px-10'>
          <div className='w-full md:w-[70%] lg:order-1'>
            <picture>
              <source srcSet='/cassettes.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                src='/cassettes.jpg'
                alt='Cassettes collections'
              />
            </picture>
          </div>
          <p className='text-xs lg:text-base uppercase inline-block py-2 px-3 bg-white border border-black'>
            {t('crowdfundingTitle')}
          </p>
          <h3 className='text-4xl lg:text-5xl'>{t('crowdfunding')}</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            {t('crowdfundingBody')}
          </p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            {t('learnMore')}
          </button>
        </div>

        <div className='flex flex-col gap-7 items-center bg-navy pt-10 pb-24 px-10'>
          <div className='w-full md:w-[70%] lg:order-1'>
            <picture>
              <source srcSet='/cassette-2.webp' type='image/webp' />
              <img
                className='w-full aspect-square object-cover'
                src='/cassette-2.jpg'
                alt='Single black cassette'
              />
            </picture>
          </div>
          <p className='text-xs lg:text-base uppercase border border-black inline-block py-2 px-3 bg-white'>
            {t('preOrderTitle')}
          </p>
          <h3 className='text-4xl lg:text-5xl'>{t('preOrder')}</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            {t('preOrderBody')}
          </p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            {t('learnMore')}
          </button>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-center gap-7 items-center bg-black text-white pt-10 pb-24 lg:py-20  px-5 sm:px-10'>
        <p className='text-center lg:text-xl max-w-2xl lg:text-left rtl:lg:text-right'>
          {t('startProjectBody')}
        </p>
        <a
          href='#'
          target='_blank'
          className='underline text-sm lg:text-lg uppercase'
        >
          {t('startProject')}
        </a>
      </div>
    </section>
  )
}

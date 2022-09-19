import { useTranslation } from 'react-i18next'
import FormatsType from './components/FormatsType'
import ProjectType from './components/ProjectType'

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

      <FormatsType />

      <div className='my-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mx-24'>
          {t('findFitTitle')}
        </h2>
        <p className='text-center lg:text-lg mx-10'>{t('findFitBody')}</p>
      </div>

      <ProjectType />

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

import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'
import {
  disclosureVariant,
  servicesChildImageVariant,
  servicesChildVariant,
  servicesVariants,
} from '../variants/servicesVariants'

export default function Services() {
  const { t } = useTranslation('translation', { keyPrefix: 'services' })

  return (
    <section
      aria-labelledby='services'
      className='my-12 flex flex-col items-center text-center overflow-hidden'
    >
      <div className='mx-5 my-16 lg:w-full'>
        <div className='lg:flex lg:items-center lg:justify-evenly lg:gap-20 lg:text-lg lg:mx-10'>
          <motion.header
            variants={servicesVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='flex flex-col items-center'
          >
            <motion.h2
              variants={servicesChildVariant}
              id='services'
              className='text-sm uppercase border-2 border-black p-2 font-bold'
            >
              {t('title')}
            </motion.h2>
            <div className='my-10'>
              <motion.h3
                variants={servicesChildVariant}
                className='uppercase text-2xl sm:text-4xl'
              >
                {t('subTitle1')} <span className='block'>{t('subTitle2')}</span>
              </motion.h3>
            </div>
            <motion.p
              variants={servicesChildVariant}
              className='text-sm sm:text-base font-bold max-w-3xl lg:order-4'
            >
              {t('body')}
            </motion.p>
            <motion.a
              variants={servicesChildVariant}
              href='#'
              className='font-bold text-xs md:w-[50%] lg:w-[60%] md:text-base uppercase rounded-full border-2 border-black w-full py-3 my-8 lg:order-5'
            >
              {t('learnMore')}
            </motion.a>
            <motion.div
              variants={servicesChildImageVariant}
              className='mt-12 lg:mt-0 lg:mb-12 max-w-[60%] lg:max-w-[80%]'
            >
              <picture>
                <source srcSet='/vinyl-2.webp' type='image/webp' />
                <img
                  className='aspect-[11/13] w-full object-cover border-2 border-black rotate-[-5deg]'
                  loading='lazy'
                  src='/vinyl-2.jpg'
                  alt='A Person holding a vinyl'
                />
              </picture>
            </motion.div>
          </motion.header>

          <motion.div
            variants={disclosureVariant}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='text-left rtl:text-right self-start my-16 flex flex-col w-full font-bold lg:max-w-4xl lg:text-2xl'
          >
            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              {t('makingRecords')}
            </h3>

            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              {t('makingRecords')}
            </h3>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              {t('makingRecords')}
            </h3>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-t-0 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      {t('designCustomization')}
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform opacity-0'
                  >
                    <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                      <>
                        {t('designCustomizationBody')}
                        <a href='#' className='uppercase block underline mt-6'>
                          {t('learnMore')} →
                        </a>
                      </>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </motion.div>
        </div>
      </div>

      <div className='w-full lg:flex'>
        <motion.div
          variants={disclosureVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='bg-black text-white py-14 sm:px-5 w-full font-bold border-2 border-black'
        >
          <h3 className='text-xs lg:text-base uppercase bg-white text-black inline-block py-2 px-5'>
            {t('retailNetworkTitle')}
          </h3>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl my-8'>
            {t('retailNetworkSubTitle1')}
            <span className='block'>{t('retailNetworkSubTitle2')}</span>
          </p>
          <p className='mx-5 pb-10 lg:text-lg max-w-2xl sm:mx-auto'>
            {t('retailNetworkBody')}
          </p>
        </motion.div>

        <motion.div
          variants={disclosureVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='bg-pink py-14 sm:px-5 w-full font-bold border-2 border-black'
        >
          <h3 className='text-xs lg:text-base uppercase bg-white border-2 border-black inline-block py-2 px-5'>
            {t('customerSupportTitle')}
          </h3>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl my-8'>
            {t('customerSupportSubTitle1')}
            <span className='block'>{t('customerSupportSubTitle2')}</span>
          </p>
          <p className='mx-5 pb-10 lg:text-lg max-w-2xl sm:mx-auto'>
            {t('customerSupportBody')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

export default function Services() {
  return (
    <section
      aria-labelledby='services'
      className='my-12 flex flex-col items-center text-center'
    >
      <div className='mx-5 my-16 lg:w-full'>
        <div className='lg:flex lg:items-center lg:justify-evenly lg:gap-20 lg:text-lg lg:mx-10'>
          <div className='flex flex-col items-center'>
            <h2
              id='services'
              className='text-sm uppercase border-2 border-black p-2 font-bold'
            >
              Our Services
            </h2>
            <div className='my-10'>
              <h3 className='uppercase text-2xl sm:text-4xl'>
                You Make Music <span className='block'>We Do The Rest</span>
              </h3>
            </div>
            <p className='text-sm sm:text-base font-bold max-w-3xl lg:order-4'>
              We want you to be able to put all your energy into the creative
              side of making music. So we created a one-stop shop for everything
              else.
            </p>
            <a
              href='#'
              className='font-bold text-xs md:w-[50%] lg:w-[60%] md:text-base uppercase rounded-full border-2 border-black w-full py-3 my-8 lg:order-5'
            >
              Learn More
            </a>
            <div className='mt-12 lg:mt-0 lg:mb-12 max-w-[60%] lg:max-w-[80%] rotate-[-5deg]'>
              <picture>
                <source srcSet='/vinyl-2.webp' type='image/webp' />
                <img
                  className='aspect-[11/13] w-full object-cover border-2 border-black'
                  src='/vinyl-2.jpg'
                  alt='A Person holding a vinyl'
                />
              </picture>
            </div>
          </div>
          <div className='text-left self-start my-16 flex flex-col w-full font-bold lg:max-w-4xl lg:text-2xl'>
            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              Making Records & Cassettes
            </h3>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              Making Records & Cassettes
            </h3>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <h3 className='p-3 sm:p-5 bg-black text-white text-base sm:text-xl lg:text-3xl'>
              Making Records & Cassettes
            </h3>
            <Disclosure
              as='div'
              className='p-3 sm:p-5 border-2 border-black flex flex-col'
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='py-2 mr-auto flex justify-between items-center w-full'>
                    <p className='text-sm sm:text-base'>
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
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
                      Design & Customization
                    </p>
                    <HiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-6 text-sm sm:text-base lg:text-lg'>
                    With over 39 colors and over 120,000 variations, control
                    what your record will look like.
                    <a href='#' className='uppercase block underline mt-6'>
                      Learn More →
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>

      <div className='w-full lg:flex'>
        <div className='bg-black text-white py-14 sm:px-5 w-full font-bold border-2 border-black'>
          <h3 className='text-xs lg:text-base uppercase bg-white text-black inline-block py-2 px-5'>
            Retail Network
          </h3>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl my-8'>
            Worldwide distro, <span className='block'>demystified.</span>
          </p>
          <p className='mx-5 pb-10 lg:text-lg max-w-2xl sm:mx-auto'>
            Get direct access to over 150 of our retail partners across the
            globe.
          </p>
        </div>

        <div className='bg-pink py-14 sm:px-5 w-full font-bold border-2 border-black'>
          <h3 className='text-xs lg:text-base uppercase bg-white border-2 border-black inline-block py-2 px-5'>
            Customer Support
          </h3>
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl my-8'>
            Here to help, <span className='block'>whenever you need it.</span>
          </p>
          <p className='mx-5 pb-10 lg:text-lg max-w-2xl sm:mx-auto'>
            Whether you’re an artist in the middle of product, or a fan with
            questions about your order; our team is here to help.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Formats() {
  return (
    <section aria-labelledby='formats' className='font-bold'>
      <header>
        <h2
          id='formats'
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-20 px-3 mx-auto max-w-2xl'
        >
          Choose from two formats and three project types.
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
            Circle Vinyl
          </p>
          <h3 className='text-4xl lg:text-5xl'>Vinyl</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            We know how special pressed records are to you. Our products are
            built for fans, by fans. We make it easy for artists to press vinyl,
            so the music you love can keep reaching ears in the most beautiful
            way.
          </p>
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
            RECTANGLE PLASTIC
          </p>
          <h3 className='text-4xl lg:text-5xl'>Cassette</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            Cassettes have always been special to music fans and artists.
            Whether you are saving a recording of a great concert, or preserving
            an early demo, there’s no better way to keep that music close than
            on cassette tapes.
          </p>
        </div>
      </div>

      <div className='my-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mx-24'>
          Find your fit
        </h2>
        <p className='text-center lg:text-lg mx-10'>
          Choose the best MuesicY project type to suit your needs ↓
        </p>
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
            NO RISK, NO WASTE
          </p>
          <h3 className='text-4xl lg:text-5xl'>Crowdfunding</h3>
          <p className='text-center max-w-2xl'>
            Rally your fans and gather pledges. Press the exact number of
            records you need, without having to pay anything upfront.
          </p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            Learn More
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
            GET INTO IT
          </p>
          <h3 className='text-4xl lg:text-5xl'>Pre-order</h3>
          <p className='text-center lg:text-lg max-w-2xl'>
            Put your music on physical, sooner. Take pre-orders from fans and
            we'll take care of the rest.
          </p>
          <button className='bg-black text-white lg:order-3 w-full md:w-[40%] rounded-full p-3 text-xs md:text-base uppercase'>
            Learn More
          </button>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-center gap-7 items-center bg-black text-white pt-10 pb-24 lg:py-20  px-5 sm:px-10'>
        <p className='text-center lg:text-xl max-w-2xl lg:text-left'>
          Just after straight up vinyl pressing or cassette duplication? We do
          that too. Tell us where and we'll ship in bulk to wherever you need.
        </p>
        <a
          href='#'
          target='_blank'
          className='underline text-sm lg:text-lg uppercase'
        >
          Start a press only project
        </a>
      </div>
    </section>
  )
}

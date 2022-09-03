export default function () {
  return (
    <section
      aria-labelledby='community'
      className='flex flex-col items-center text-center pt-0 font-bold'
    >
      <div className='mx-5'>
        <h2
          id='community'
          className='text-xs lg:text-base uppercase bg-white text-black inline-block py-2 px-5 border-2 border-black'
        >
          Community
        </h2>
        <h3 className='font-bold text-3xl lg:text-4xl my-7'>
          Join a growing community.
        </h3>
        <p className='pb-3 lg:text-lg max-w-2xl'>
          We're build a home for the next generation vinyl lovers and cassette
          junkies. Get in front of fans, connect with artists, labels and
          stores.
        </p>
        <button className='font-bold text-xs md:text-base md:w-[40%] uppercase rounded-full border-2 border-black w-full py-3 mt-8 mb-20'>
          Browse Artists
        </button>
      </div>

      <div className='grid grid-cols-2 gap-0 lg:grid-cols-4 child:border child:border-black w-full'>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-1.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-1.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-2.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-2.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-3.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-3.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-4.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-4.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-5.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-5.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-6.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-6.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-7.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-7.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
        <div>
          <a href='#'>
            <picture>
              <source srcSet='/community/community-8.webp' type='image/webp' />

              <img
                className='aspect-square w-full object-cover'
                src='/community/community-8.webp'
                alt='Artist Work'
              />
            </picture>
          </a>
        </div>
      </div>
    </section>
  )
}

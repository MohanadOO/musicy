import { useState } from 'react'
import {
  HiChevronDown,
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
} from 'react-icons/hi'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Menu } from '@headlessui/react'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='px-5 sm:px-10 border-b-2 border-transparent'>
      <nav className='py-5' aria-label='Primary'>
        <ul className='flex items-center gap-3 sm:gap-6 child:cursor-pointer z-20 child:font-bold child:uppercase lg:text-sm xl:text-base 2xl:text-lg'>
          <li id='logo'>
            <svg
              className='w-16 h-12 sm:w-24 sm:h-12'
              width='235'
              height='96'
              viewBox='0 0 235 96'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M41.792 81V51.176L30.144 73.384H25.216L13.568 51.176V81H4.736V35.56H14.208L27.648 61.416L41.216 35.56H50.624V81H41.792ZM58.959 68.456V47.464H67.535V66.6C67.535 69.16 68.0043 71.1013 68.943 72.424C69.8817 73.704 71.2683 74.344 73.103 74.344C74.2123 74.344 75.3003 74.1307 76.367 73.704C77.4763 73.2347 78.479 72.552 79.375 71.656C80.3137 70.76 81.103 69.6293 81.743 68.264V47.464H90.319V71.4C90.319 72.296 90.4683 72.936 90.767 73.32C91.1083 73.704 91.6417 73.9387 92.367 74.024V81C91.5137 81.128 90.7883 81.2133 90.191 81.256C89.6363 81.3413 89.1243 81.384 88.655 81.384C87.119 81.384 85.8603 81.0427 84.879 80.36C83.9403 79.6347 83.3857 78.6533 83.215 77.416L83.023 74.728C81.5297 76.9893 79.6097 78.7173 77.263 79.912C74.9163 81.064 72.335 81.64 69.519 81.64C66.063 81.64 63.439 80.5307 61.647 78.312C59.855 76.0507 58.959 72.7653 58.959 68.456ZM111.194 81.64C108.335 81.64 105.604 81.1707 103.002 80.232C100.399 79.2933 98.1588 77.9067 96.2815 76.072L99.3535 70.504C101.359 72.1253 103.322 73.32 105.242 74.088C107.204 74.856 109.082 75.24 110.874 75.24C112.538 75.24 113.86 74.9413 114.842 74.344C115.866 73.7467 116.378 72.8507 116.378 71.656C116.378 70.8453 116.1 70.2267 115.546 69.8C114.991 69.3307 114.18 68.9253 113.114 68.584C112.09 68.2427 110.831 67.8587 109.338 67.432C106.863 66.6213 104.794 65.832 103.13 65.064C101.466 64.296 100.207 63.336 99.3535 62.184C98.5428 60.9893 98.1375 59.4747 98.1375 57.64C98.1375 55.4213 98.6922 53.5227 99.8015 51.944C100.954 50.3227 102.532 49.064 104.538 48.168C106.586 47.272 108.975 46.824 111.706 46.824C114.095 46.824 116.356 47.208 118.49 47.976C120.623 48.7013 122.564 49.896 124.314 51.56L120.858 57C119.151 55.6773 117.53 54.7173 115.994 54.12C114.458 53.48 112.9 53.16 111.322 53.16C110.426 53.16 109.572 53.2667 108.762 53.48C107.994 53.6933 107.354 54.056 106.842 54.568C106.372 55.0373 106.138 55.72 106.138 56.616C106.138 57.4267 106.351 58.0667 106.778 58.536C107.247 58.9627 107.93 59.3467 108.826 59.688C109.764 60.0293 110.895 60.4133 112.218 60.84C114.906 61.608 117.167 62.3973 119.002 63.208C120.879 64.0187 122.287 65.0213 123.226 66.216C124.164 67.368 124.634 68.968 124.634 71.016C124.634 74.344 123.418 76.9467 120.986 78.824C118.554 80.7013 115.29 81.64 111.194 81.64ZM130.467 81V47.464H139.043V81H130.467ZM130.467 42.792V34.28H139.043V42.792H130.467ZM162.395 81.64C159.664 81.64 157.211 81.192 155.035 80.296C152.859 79.3573 151.003 78.0773 149.467 76.456C147.931 74.792 146.736 72.9147 145.883 70.824C145.072 68.7333 144.667 66.536 144.667 64.232C144.667 61.0747 145.371 58.1947 146.779 55.592C148.23 52.9467 150.278 50.8347 152.923 49.256C155.568 47.6773 158.704 46.888 162.331 46.888C165.958 46.888 169.072 47.6773 171.675 49.256C174.278 50.8347 176.219 52.904 177.499 55.464L169.115 58.024C168.39 56.7867 167.43 55.848 166.235 55.208C165.04 54.5253 163.718 54.184 162.267 54.184C160.646 54.184 159.152 54.6107 157.787 55.464C156.464 56.2747 155.419 57.448 154.651 58.984C153.883 60.4773 153.499 62.2267 153.499 64.232C153.499 66.1947 153.883 67.944 154.651 69.48C155.462 70.9733 156.528 72.168 157.851 73.064C159.174 73.9173 160.646 74.344 162.267 74.344C163.291 74.344 164.251 74.1733 165.147 73.832C166.086 73.4907 166.918 73.0213 167.643 72.424C168.368 71.8267 168.902 71.144 169.243 70.376L177.627 72.936C176.859 74.6 175.728 76.0933 174.235 77.416C172.784 78.7387 171.056 79.784 169.051 80.552C167.088 81.2773 164.87 81.64 162.395 81.64Z'
                fill='black'
              />
              <path
                d='M214.404 79.2778L203.204 57.9018L191.812 79.2778L182.276 79.2778L198.788 49.7098L198.788 33.8378L207.556 33.8378L207.556 49.8378L224.004 79.2778L214.404 79.2778Z'
                fill='white'
              />
              <path
                d='M214.404 79.2778L211.747 80.6701L212.589 82.2778L214.404 82.2778L214.404 79.2778ZM203.204 57.9018L205.861 56.5095L203.227 51.4808L200.557 56.4909L203.204 57.9018ZM191.812 79.2778L191.812 82.2778L193.613 82.2778L194.46 80.6888L191.812 79.2778ZM182.276 79.2778L179.657 77.8151L177.165 82.2778L182.276 82.2778L182.276 79.2778ZM198.788 49.7098L201.407 51.1725L201.788 50.4907L201.788 49.7098L198.788 49.7098ZM198.788 33.8378L198.788 30.8378L195.788 30.8378L195.788 33.8378L198.788 33.8378ZM207.556 33.8378L210.556 33.8378L210.556 30.8378L207.556 30.8378L207.556 33.8378ZM207.556 49.8378L204.556 49.8378L204.556 50.619L204.937 51.301L207.556 49.8378ZM224.004 79.2778L224.004 82.2778L229.117 82.2778L226.623 77.8146L224.004 79.2778ZM217.061 77.8855L205.861 56.5095L200.547 59.2941L211.747 80.6701L217.061 77.8855ZM200.557 56.4909L189.165 77.8669L194.46 80.6888L205.852 59.3128L200.557 56.4909ZM191.812 76.2778L182.276 76.2778L182.276 82.2778L191.812 82.2778L191.812 76.2778ZM184.895 80.7405L201.407 51.1725L196.169 48.2471L179.657 77.8151L184.895 80.7405ZM201.788 49.7098L201.788 33.8378L195.788 33.8378L195.788 49.7098L201.788 49.7098ZM198.788 36.8378L207.556 36.8378L207.556 30.8378L198.788 30.8378L198.788 36.8378ZM204.556 33.8378L204.556 49.8378L210.556 49.8378L210.556 33.8378L204.556 33.8378ZM204.937 51.301L221.385 80.741L226.623 77.8146L210.175 48.3746L204.937 51.301ZM224.004 76.2778L214.404 76.2778L214.404 82.2778L224.004 82.2778L224.004 76.2778Z'
                fill='black'
              />
              <rect
                x='52'
                y='16'
                width='5'
                height='48'
                rx='2.5'
                transform='rotate(90 52 16)'
                fill='black'
                fill-opacity='0.5'
              />
              <rect
                x='88.0287'
                y='0.594574'
                width='5.18919'
                height='31.1351'
                rx='2.5946'
                transform='rotate(90 88.0287 0.594574)'
                fill='black'
              />
              <rect
                x='126'
                y='16'
                width='5'
                height='30'
                rx='2.5'
                transform='rotate(90 126 16)'
                fill='black'
                fill-opacity='0.5'
              />
              <rect
                x='226'
                y='16'
                width='5'
                height='48'
                rx='2.5'
                transform='rotate(90 226 16)'
                fill='black'
                fill-opacity='0.5'
              />
              <path
                d='M175.541 -1.13413e-07C176.973 -5.0777e-08 178.135 1.16164 178.135 2.5946V2.5946C178.135 4.02755 176.973 5.18919 175.541 5.18919L149.595 5.18919C148.162 5.18919 147 4.02755 147 2.59459V2.59459C147 1.16164 148.162 -1.31018e-06 149.595 -1.24755e-06L175.541 -1.13413e-07Z'
                fill='black'
              />
            </svg>
          </li>
          <li className='hidden lg:block truncate'>
            <a href='#'>New Records</a>
          </li>
          <li className='hidden lg:block'>
            <a href='#'>Discover</a>
          </li>
          <li className='hidden lg:block'>
            <Menu as='div' className='flex gap-1'>
              {({ open }) => (
                <>
                  <Menu.Button className='uppercase underline truncate'>
                    For Artists
                  </Menu.Button>
                  <Menu.Items className='absolute flex flex-col gap-3 mt-7 bg-black w-48 py-3 px-3 text-white text-lg 2xl:text-xl capitalize z-10'>
                    <Menu.Item>
                      <a href='#' className='underline underline-offset-4'>
                        Why MusicY?
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Crowdfunding</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Press & Sell</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Our Services</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Artist Toolkit</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Referral Program</a>
                    </Menu.Item>
                  </Menu.Items>
                  <HiChevronDown
                    className={`w-5 h-5 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </>
              )}
            </Menu>
          </li>
          <li className='hidden lg:block'>
            <Menu as='div' className='flex gap-1'>
              {({ open }) => (
                <>
                  <Menu.Button className='uppercase truncate'>
                    Our Company
                  </Menu.Button>
                  <Menu.Items className='absolute flex flex-col gap-3 mt-7 bg-black w-48 py-3 px-3 text-white text-lg 2xl:text-xl capitalize z-10'>
                    <Menu.Item>
                      <a href='#'>About MusicY</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Careers</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Partners</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Contact</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Artist Toolkit</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='#'>Referral Program</a>
                    </Menu.Item>
                  </Menu.Items>
                  <HiChevronDown
                    className={`w-5 h-5 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </>
              )}
            </Menu>
          </li>
          <li className='ml-auto lg:ml-0'>
            <button aria-label='search'>
              <HiOutlineSearch className='w-5 h-5 sm:w-7 sm:h-7' />
            </button>
          </li>
          <li>
            <button aria-label='cart'>
              <HiOutlineShoppingCart className='w-5 h-5 sm:w-7 sm:h-7' />
            </button>
          </li>
          <li className='hidden text-xs xl:text-base 2xl:text-lg lg:block ml-auto'>
            <a href='#'>Log in</a>
          </li>
          <li className='hidden text-xs xl:text-base 2xl:text-lg lg:flex items-center justify-center bg-black text-white py-3 px-3 xl:px-7 rounded-full'>
            <a href='#'>Make your Own</a>
          </li>
          <li
            onClick={() => setOpenMenu((prev) => !prev)}
            className='ml-3 lg:hidden'
          >
            <button aria-label='menu'>
              <HiOutlineMenu className='w-5 h-5 sm:w-8 sm:h-8' />
            </button>
          </li>
        </ul>

        {openMenu ? (
          <div className='absolute border-t-black pt-10 border-2 flex lg:hidden flex-col left-0 right-0 top-24 bg-white text-black z-10'>
            <ul className='flex flex-col gap-6 mx-5 sm:mx-10 mb-10 text-xl sm:text-3xl font-bold child:uppercase'>
              <li>
                <a href='#'>New Records</a>
              </li>
              <li>
                <a href='#'>Discover</a>
              </li>
              <li>
                <Menu as='div' className='flex flex-col items-start gap-1'>
                  {({ open }) => (
                    <>
                      <div className='flex items-center gap-1'>
                        <Menu.Button className='uppercase'>
                          For Artists
                        </Menu.Button>
                        <HiChevronDown
                          className={`w-5 h-5 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <Menu.Items className='flex flex-col gap-3 py-3 px-3 text-xl sm:text-2xl capitalize'>
                        <Menu.Item>
                          <a href='#' className='underline underline-offset-4'>
                            Why MusicY?
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Crowdfunding</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Press & Sell</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Our Services</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Artist Toolkit</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Referral Program</a>
                        </Menu.Item>
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </li>
              <li>
                <Menu as='div' className='flex flex-col items-start gap-1'>
                  {({ open }) => (
                    <>
                      <div className='flex items-center gap-1'>
                        <Menu.Button className='uppercase'>
                          Our Company
                        </Menu.Button>
                        <HiChevronDown
                          className={`w-5 h-5 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <Menu.Items className='flex flex-col gap-3 py-3 px-3 text-xl sm:text-2xl capitalize'>
                        <Menu.Item>
                          <a href='#'>About MusicY</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Careers</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Partners</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Contact</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Artist Toolkit</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href='#'>Referral Program</a>
                        </Menu.Item>
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </li>
              <ul className='flex gap-5'>
                <li>
                  <a aria-label='Facebook' href='#'>
                    <BsFacebook className='w-5 h-5 sm:w-10 sm:h-10' />
                  </a>
                </li>
                <li>
                  <a aria-label='Instagram' href='#'>
                    <BsInstagram className='w-5 h-5 sm:w-10 sm:h-10' />
                  </a>
                </li>
                <li>
                  <a aria-label='Twitter' href='#'>
                    <BsTwitter className='w-5 h-5 sm:w-10 sm:h-10' />
                  </a>
                </li>
              </ul>
            </ul>
            <div className='mt-auto mx-10 mb-12 font-bold child:uppercase'>
              <a
                href='#'
                className='w-full block text-center p-2 sm:p-4 border-2 border-black rounded-full'
              >
                Log In
              </a>
              <a
                href='#'
                className='w-full block text-center p-2 sm:p-4 mt-5 bg-black text-white border-2 border-black rounded-full'
              >
                Make a Record
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}

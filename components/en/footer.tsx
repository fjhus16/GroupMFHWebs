import Container from '../container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 z-40 absolute botton-0 w-full">
      <Container>
        <div className='flex flex-col'>
          <div className="py-8 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center">
              <Link
                href="/en/contact"
                className="text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-bold py-3 px-10 lg:px-8 transitions-colors duration-200 mb-6 lg:mb-0"
              >
                Contact us
              </Link>
              <Link
                href={`/en/legal`}
                className="text-sm ism:text-md mx-3 font-bold hover:underline"
              >
                Legal info
              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center pb-12'>
            <h3 className=''>Copyright © {(new Date()).getFullYear()} MFH Group</h3>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
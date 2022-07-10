import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // relative -z-20 <-- for blob stuff
    <div id='bork' className='bg-amber-100 min-w-screen min-h-screen text-slate-600 flex flex-col items-center py-4 md:py-8 px-5 space-y-4 text-lg sm:text-xl font-jsans'>
      <Component {...pageProps} />
      <Footer />
      
      {/* <svg className='absolute -z-10 hidden 2xl:block opacity-50 top-100 left-20 h-3/4' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FDE68A" d="M22.2,-30C36.4,-20.3,60.6,-23.9,71.4,-17C82.2,-10.1,79.6,7.5,72.9,22.3C66.2,37.2,55.4,49.3,42.6,60.7C29.8,72,14.9,82.6,2.9,78.6C-9.1,74.7,-18.3,56.2,-28.7,44.1C-39,31.9,-50.6,26.1,-50.3,18.3C-50.1,10.6,-38.1,1.1,-34.1,-11C-30.1,-23.2,-34.1,-37.9,-29.8,-50.8C-25.5,-63.7,-12.7,-74.8,-4.3,-68.8C4,-62.9,8.1,-39.8,22.2,-30Z" transform="translate(100 100)" />
      </svg>
      <svg className='absolute -z-10 hidden 2xl:block opacity-50 top-0 right-80 h-3/5' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fde68a" d="M44.2,-28.2C49.5,-16.4,40.6,1,30.8,22.2C21.1,43.4,10.6,68.6,-6.2,72.1C-22.9,75.7,-45.8,57.7,-51.1,39C-56.4,20.3,-44.1,1,-32.6,-14.4C-21.2,-29.8,-10.6,-41.3,4.4,-43.9C19.4,-46.4,38.9,-40.1,44.2,-28.2Z" transform="translate(100 100)" />
      </svg>
      <svg
        className='absolute -z-10 hidden 2xl:block opacity-50 bottom-0 right-40 h-1/2' 
        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FDE68A" d="M35.8,-29.7C45.4,-26.3,51.4,-13.1,55.9,4.5C60.5,22.2,63.6,44.5,54,51.5C44.5,58.6,22.2,50.5,6.5,44C-9.2,37.5,-18.4,32.5,-26.9,25.5C-35.4,18.4,-43.3,9.2,-45.9,-2.7C-48.6,-14.5,-46.1,-29.1,-37.6,-32.5C-29.1,-36,-14.5,-28.3,-0.7,-27.6C13.1,-27,26.3,-33.2,35.8,-29.7Z" transform="translate(100 100)" />
      </svg> */}

      
    </div>    

  );
}

export default MyApp;

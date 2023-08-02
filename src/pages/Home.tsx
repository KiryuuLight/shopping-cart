import { Link } from 'react-router-dom';
import personSvg from '../assets/shopping_model.png';
import shapeSvg from '../assets/shape.svg';
import arrowIcon from '../assets/arrow.svg';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import Section from '../components/Section';

function Home() {
  return (
    <>
      <section className="lg:flex">
        <div className="flex flex-col  justify-center gap-2.5 border-b-2 border-black bg-[#C790FF] px-12  py-4 lg:w-6/12">
          <div className="flex flex-col items-center px-4 py-4">
            <p className="w-2/4 py-8 text-center text-4xl font-semibold lg:w-full lg:text-start lg:text-4xl xl:text-5xl">
              The magic of the{' '}
              <span className="animate-enter-hero-text text-[#2A14B6]">
                unexpected
              </span>{' '}
              awaits you at every turn
            </p>
            <p className="text-base font-medium lg:text-xl">
              For those who appreciate art, creativity and artisanal talent, our
              store is the paradise you&apos;ve been waiting for. Discover a
              special corner full of handmade products made with love and
              dedication, each one telling a unique and charming story.
            </p>
          </div>

          <div className="flex justify-center px-4 py-4 lg:justify-start">
            <Link
              to="products"
              className=" flex w-full items-center justify-center gap-2 rounded-md border border-black bg-[#FD9B08] px-5 py-2.5 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neoHover lg:w-6/12"
            >
              <p className="lg:text-xl">Shop Now</p>
              <img src={arrowIcon} alt="" className="w-7" />
            </Link>
          </div>
        </div>

        <div className="border-b-2 border-black bg-[#F6E44B] lg:w-6/12 lg:border-l-2 lg:border-black">
          <div className="py-4">
            <p className="animate-enter-text text-center text-2xl lg:text-4xl">
              Buy Smart
            </p>
            <p className="animate-enter-text-second text-center text-2xl lg:text-4xl">
              Buy on <span className="italic">FakeStore</span>
            </p>
          </div>

          <div className="relative flex justify-center ">
            <img src={personSvg} alt="" className="z-10 animate-enter-image" />
            <img
              src={shapeSvg}
              alt=""
              className="absolute inset-0 z-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <p className="w-2/4 py-16 text-center text-4xl font-semibold lg:w-full lg:text-4xl ">
          What our costumers are saying
        </p>

        <div className="flex flex-col lg:flex-row">
          <Section img={avatar1} personName="John" />
          <Section img={avatar2} personName="Felix" />
          <Section img={avatar3} personName="Michael" />
        </div>
      </section>
    </>
  );
}

export default Home;

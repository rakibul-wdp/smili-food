import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Support from '../components/home/Support';
import Testimonial from '../components/home/Testimonial';
import Versatile from '../components/home/Versatile';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Versatile />
      <Support />
      <Testimonial />
    </div>
  )
}

export default Home;
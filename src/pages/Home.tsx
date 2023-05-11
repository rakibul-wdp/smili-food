import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Support from '../components/home/Support';
import Versatile from '../components/home/Versatile';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Versatile />
      <Support />
    </div>
  )
}

export default Home;
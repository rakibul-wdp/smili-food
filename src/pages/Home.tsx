import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Versatile from '../components/home/Versatile';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Versatile />
    </div>
  )
}

export default Home;
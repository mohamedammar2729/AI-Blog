
import Bloglist from '../components/Bloglist';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Bloglist />
     <Newsletter />
     <Footer />
    </>
  );
};

export default Home;

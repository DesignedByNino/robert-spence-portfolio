import HelloWorld from "../components/hello-world";
import HeroCenterContent from "../components/hero-center-content";
import MainNav from "../components/main-nav";

export default function Home() {
  return (
    <div className='app'>
      <MainNav />
      <HeroCenterContent />
    </div>
  );
}

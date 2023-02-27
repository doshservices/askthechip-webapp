import { Header } from "../components/home/header";
import { Posts } from "../components/home/feed/posts";
import { Share } from "../components/home/share/share";
import  Navbar  from "../components/NavHome";
import { Search } from "../components/home/search/search";
import ServiceProviders from "../components/home/serviceProviders/explore";

const HomePage = () => {
  return (
    <section className="flex justify-between">
      <Navbar />
      <div className="grow">
        <Header />
        <Share />
        <Posts />
      </div>
      <div className="grow">
        <Search />
        <ServiceProviders />
      </div>
    </section>
  );
};
export default HomePage;

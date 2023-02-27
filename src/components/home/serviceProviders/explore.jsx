import blogImg from "../../../assets/blog-img.svg";

const ServiceProviders = () => {
  return (
    <section>
      <h2>Explore Service Providers</h2>
      <section>
        <div className="flex space-between items-center">
          <div>
            <p>Business Consultanncy</p>
            <p>Business Consulting group</p>
            <p>Rated by 100 people</p>
          </div>
          <img src={blogImg} alt="blog" className="h-[3rem]" />
        </div>
        <div className="flex space-between items-center">
          <div>
            <p>Business Consultanncy</p>
            <p>Business Consulting group</p>
            <p>Rated by 100 people</p>
          </div>
          <img src={blogImg} alt="blog" className="h-[3rem]" />
        </div>
        <div className="flex space-between items-center">
          <div>
            <p>Business Consultanncy</p>
            <p>Business Consulting group</p>
            <p>Rated by 100 people</p>
          </div>
          <img src={blogImg} alt="blog" className="h-[3rem]" />
        </div>
      </section>
    </section>
  );
};

export default ServiceProviders;

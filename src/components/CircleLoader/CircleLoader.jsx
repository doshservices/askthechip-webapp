import { CirclesWithBar } from 'react-loader-spinner';
import { logo } from '../Navbar';
const Loader = ({ color = '#ffffff' }) => {
  return (
    <div className="flex h-fit justify-center items-center page-loader relative">
      <img src={logo} alt="" className='absolute max-h-[50px]' />
      <CirclesWithBar
        height="100"
        width="100"
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};
export default Loader;

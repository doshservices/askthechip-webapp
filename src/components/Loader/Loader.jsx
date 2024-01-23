import { ThreeDots } from 'react-loader-spinner';
const Loader = ({ color = '#ffffff', width = "70", height = "24" }) => {
  return (
    <div className="flex h-fit justify-center items-center page-loader relative">
      {/* <img src={logo} alt="" className='absolute max-h-[50px]' /> */}
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export const GreenLoader = ({
  color = '#068978', width = "70", height = "24" }) => {
  return (
    <div className="flex h-fit justify-center items-center page-loader relative mt-2">
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

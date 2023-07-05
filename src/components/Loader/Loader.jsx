import { ThreeDots } from 'react-loader-spinner';
const Loader = ({ color = '#ffffff', width="70", height="24" }) => {
  return (
    <div className="flex h-fit justify-center items-center">
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

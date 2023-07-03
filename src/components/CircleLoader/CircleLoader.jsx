import { CirclesWithBar } from 'react-loader-spinner';
const Loader = ({ color = '#ffffff' }) => {
  return (
    <div className="flex h-fit justify-center items-center">
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

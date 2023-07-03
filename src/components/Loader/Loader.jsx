import { ThreeDots } from 'react-loader-spinner';
const Loader = ({ color = '#ffffff' }) => {
  return (
    <div className="flex h-fit justify-center items-center">
      <ThreeDots
        height="24"
        width="70"
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

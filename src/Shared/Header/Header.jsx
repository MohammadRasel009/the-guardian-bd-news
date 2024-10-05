
import moment from 'moment';
const Header = () => {
  return (
    <div>
      <div>
        <h1 className=" text-7xl m-4 font-bold ">The Guardian BD News</h1>
      </div>
      <div>
        <p className=" text-4xl center"> Always We Are With The Truth</p>
        <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
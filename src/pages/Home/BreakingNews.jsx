
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="brn btn-ghost"> Breaking News : </button>
      <Marquee pauseOnHover={true} speed={80}>
            <Link className="mr-12"  to="/">
                  I can see a nice component, multiple React .....
            </Link>
            <Link className="mr-12"  to="/">
                  I can see a nice component, multiple React .....
            </Link>
            <Link className="mr-12"  to="/">
                  I can see a nice component, multiple React .....
            </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
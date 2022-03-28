import React from "react";
import "./Pagination.scss";
import { Link } from "react-router-dom";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <>
      <div id="paginationFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            {/* <div>
              <Link to="monkhey" className="view_agents">
                View All Agents
              </Link>
            </div> */}
            <div className="pagination">
              <ul>
                <li>
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
                <li>
                  <Link to="#">5</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;

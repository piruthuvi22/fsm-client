import React from "react";
import * as Md from "react-icons/md";
import * as Rx from "react-icons/rx";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="container-fluid mt-4">
        {/* Job status */}
        <h5 className="fw-semibold my-3">Job status</h5>
        <div className="row row-cols-4 g-4">
          {/* 1 */}
          <div className="col">
            <Link to={"/tasks"} className="text-decoration-none">
              <div className={`card border- bg-light p-3`}>
                <div className="card-image">
                  <Md.MdOutlineTask className="icon" />
                </div>

                <div className="card-body">
                  <h3 className="card-title text-secondary">On progress</h3>
                  <h1 className="card-title text-black-50 fw-bold">
                    <CountUp
                      start={0}
                      end={53}
                      duration={2.75}
                      delay={1.2}
                      separator=","

                      // decimals={0}
                      // decimal="."
                      // prefix=""
                      // suffix=""
                      // onEnd={() => console.log("Ended!")}
                      // onStart={() => console.log("Started!")}
                    />
                  </h1>
                  <div className="card-text">
                    {/* <button className="btn btn-sm btn-primary me-1">Button</button>
                <button className="btn btn-sm btn-success ms-1">Button</button> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 2 */}
          <div className="col">
            <Link to={"/tasks"} className="text-decoration-none">
              <div className={`card border- bg-light p-3`}>
                <div className="card-image">
                  <Md.MdPendingActions className="icon" />
                </div>

                <div className="card-body">
                  <h3 className="card-title text-secondary">Pending jobs</h3>
                  <h1 className="card-title text-black-50 fw-bold">
                    <CountUp
                      start={0}
                      end={23}
                      duration={2.75}
                      delay={1.2}
                      separator=","
                    />
                  </h1>
                  <div className="card-text">
                    {/* <button className="btn btn-sm btn-primary me-1">Button</button>
                <button className="btn btn-sm btn-success ms-1">Button</button> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 3 */}
          <div className="col">
            <Link to={"/tasks"} className="text-decoration-none">
              <div className={`card border- bg-light p-3`}>
                <div className="card-image">
                  <Rx.RxCounterClockwiseClock className="icon" />
                </div>

                <div className="card-body">
                  <h3 className="card-title text-secondary">Overdue jobs</h3>
                  <h1 className="card-title text-black-50 fw-bold">
                    <CountUp
                      start={0}
                      end={8}
                      duration={2.75}
                      delay={1.2}
                      separator=","
                    />
                  </h1>
                  <div className="card-text">
                    {/* <button className="btn btn-sm btn-primary me-1">Button</button>
                <button className="btn btn-sm btn-success ms-1">Button</button> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 4 */}
          <div className="col">
            <Link to={"/tasks"} className="text-decoration-none">
              <div className={`card border- bg-light p-3`}>
                <div className="card-image">
                  <Md.MdDoneAll className="icon" />
                </div>

                <div className="card-body">
                  <h3 className="card-title text-secondary">Completed jobs</h3>
                  <h1 className="card-title text-black-50 fw-bold">
                    <CountUp
                      start={0}
                      end={157}
                      duration={2.75}
                      delay={1.2}
                      separator=","
                    />
                  </h1>
                  <div className="card-text">
                    {/* <button className="btn btn-sm btn-primary me-1">Button</button>
                <button className="btn btn-sm btn-success ms-1">Button</button> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Resource mget */}
        <h5 className="fw-semibold my-3">Resources</h5>
        <div className="row row-cols-3 g-4">
          {/* 1 */}
          <div className="col">
            <div className={`card border- bg-light p-1`}>
              <div className="card-image-vector">
                {/* <Md.MdOutlineTask className="icon" /> */}
                <img src="/Maintenance2.gif" className="vector" />
              </div>

              <div className="card-body">
                <h3 className="card-title text-secondary">Resources</h3>

                {/* <div className="card-subtitle small">
                  Lorem ipsum dolor sit amet consectetur
                </div> */}
                <Link className="card-link" to="/resources">
                  Tools
                </Link>
                <Link className="card-link" to="/resources">
                  Vehicles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

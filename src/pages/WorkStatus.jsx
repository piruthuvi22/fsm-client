import React, { useState } from "react";
import * as Md from "react-icons/md";
import ImageGallery from "../components/imagegallery";
const WorkStatus = () => {
  return (
    <div className="workstatus-wrapper">
      <div className="status-header py-3 px-md-3">
        <div className="container-md">
          <div className="row m-0 justify-content-between align-items-center g-2">
            <div className="col-12 col-md-8 p-0">
              <div className="row m-0 flex-nowrap justify-content-between overflow-auto py-2">
                <div className="col-5 col-md-3">
                  <h4 className="text-dark">Task ID</h4>
                  <span className="text-secondary">T1024</span>
                </div>
                <div className="col-5 col-md-3">
                  <h4 className="text-dark">Agent</h4>
                  <span className="text-secondary">A1748 - Piruthuvi</span>
                </div>
                <div className="col-5 col-md-3">
                  <h4 className="text-dark">Due date</h4>
                  <span className="text-secondary">30 Mar 2023</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-end p-0">
              <button className="btn btn-danger mx-1">
                Re assign
                <Md.MdPersonAdd className="icon ms-1" />
              </button>
              <button className="btn btn-primary mx-1">
                Contact supervisor
                <Md.MdChat className="icon ms-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md mt-3">
        <h4 className="text-dark">Task description</h4>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          maiores optio at molestiae et nam, sunt culpa accusamus? Cum ut ex
          quam, atque vel consectetur rerum eligendi aliquam, amet, eaque
          quaerat sapiente alias neque laboriosam minus quasi omnis sint
          laudantium quia suscipit vero mollitia cupiditate deserunt! Error
          nesciunt non quod velit eligendi odio officiis illum facere sequi
          minus, quas rem suscipit eius. Amet totam molestiae numquam minus iure
          deserunt maiores atque adipisci voluptate, iste eius consequuntur
          placeat quae, est earum.
        </p>
        <hr />

        <div className="row m-0 align-items-start mt-5">
          <div
            className="nav col-12 col-sm-2 flex-column nav-pills"
            id="v-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active bg-light my-2"
              id="v-note-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-note"
              type="button"
              role="tab"
              aria-controls="v-note"
              aria-selected="true"
            >
              Note
            </button>
            <button
              className="nav-link  bg-light my-2"
              id="v-audio-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-audio"
              type="button"
              role="tab"
              aria-controls="v-audio"
              aria-selected="false"
            >
              Audio
            </button>

            <button
              className="nav-link  bg-light my-2"
              id="v-image-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-image"
              type="button"
              role="tab"
              aria-controls="v-image"
              aria-selected="false"
            >
              Images
            </button>
          </div>
          <div className="tab-content col-12 col-sm-10 my-2" id="v-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-note"
              role="tabpanel"
              aria-labelledby="v-note-tab"
              tabIndex="0"
            >
              <h2 className="text-muted">Text Notes</h2>
              <ul className="list-group list-group-flush mt-3">
                {[0, 1, 2, 3, 4, 5].map((element, i) => (
                  <li class="border-bottom row m-0 justify-content-between align-items-center px-0">
                    <p className="col-12 col-md-10 p-0 text-note">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti fugit, exercitationem atque, cupiditate, vero
                      praesentium dignissimos fuga ipsa eos facere non.
                      Similique ad ullam dignissimos corrupti quia mollitia
                      sapiente voluptas?
                    </p>
                    <span className="col-12 col-md-2 text-secondary small text-end p-0">
                      18 Feb 2023
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="tab-pane fade"
              id="v-audio"
              role="tabpanel"
              aria-labelledby="v-audio-tab"
              tabIndex="0"
            >
              <h2 className="text-muted">Audio Notes</h2>
              <ul className="list-group list-group-flush mt-3">
                {[0, 1, 2, 3, 4].map((element, i) => (
                  <li class="border-bottom row m-0 justify-content-between align-items-center px-0">
                    <div className="col-12 col-md-10 p-0 text-note">
                      <audio className="p-1 w-75" controls loop>
                        <source src="" type="audio/mpeg" />
                      </audio>
                    </div>
                    <span className="col-12 col-md-2 text-secondary small text-end p-0">
                      18 Feb 2023
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="tab-pane fade"
              id="v-image"
              role="tabpanel"
              aria-labelledby="v-image-tab"
              tabIndex="0"
            >
              <h2 className="text-muted">Image Notes</h2>
              <div className="row row-cols-3 g-3">
                <ImageGallery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;

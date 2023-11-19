import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div>
      <div id="wrapper" className="theme-cyan">
        <DashboardSidebar></DashboardSidebar>

        {/* mani page content body part */}
        <div id="main-content">
          <div className="container-fluid">
            <div className="block-header">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h2>Project Board</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa fa-dashboard" />
                      </a>
                    </li>
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active">Project Board</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="d-flex flex-row-reverse">
                    <div className="page_action">
                      <button type="button" className="btn btn-primary">
                        <i className="fa fa-download" /> Download report
                      </button>
                      <button type="button" className="btn btn-secondary">
                        <i className="fa fa-send" /> Send report
                      </button>
                    </div>
                    <div className="p-2 d-flex"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row clearfix">
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>Project List</h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        />
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="javascript:void(0);">Action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Another Action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Something else</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="body project_report">
                    <div className="table-responsive">
                      <table className="table table-hover js-basic-example dataTable table-custom mb-0">
                        <thead>
                          <tr>
                            <th>Project</th>
                            <th>Deadline</th>
                            <th>Prograss</th>
                            <th>Lead</th>
                            <th>Team</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="project-title">
                              <h6>InfiniO 4.1</h6>
                              <small>Created 14 July, 2020</small>
                            </td>
                            <td>8 Aug, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={48}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "48%" }}
                                />
                              </div>
                              <small>Completion with: 48%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar1.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                    alt="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-success">
                                Active
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>Many desktop publishing packages and web</h6>
                              <small>Created 18 July, 2020</small>
                            </td>
                            <td>18 Aug, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={78}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "78%" }}
                                />
                              </div>
                              <small>Completion with: 78%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar2.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar10.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar7.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar5.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-success">
                                Active
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>iNext - One Page Responsive Template</h6>
                              <small>Created 14 July, 2020</small>
                            </td>
                            <td>22 Aug, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar l-slategray"
                                  role="progressbar"
                                  aria-valuenow={29}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "29%" }}
                                />
                              </div>
                              <small>Completion with: 29%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar3.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-default">
                                InActive
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>Massive Event - Conference and Event</h6>
                              <small>Created 18 July, 2020</small>
                            </td>
                            <td>25 Sept, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <small>Completion with: 100%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar3.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar10.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar7.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar5.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-danger">Closed</span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>Oakleaf Admin - Bootstrap html5 with SASS</h6>
                              <small>Created 18 July, 2020</small>
                            </td>
                            <td>29 Aug, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={13}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "13%" }}
                                />
                              </div>
                              <small>Completion with: 13%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar1.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar7.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-success">
                                Active
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>InfiniO 4.1</h6>
                              <small>Created 14 July, 2020</small>
                            </td>
                            <td>05 Sept, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={48}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "48%" }}
                                />
                              </div>
                              <small>Completion with: 48%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar5.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-success">
                                Active
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>Many desktop publishing packages and web</h6>
                              <small>Created 18 July, 2020</small>
                            </td>
                            <td>15 Sept, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={78}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "78%" }}
                                />
                              </div>
                              <small>Completion with: 78%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar6.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar10.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar7.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar5.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-success">
                                Active
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>InfiniO 4.2</h6>
                              <small>Created 14 July, 2020</small>
                            </td>
                            <td>25 Sept, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-warning"
                                  role="progressbar"
                                  aria-valuenow={48}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "48%" }}
                                />
                              </div>
                              <small>Completion with: 48%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar2.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar2.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="project-title">
                              <h6>
                                Startup - OnePage Business Corporate Template
                              </h6>
                              <small>Created 14 July, 2020</small>
                            </td>
                            <td>26 Sept, 2020</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-warning"
                                  role="progressbar"
                                  aria-valuenow={56}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "56%" }}
                                />
                              </div>
                              <small>Completion with: 56%</small>
                            </td>
                            <td>
                              <img
                                src="assets/images/xs/avatar8.jpg"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Team Lead"
                                alt="Avatar"
                                className="width35 rounded"
                              />
                            </td>
                            <td>
                              <ul className="list-unstyled team-info">
                                <li>
                                  <img
                                    src="assets/images/xs/avatar3.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar1.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar5.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/xs/avatar9.jpg"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Avatar"
                                  />
                                </li>
                              </ul>
                            </td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td className="project-actions">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-primary"
                              >
                                <i className="icon-eye" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-success"
                              >
                                <i className="icon-pencil" />
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="btn btn-sm btn-outline-danger js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="icon-trash" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

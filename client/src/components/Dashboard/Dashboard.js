import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/_dashboard.scss';

const Dashboard = props => {
	
  return (
    <Fragment>
		
    <section className='section-home container-fluid'>
	<div className="main">
			<div className="main-content">
					<div className="panel panel-headline">
						<div className="panel-heading">
							<h3 className="panel-title">Weekly Overview</h3>
							<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
						</div>
						<div className="panel-body">
							<div className="row">
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-download"></i></span>
										<p>
											<span className="number">1,252</span>
											<span className="title">Downloads</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-shopping-bag"></i></span>
										<p>
											<span className="number">203</span>
											<span className="title">Sales</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-eye"></i></span>
										<p>
											<span className="number">274,678</span>
											<span className="title">Visits</span>
										</p>
									</div>
								</div>
								<div className="col-md-3">
									<div className="metric">
										<span className="icon"><i className="fa fa-bar-chart"></i></span>
										<p>
											<span className="number">35%</span>
											<span className="title">Conversions</span>
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-9">
									<div id="headline-chart" className="ct-chart"></div>
								</div>
								<div className="col-md-3">
									<div className="weekly-summary text-right">
										<span className="number">2,315</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 12%</span>
										<span className="info-label">Total Sales</span>
									</div>
									<div className="weekly-summary text-right">
										<span className="number">$5,758</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 23%</span>
										<span className="info-label">Monthly Income</span>
									</div>
									<div className="weekly-summary text-right">
										<span className="number">$65,938</span> <span className="percentage"><i className="fa fa-caret-down text-danger"></i> 8%</span>
										<span className="info-label">Total Income</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">Recent Purchases</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body no-padding">
									<table className="table table-striped">
										<thead>
											<tr>
												<th>Order No.</th>
												<th>Name</th>
												<th>Amount</th>
												<th>Date &amp; Time</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><a href="#">763648</a></td>
												<td>Steve</td>
												<td>$122</td>
												<td>Oct 21, 2016</td>
												<td><span className="label label-success">COMPLETED</span></td>
											</tr>
											<tr>
												<td><a href="#">763649</a></td>
												<td>Amber</td>
												<td>$62</td>
												<td>Oct 21, 2016</td>
												<td><span className="label label-warning">PENDING</span></td>
											</tr>
											<tr>
												<td><a href="#">763650</a></td>
												<td>Michael</td>
												<td>$34</td>
												<td>Oct 18, 2016</td>
												<td><span className="label label-danger">FAILED</span></td>
											</tr>
											<tr>
												<td><a href="#">763651</a></td>
												<td>Roger</td>
												<td>$186</td>
												<td>Oct 17, 2016</td>
												<td><span className="label label-success">SUCCESS</span></td>
											</tr>
											<tr>
												<td><a href="#">763652</a></td>
												<td>Smith</td>
												<td>$362</td>
												<td>Oct 16, 2016</td>
												<td><span className="label label-success">SUCCESS</span></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="panel-footer">
									<div className="row">
										<div className="col-md-6"><span className="panel-note"><i className="fa fa-clock-o"></i> Last 24 hours</span></div>
										<div className="col-md-6 text-right"><a href="#" className="btn btn-primary">View All Purchases</a></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">Projection vs. Realization</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<div id="visits-trends-chart" className="ct-chart"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">To-Do List</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<ul className="list-unstylesd todo-list">
										<li>
											<label className="control-inline fancy-checkbox">
												<input type="checkbox"/><span></span>
											</label>
											<p>
												<span className="title">Restart Server</span>
												<span className="short-description">Dynamically integrate client-centric technologies without cooperative resources.</span>
												<span className="date">Oct 9, 2016</span>
											</p>
											<div className="controls">
												<a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
											</div>
										</li>
										<li>
											<label className="control-inline fancy-checkbox">
												<input type="checkbox"/><span></span>
											</label>
											<p>
												<span className="title">Retest Upload Scenario</span>
												<span className="short-description">Compellingly implement clicks-and-mortar relationships without highly efficient metrics.</span>
												<span className="date">Oct 23, 2016</span>
											</p>
											<div className="controls">
												<a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
											</div>
										</li>
										<li>
											<label className="control-inline fancy-checkbox">
												<input type="checkbox"/><span></span>
											</label>
											<p>
												<strong>Functional Spec Meeting</strong>
												<span className="short-description">Monotonectally formulate client-focused core competencies after parallel web-readiness.</span>
												<span className="date">Oct 11, 2016</span>
											</p>
											<div className="controls">
												<a href="#"><i className="icon-software icon-software-pencil"></i></a> <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="panel panel-scrolling">
								<div className="panel-heading">
									<h3 className="panel-title">Recent User Activity</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<ul className="list-unstylesd activity-list">
										<li>
											<img src="assets/img/user1.png" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Michael</a> has achieved 80% of his completed tasks <span className="timestamp">20 minutes ago</span></p>
										</li>
										<li>
											<img src="assets/img/user2.png" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Daniel</a> has been added as a team member to project <a href="#">System Update</a> <span className="timestamp">Yesterday</span></p>
										</li>
										<li>
											<img src="assets/img/user3.png" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Martha</a> created a new heatmap view <a href="#">Landing Page</a> <span className="timestamp">2 days ago</span></p>
										</li>
										<li>
											<img src="assets/img/user4.png" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Jane</a> has completed all of the tasks <span className="timestamp">2 days ago</span></p>
										</li>
										<li>
											<img src="assets/img/user5.png" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Jason</a> started a discussion about <a href="#">Weekly Meeting</a> <span className="timestamp">3 days ago</span></p>
										</li>
									</ul>
									<button type="button" className="btn btn-primary btn-bottom center-block">Load More</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">My Tasks</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<ul className="list-unstylesd task-list">
										<li>
											<p>Updating Users Settings <span className="label-percent">23%</span></p>
											<div className="progress progress-xs">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" styles="width:23%">
													<span className="sr-only">23% Complete</span>
												</div>
											</div>
										</li>
										<li>
											<p>Load &amp; Stress Test <span className="label-percent">80%</span></p>
											<div className="progress progress-xs">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" styles="width: 80%">
													<span className="sr-only">80% Complete</span>
												</div>
											</div>
										</li>
										<li>
											<p>Data Duplication Check <span className="label-percent">100%</span></p>
											<div className="progress progress-xs">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" styles="width: 100%">
													<span className="sr-only">Success</span>
												</div>
											</div>
										</li>
										<li>
											<p>Server Check <span className="label-percent">45%</span></p>
											<div className="progress progress-xs">
												<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" styles="width: 45%">
													<span className="sr-only">45% Complete</span>
												</div>
											</div>
										</li>
										<li>
											<p>Mobile App Development <span className="label-percent">10%</span></p>
											<div className="progress progress-xs">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" styles="width: 10%">
													<span className="sr-only">10% Complete</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">Website Visits</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<div id="visits-chart" className="ct-chart"></div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="panel">
								<div className="panel-heading">
									<h3 className="panel-title">System Load</h3>
									<div className="right">
										<button type="button" className="btn-toggle-collapse"><i className="lnr lnr-chevron-up"></i></button>
										<button type="button" className="btn-remove"><i className="lnr lnr-cross"></i></button>
									</div>
								</div>
								<div className="panel-body">
									<div id="system-load" className="easy-pie-chart" data-percent="70">
										<span className="percent">70</span>
									</div>
									<h4>CPU Load</h4>
									<ul className="list-unstylesd list-justify">
										<li>High: <span>95%</span></li>
										<li>Average: <span>87%</span></li>
										<li>Low: <span>20%</span></li>
										<li>Threads: <span>996</span></li>
										<li>Processes: <span>259</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

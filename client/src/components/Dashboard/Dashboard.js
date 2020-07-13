import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/_dashboard.scss'
const Dashboard = props => {
  return (
    <Fragment>
		<div id="sidebar-nav" className="sidebar">
			<div className="sidebar-scroll">
				<nav>
					<ul className="nav">
						<li><a href="#" className="active"><i className="lnr lnr-home"></i> <span>Dashboard</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-code"></i> <span>Elements</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-chart-bars"></i> <span>Charts</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-cog"></i> <span>Panels</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-alarm"></i> <span>Notifications</span></a></li>
						<li>
							<a href="#" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty"></i> <span>Pages</span> <i className="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages" className="collapse ">
								<ul className="nav">
									<li><a href="#" className="">Profile</a></li>
									<li><a href="#" className="">Login</a></li>
									<li><a href="#" className="">Lockscreen</a></li>
								</ul>
							</div>
						</li>
						<li><a href="#" className=""><i className="lnr lnr-dice"></i> <span>Tables</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-text-format"></i> <span>Typography</span></a></li>
						<li><a href="#" className=""><i className="lnr lnr-linearicons"></i> <span>Icons</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
    <Container>
		<div className="main">
			<div className="main-content">
				<div className="container-fluid">
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
									<ul className="list-unstyled todo-list">
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
									<ul className="list-unstyled activity-list">
										<li>
											<img src="" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Michael</a> has achieved 80% of his completed tasks <span className="timestamp">20 minutes ago</span></p>
										</li>
										<li>
											<img src="" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Daniel</a> has been added as a team member to project <a href="#">System Update</a> <span className="timestamp">Yesterday</span></p>
										</li>
										<li>
											<img src="" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Martha</a> created a new heatmap view <a href="#">Landing Page</a> <span className="timestamp">2 days ago</span></p>
										</li>
										<li>
											<img src="" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Jane</a> has completed all of the tasks <span className="timestamp">2 days ago</span></p>
										</li>
										<li>
											<img src="" alt="Avatar" className="img-circle pull-left avatar"/>
											<p><a href="#">Jason</a> started a discussion about <a href="#">Weekly Meeting</a> <span className="timestamp">3 days ago</span></p>
										</li>
									</ul>
									<button type="button" className="btn btn-primary btn-bottom center-block">Load More</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						
					</div>
				</div>
			</div>
		</div>
      </Container>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

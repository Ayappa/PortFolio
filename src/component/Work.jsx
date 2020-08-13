import React from "react";

const Work = () => {
	return (
		<div className='container' style={{ marginBottom: "10%" }}>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-lg-12 col-s-12'>
					<div className='col-lg-9 col-s-12'>
						<h2>Fountain Finance</h2>
						<p>SAN FRANCISCO, California</p>
					</div>
					<div className='col-lg-3 col-s-12 '>
						<div className='float-left '>
							<div>
								<h5>Internship</h5>
							</div>

							<p>June 2020 - September 2020</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>Software Developer (Python)</h5>
					<p class='card-text'>
						<ul>
							<li>
								Built dynamic and Custom strategies using data sets from yahoo
								finance and input filters from users.
							</li>
							<li>
								Recommended buying and selling of stocks based on key
								performance indicators.
							</li>

							<li>
								Contributed towards optimizing the code which reduced the total
								hours of work time by nearly 160 hours.
							</li>
						</ul>
					</p>
				</div>
			</div>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-lg-12 col-s-12'>
					<div className='col-lg-9 col-s-12'>
						<h2>Accenture</h2>
						<p>Bangalore, India</p>
					</div>
					<div className='col-lg-3 col-s-12 '>
						<div className='float-left '>
							<div>
								<h5>Full Time</h5>
							</div>

							<p>August 2019 - December 2019</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>
						{" "}
						Associate Software Engineer (Java, Spring, Sql)
					</h5>
					<p class='card-text'>
						<ul>
							<li>
								Built web application using spring with agile methodology in
								development and mvc pattern.
							</li>
							<li>
								which includes core concepts of Inversion of control ,
								Dependencies Injection, Spring annotations, JDBC, XML
								configuration, filters, Spring JPA, Authentication and
								Authorization using JSON web tokens.
							</li>
						</ul>
					</p>
				</div>
			</div>
			<div
				class='card text-white  mb-3'
				style={{
					marginTop: "2%",
					backgroundColor: "#566573",
				}}
			>
				<div class='card-header row col-lg-12 col-s-12'>
					<div className='col-lg-9 col-s-12'>
						<h2>Sri Manjunatha Retailers</h2>
						<p>Bangalore, India</p>
					</div>
					<div className='col-lg-3 col-s-12 '>
						<div className='float-left '>
							<div>
								<h5>Internship</h5>
							</div>

							<p>June 2017 - July 2018</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>Software Developer (React, Node, Js)</h5>
					<p class='card-text'>
						<ul>
							<li>
								Build web Apps for real estate, So customers can view
								properties, and contact the agents with messaging features.
							</li>
							<li>Allow owners to post adds on the website .</li>
							<li>
								Front end was react using hooks to handle app level state , back
								end node as rest API, authentication and authorization using
								JSON web tokens .{" "}
							</li>
							<li>
								{" "}
								Firebase as data store for storing images and notification of
								messages.
							</li>
							<li>
								Successfully increased the inflow of customers which in turn
								contributed towards the revenue of the company by 25%.
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;

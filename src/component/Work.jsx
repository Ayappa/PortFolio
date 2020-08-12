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
								Build dynamic strategies using data set from yahoo finance{" "}
							</li>
							<li>
								Calculate sell or buy of stocks by calculating various index
								using tablib library in dynamic strategies{" "}
							</li>

							<li>
								Building Custom strategies to calculate sell or buy of
								strategies using various index and dataset using python
							</li>
							<li>
								Using users input filters from customers to calculate strategies{" "}
							</li>
							<li>
								By creating Dynamic stratiges, application have saved nearly
								160hours of work time otherwise had to code for every indicators available in the
								market and with help of custom stratiges it helps application to
								make money as it has standard stratiges to measure metrics and calculate buy or
								sell of stock.
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
							<li>Build web app using spring</li>
							<li>
								which includes core concepts of Inversion of control ,
								Dependencies Injection, Spring annotations, JDBC, XML
								configuration, filters, Spring JPA, Authentication and
								Authorization using JSON web tokens.
							</li>
							<li>
								Using Agile methodology in development and mvc pattern, as
								saved 100hours of work time as it is easy to deburg and improvise the
								requirements on the fly.
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
								Creating single page application allowed reuse of components and
								saved nearly 80hours of work time. With simple innterface allowed
								customers to use application with ease.
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;

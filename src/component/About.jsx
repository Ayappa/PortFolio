import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Dp from "../assets/dp.jpeg";
const About = () => {
	useEffect(() => {
		window.$("#div").ready(function () {
			if (window.innerWidth < 500) {
				window.$("#text").css({ fontSize: "15px" });
			} else {
				window.$("#text").css({ fontSize: "20px" });
			}
		});
	}, []);
	return (
		<div
			className='container col-s-12 col-lg-12'
			style={{ overflowX: "hidden" }}
			id='div'
		>
			<div
				className=' col-m-12 col-lg-6 text-center'
				style={{
					float: "left",
				}}
			>
				<Fade left>
					<h1>Ayappa Krishnappa</h1>
					<img
						src={Dp}
						className='rounded-circle '
						alt='Cinque Terre'
						width='40%'
						height='40%'
						style={{ margin: "2%" }}
					></img>
					<h4 style={{ color: "#566573" }}>
						Masters in Computer Science
						<br />
						At University of North Carolina
					</h4>
				</Fade>
			</div>
			<br></br> <br></br>
			<div
				className='col-m-12 col-lg-6'
				style={{
					float: "right",
					alignItems: "center",
					marginBottom: "20%",
				}}
			>
				<Fade right>
					<h5
						id='text'
						style={{
							marginTop: "5%",
							backgroundColor: "white",
						}}
					>
						<span
							style={{
								color: "#903",
								float: "left",
								fontSize: "40px",
								lineheight: "90px",
								paddingRight: "8px",
								paddinLeft: "3px",
							}}
						>
							Hello,
						</span>
						I am currently pursuing my Masters degree at UNCC charlotte and
						looking for full time Software Engineer job for 2021. I am interested
						to work as Software Developer , Web Developer , Mobile or Hybrid
						Application Developer or Date Science Engineer. I have worked on
						these software and done some projects on it.<br />
						<br />
						&nbsp; &nbsp; &nbsp; &nbsp;With my year and half of industrial
						experience and strong understanding of Algorithms and Data
						Structures learned from my course curriculum and enthusiasm to
						learn. I would be able to solve the real world problems or
						challenges that comes across me.
					</h5>
					<br></br>
					<br></br>
					<br></br>
					<div style={{ backgroundColor: "white" }}>
						<h4 style={{ color: "#903" }}>Skills :</h4>
						<br></br>
						<h5>
							languages:{" "}
							<span style={{ color: "#566573" }}>
								Java, JavaScript, Python, HTML, CSS
							</span>{" "}
						</h5>
						<h5>
							FrameWork:{" "}
							<span style={{ color: "#566573" }}>
								React JS, Angular, SpringBoot, Node js, ReactNative, Ionic,
								Flask
							</span>
						</h5>
						<h5>
							Tool:{" "}
							<span style={{ color: "#566573" }}>
								{" "}
								Android, Anaconda, Node js, Pycharam, Eclipse
							</span>
						</h5>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default About;

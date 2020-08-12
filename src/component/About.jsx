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
							Hello!
						</span>
						<br></br><br></br>
						I am a Computer Science graduate student at the University of North
						Carolina at Charlotte with skills in full stack and Data Science.
						Passionate about evolving technologies and eager to meld with the
						futuristic world with great zeal and enthusiasm. and create
						applications that improve quality of life. <br />
						<br /> &nbsp; &nbsp; &nbsp; &nbsp;Having worked on projects focused
						on real world problems and year half of industrial experience, I am
						currently seeking full-time opportunities . I strive to continuously
						learn, improve my knowledge base and grow as a person.
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
								C, C++, Java, JavaScript, Python, HTML, CSS
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
								Android, Anaconda, Node js, Pycharm, Eclipse
							</span>
						</h5>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default About;

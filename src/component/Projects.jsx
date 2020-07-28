import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import { data } from "../data";

const Projects = () => {
	useEffect(() => {
		window.$("#div").ready(function () {
			if (window.innerWidth < 500) {
				window.$("#div").css({ gridTemplateColumns: "repeat(1 ,1fr)" });
			} else {
				window.$("#div").css({ gridTemplateColumns: "repeat(2 ,1fr)" });
			}
		});
	}, []);
	console.log(data.content.projects);
	return (
		<div
			className='col-lg-12 col-s-3'
			style={{ marginTop: "3%", marginBottom: "10%" }}
		>
			<div className='container' id='div' style={userStyle}>
				{data.content.projects.map((item) => (
					<ProjectItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const userStyle = {
	display: "grid",

	gridGap: "1rem",
};

export default Projects;

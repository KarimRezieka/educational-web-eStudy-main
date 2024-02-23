import React from "react"
import img from "../assets/about.svg"
import Button from "../layout/Button"
import Heading from "../layout/Heading"
import { Link } from "react-scroll"

const About = () => {
	return (
		<div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
			<div className=" w-full md:w-2/4">
				<img src={img} alt="img" />
			</div>

			<div className="w-full md:w-2/4 text-center space-y-2">
				<Heading title1="About" title2="Us?" />
				<p className=" text-lightText">
				Welcome to ATLAS, your all-in-one solution for streamlined education administration. Our intuitive platform empowers schools, colleges, and universities to enhance efficiency, communication, and student success. From seamless enrollment and attendance tracking to comprehensive grade management and parent engagement tools, we've got you covered. Join thousands of educators worldwide to simplify administrative tasks and elevate the learning experience. Experience the future of education management today.

				</p>

				<Link to="contact" spy={true} smooth={true} duration={500}>
					<Button title="Contact Us" />
				</Link>
			</div>
		</div>
	)
}

export default About

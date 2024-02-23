import React from "react"
import Heading from "../layout/Heading"
import CoursesCard from "../layout/CoursesCard"
import webImg from "../assets/web-dev.svg"
import appImg from "../assets/App-dev.svg"
import graphicImg from "../assets/graphic.svg"
import digitalImg from "../assets/digital.svg"

import img1 from "../assets/newImages/560.jpg"
import img2 from "../assets/newImages/561.jpg"
import img3 from "../assets/newImages/566.jpg"
import img4 from "../assets/newImages/594.jpg"

const Courses = () => {
	return (
		<div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
			<Heading title1="What we" title2="Offer" />

			<div className=" flex flex-wrap justify-center gap-6 mt-6">
				<CoursesCard img={img1} title={'image 1'}/>
				<CoursesCard img={img2} title={'image 2'}/>
				<CoursesCard img={img3} title={'image 3'}/>
				<CoursesCard img={img3} title={'image 4'}/>
			</div>
		</div>
	)
}

export default Courses

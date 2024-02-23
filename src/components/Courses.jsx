import React from "react"
import Heading from "../layout/Heading"
import CoursesCard from "../layout/CoursesCard"

import bus from "../assets/newImages/bus.png"
import customerSupport from "../assets/newImages/support.jpg"
import faceRecog from "../assets/newImages/betterFaceRecog.png"
import medicalHistory from "../assets/newImages/medical.jpg"

const Courses = () => {
	return (
		<div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
			<Heading title1="What we" title2="Offer" />

			<div className=" flex flex-wrap justify-center gap-6 mt-6">
				<CoursesCard img={bus} title={'Bus location monitoring'}/>
				<CoursesCard img={customerSupport} title={'AI chat for customer support'}/>
				<CoursesCard img={faceRecog} title={'face recognition + facial expresstion detection'}/>
				<CoursesCard img={medicalHistory} title={'Medical history for students'}/>

			</div>
		</div>
	)
}

export default Courses

import Hero from "@/components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "About Me",
}

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2"
export default function AboutPage() {
	return (
		<>
			<Hero />
			<section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
				<h2 className={TITLE_CLASS}>Who Am I?</h2>
				<p>
					I am a frontend developer who is passionate about UX and committed to
					creating user-oriented designs that are intuitive, functional, and
					visually appealing. My focus is on developing the user interface and
					experience of websites and applications. I have expertise in coding
					with HTML/CSS, JavaScript and TypeScript, as well as using various
					frontend frameworks and libraries such as React and Next.js.
					Additionally, I have a strong understanding of user research,
					information architecture, and usability testing, which helps me create
					designs that meet the needs and expectations of my users. Overall, my
					goal is to create digital products that are not only beautiful but
					also easy to use and navigate, which enhances the overall user
					experience.
				</p>
				<h2 className={TITLE_CLASS}>Career</h2>
				<p>
					하이퍼클라우드 (-Now) <br />
				</p>
				<h2 className={TITLE_CLASS}>Skills</h2>
				<p>
					React, Next.js
					<br />
					Bitbucket, Jira, Git/GitHub <br />
					CloudFront, S3, Firebase, Figma
				</p>
			</section>
		</>
	)
}

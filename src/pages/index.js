import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects, Resume } from "components/landing";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Skills />
		<Contact />
		<Resume />
	</Layout>
);

export default Home;

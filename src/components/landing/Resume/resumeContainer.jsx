
import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ResumeWraper, HeaderWraper, Left, Right, Footer, Intro, Content } from './styles';
import Employer from './Employer';

const ResumeContainer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <ResumeWraper id="resume">
            <div theme={theme} >
                <HeaderWraper />
                <Left />
                <Content class="stuff">
                    <br />
                    <Intro>Suvankar Satpati</Intro>
                    <hr />
                    <br />
                    <p class="head">Skills</p>
                    <ul>
                        <li>Backend – Ruby, Ruby on Rails, PostgreSQL, NodeJS, Redis, RabbitMQ, RSpec</li>
                        <li>Frontend – JavaScript, TypeScript, ReactJS, GatsbyJS, Style Component, Jest, RTL, GraphQL</li>
                        <li>Database - MySQL, MongoDB, PostgreSQL, Redis</li>
                        <li>Others – Docker, Git, Jira, Jenkin, REST API, MicroServices & MicroFrontend</li>
                        <li>Practices – Agile (Kanban, Scrum), XP, TDD, Pair Programming, Clean Code, CI/CD</li>

                    </ul>
                    <p class="head">Employment</p>
                    <ul>
                        <Employer name="Thoughtworks" duration="June 2018 - Present" post="Senior 
                        Software Development Engineer" />
                        <li>Working as a part of Atlassian Design System Team, to build & improve performance of Atlaskit UI Library which comprised of reusable high performance lightweight Components and Patterns.</li>
                        <li>Improved performance of Atlaskit UI Library up to 50 % in bundle size, render time and time to first byte (TTFB)</li>
                        <li>Build a discussion forum and Q & A mobile application for Farmers.</li>
                        <li>Increased server response time by 35% by restructuring API</li>
                        <Employer name="Oracle" duration="August 2015 to June 2019" post="Software Development Engineer" />
                        <li>Worked as a part of the International Team of Oracle Social Insight – data analytics and data visualization web application. Developed  front-end application with React JS and backend services with Ruby on Rails.</li>
                        <li>Part of Building a data analytics platform, which provided an insight of user activity in the social network, based on Oracle Social Insight can show intuitive matrices, which eventually increased revenue for 5 big business and 15 medium business 10% by mapping new feature as a solution to their business goal.</li>
                        <Employer name="Cognizant" duration="June 2014 – August 2015" post="Software Development Engineer" />
                        <li>Developed an Insurance solutions using Guidewire BillingCenter.</li>
                        <li>Developed system health checkup, log monitoring and alert tool using Ruby and Shell Script which reduced manual effort by 50%.</li>
                        <Employer name="RS Software" duration="June 2011 – August 2014" post="Software Development Engineer" />
                        
                        <li>Developed Tool-e, a project management tool, using Ruby on Rails, jQuery and PostgreSQL DB</li>
                        <li>Developed a forum for Payment Executives, using Ruby on Rails, resque, MongoDB and exposed REST API</li>
                    </ul>
                    <p class="head">Education</p>
                    <ul>
                        <Employer name="West Bengal University of Technology" duration="July 2006 - July 2010" post="Kolkata, India" />
                        <li>B.Tech. in Computer Science and Engineering. CGPA: 7.5/10</li>
                        <li>Main coursework: Data Structures, Design and analysis of Algorithms, Computer Architecture, Artificial</li>
                        Intelligence, Database Systems, Operating Systems, Software Engineering.
                    </ul>

                    <p class="head">Self-motivated and Community Projects</p>
                    <ul>
                        <li>Cycle yard – a pear to pear bicycle share platform</li>
                        <li>Style work – find unconventional workspace nearby you</li>
                        <li>Rock Riders - a discussion forum for sharing knowledge and experience on bicycle riding</li>
                        <li>Charkha – a platform to reduce perishable food waste</li>
                    </ul>
                </Content>
                <Right />
                <Footer>
                    <h2 id="name">Suvankar Satpati</h2>
                </Footer>
                {/* <a href={ResumePDF}>Click here for my Resume</a>
                <Button href={ResumePDF} type="submit">
                    Download Resume
                    <a href={ResumePDF}>Click here for my Resume</a>
                </Button>
                <a rel="noopener noreferrer" href={ResumePDF} target="_blank">hi</a>
                <Thumbnail>
                    <img src={ResumeIMG} alt="I’m Suvankar and I’m a Fullstack Software Engineer!" />
                </Thumbnail> */}
            </div>
        </ResumeWraper>
    )
}

export default ResumeContainer;
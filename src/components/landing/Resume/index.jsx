import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import ResumeContainer from './resumeContainer'
import { IntroWrapper, Thumbnail } from './styles';
import { Container, Button } from 'components/common';
import download from 'assets/illustrations/download.svg';
import ResumePDF from '/static/resume/ss.pdf'

export const Resume = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <IntroWrapper as={Container}>
            <ResumeContainer />
            <Thumbnail style={{paddingLeft:'10px'}}>
                <a href={ResumePDF}>
                    <img src={download} alt="I’m Suvankar and I’m a Fullstack Software Engineer!" />
                    <Button >Download My Resume</Button>
                </a>
            </Thumbnail>
        </IntroWrapper>

    )
}


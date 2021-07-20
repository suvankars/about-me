import React from 'react'
import { EmployerWraper } from './styles';

const Employer = ({name, duration, post}) => {
    return (
        <EmployerWraper>
            <p class="alignleft">{name}</p>
            <p class="alignright">{duration}</p>
            <p>{post}</p>
        </EmployerWraper>
    )
}

export default Employer

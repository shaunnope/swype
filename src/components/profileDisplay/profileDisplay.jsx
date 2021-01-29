import React, { useState } from "react"

import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"

import "./profileDisplay.styles.css"


const ProfileDisplay = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="justify-content-center">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}  controls={false}
                    className="border bg-secondary p-5 mb-2 profile-carousel"
                >
                <Carousel.Item>
                    <h3>{ props.text.test } </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Item>
            </Carousel>
        </Container>
        
    )
}

export default ProfileDisplay



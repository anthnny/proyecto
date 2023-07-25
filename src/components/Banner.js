import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Remedios Naturales", ""];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let interval = setInterval(() => {
            tick();
        }, delta);
    
        return () => {
            clearInterval(interval);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);
        
        if (isDeleting) {
            setDelta(prevDelta  => prevDelta /2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }

    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Bienvenido a HerbaCare '}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor at odio nec maximus. Mauris fermentum sem in gravida congue. Proin hendrerit diam odio, vel pretium nibh laoreet at. Donec quis lacus velit. Curabitur vulputate erat non viverra molestie. Pellentesque felis dui, sodales vel sagittis sit amet, dignissim et sem. Donec molestie nunc in ullamcorper pretium. Aliquam massa tellus, viverra sed consectetur nec, feugiat eu sapien. Quisque quis vestibulum mi. Sed vel rhoncus lacus. Morbi pretium turpis sit amet lacinia egestas. Quisque rhoncus tortor lorem.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
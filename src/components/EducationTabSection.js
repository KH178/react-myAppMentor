import React,{useEffect,useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import Logo from '../images/edu-imgs/Layer_26.png';
import ShowMoreText from './ShowMoreText';

const useStyles = createUseStyles({
    educationTabSection:style=>({
        width: style.width,
        margin: '0 auto'
    })
})

export default function EducationTabSection({style,title,user}) {
    const [answers,setAnswers] = useState([]);
    const classes = useStyles(style);
    useEffect(() => {
        async function fetchExperties() {
            await axios.get(`http://www.mocky.io/v2/5e1c73ce320000bc072285f1`)
                .then(res => {
                    const data = res.data.answers;
                    setAnswers(data);
                }).catch((e) => console.log(e)).finally(() => {
                    
                })
        }
        fetchExperties();
    }, [])
    return (
        <div className={classes.educationTabSection}>
            <p className={classes.title}>{title}</p>
            <div className={classes.answersBlocks}>
                {answers.map((vals,i)=>(
                    <Container key={vals.role} className={classes.eduContainer}>
                            <Row xs="2">
                                <Col xs="12" md="2" className={classes.eduImgContr}>
                                        <img src={Logo}/>
                                </Col>
                                <Col xs="12" md="10">
                                    <div className={classes.expInfo}>
                                        <p className={classes.expRole}>{vals.question}</p>
                                        <p className={classes.expTimeline}>{vals.answeredOn}</p>
                                    </div>
                                </Col>
                            </Row> 

                            <div>
                                <ShowMoreText text={vals.answer} length={200} btnText={{ more:"see more",less:"see less" }} btnCol="#295caa"/>
                            </div>
                    </Container>
                    
                ))}
            </div>
        </div>
    )
}

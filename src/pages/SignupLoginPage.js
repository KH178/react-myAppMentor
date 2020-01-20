import React,{useState} from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { createUseStyles } from 'react-jss';
import ImgCardSlide from '../components/ImgCardSlide';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Container, Row, Col
  } from 'reactstrap';
  


import SignupPageImg from '../images/signupPageImg.png';
import SignupPageImg1 from '../images/SignupPageImg1.png';
import SignupPageImg2 from '../images/signupPageImg2.png';




const useStyles= createUseStyles({
    signUpPageContainer:{
        maxWidth: '60rem',
        margin: 'auto',
        boxShadow: '0 0 25px 2px rgba(206, 206, 206, 0.75)'
    },
    caroIndi:{
      '& li':{
        backgroundColor: '#e1e1e1',
        height: '0.6rem',
        width: '0.6rem',
        borderRadius: '50%'
      },
      '& li.active':{
        backgroundColor: '#89ade3'
      }
    }
})

const SignupLoginPage = ({items,itemsBgCol}) => {
    const classes = useStyles(itemsBgCol);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
             <ImgCardSlide style={{
               bg: item.imgBg,
               height: '30rem'
                }}
               item={item}/>
            {/* <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
          </CarouselItem>
        );
      });




    return (
        <div className={classes.signUpPageContainer}>
         <Container>
            <Row>
                <Col className="p-0" md="5">
                    <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className={classes.caroIndi}/>
                    {slides}
                    {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
                    </Carousel>
                </Col>
                <Col md="7">
                    {/* <SignupForm/> */}
                    <LoginForm/>
                </Col>
            </Row>
         </Container>    
        </div>
    )
}

SignupLoginPage.defaultProps = {
     items : [
        {
          img: SignupPageImg,
          title: 'Ask your Questions',
          sub: 'An ecosystem built for you to ask questions, seek knowledge, and grow a network.',
          imgBg: 'linear-gradient(10deg, #ffffff 0%, #c8baff 100%)'
        },
        {
            img: SignupPageImg1,
            title: 'Get In-Touch with Mentors',
            sub: 'Connect with mentors and get unique insights and dig deep into topics you like to explore.',
            imgBg: 'linear-gradient(10deg, #ffffff 0%, #bed6ff 100%)'
        },
        {
          img: SignupPageImg2,
          title: 'Customize your Feed',
          sub: 'Follow topics and threads for which you have been seeking answers. Join our community to interact with people.',
          imgBg: 'linear-gradient(10deg, #ffffff 0%, #c68fa7 100%)'
        }
      ],
}

export default SignupLoginPage;

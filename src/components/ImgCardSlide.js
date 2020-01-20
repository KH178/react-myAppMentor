import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    ImgCardslideCont:style=>({
        background: style.bg,
        height: style.height
    }),
    imgContainer:{
        width: '100%',
        height: '50%',
        position: 'relative'
    },
    imgMinContiner:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100%',
        height: '100%',
        '& img':{
            width: '100%',
            height: '100%'
        }
    },
    txtContainer:{
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    mainTxt:{
        fontFamily: 'Merriweather',
        fontSize: "1.5rem",
        color: '#15234b',
        textAlign: 'center'
    },
    subTxt:{
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Merriweather',
        // fontSize: '1.4'
    }
})

const ImgCardslide = ({style,item})=>{
    const classes = useStyles(style);
    return(
        <div className={classes.ImgCardslideCont}>
            <div className={classes.imgContainer}>
                <div className={classes.imgMinContiner}>
                    <img src={item.img} alt='IMG'/>
                </div>
            </div>

            <div className={classes.txtContainer}>
                <div className={classes.mainTxt}>
                    <p>{item.title}</p>
                </div>
                <div className={classes.subTxt}>
                    <p>{item.sub}</p>
                </div>
            </div>
        </div>
    )
}

export default ImgCardslide;
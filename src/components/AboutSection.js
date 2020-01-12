import React,{useState} from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    about: {
        width: '90%',
        margin: '0 auto',
    },
    title: {
       fontSize: '1.2rem'
    },
    aboutTextContr: {
        fontWeight: '400'
    },
    readMore: style => ({
        cursor: 'pointer',
        fontWeight: 'bold',
        color: style.fontCol
    })
})

export default function AboutSection({ about,title,style}) {
    const classes = useStyles(style);
    const [isReadMoreExpand, setIsReadMoreExpand] = useState(false);

    const handleBigText = () => {
        if (about.length > 400) {
            return `${about.slice(0, 400)}...`;
        }
    }
    const handleRead = () => {
        setIsReadMoreExpand(!isReadMoreExpand)
    }
    return (
        <div className={classes.about}>
            <p className={classes.title}>{title}</p>
            <p className={classes.aboutText}>
                {
                    isReadMoreExpand === false ? (
                    <div className={classes.aboutTextContr}>
                        <span className={classes.shortAbout}>{handleBigText()}</span> 
                        <span className={classes.readMore} onClick={handleRead}>read more</span>
                        </div>) :
                    <div className={classes.aboutTextContr}>
                        <span>{about}</span>
                        <span className={classes.readMore} onClick={handleRead}>read less</span>
                    </div>    
                }
            </p>
        </div>
    )
}

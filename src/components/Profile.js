import React, {  } from 'react';
import { createUseStyles } from 'react-jss';
import ProfileInfoBanner from './ProfileInfoBanner';

const useStyles = createUseStyles({
    profile: {
        backgroundColor: '#f5f5f5',
        height: '100vh',
        margin: {
            // jss-plugin-expand gives more readable syntax
            top: 4, // jss-plugin-default-unit makes this 5px
            right: 0,
            bottom: 0,
            left: '0rem'
        },
        '& span': {
            // jss-plugin-nested applies this to a child span
            fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
        }
    },
    myLabel: {
        fontStyle: 'italic'
    }
})

function Profile(props) {
        const classes = useStyles(props)
    return (
        <div className={classes.profile}>
            <ProfileInfoBanner style={{height: '30rem',width:'80vw',stripBgCol:'#c3d0ee'}} user={props.user}/>
        </div>)
}

export default Profile;

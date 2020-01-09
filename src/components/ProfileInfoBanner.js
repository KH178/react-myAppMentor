import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    profileInfoBannerContainer: style => ({
        display: 'flex',
        justifyContent: 'center',
    }),
    profileBanner: style=> ({
            backgroundColor: '#ffffff',
            height: style.height,
            width: style.width,
            boxShadow: '1px 1px 5px 1px rgba(203, 203, 203, 0.75)',
            fontWeight: 'bold', // jss-plugin-camel-case turns this into 'font-weight'
            margin: {
                // jss-plugin-expand gives more readable syntax
                top: 4, // jss-plugin-default-unit makes this 5px
                right: 0,
                bottom: 0,
                left: '0rem'
            }    
    }),
    styleBanner: style => ({
        height: 'calc(100% / 3)',
        backgroundColor: style.stripBgCol
    }),
    bannerAvatar: {
        
    }
})


function ProfileInfoBanner({style,user}) {
    const classes = useStyles(style)
 

    return (
        <div className={classes.profileInfoBannerContainer}>
            <div className={classes.profileBanner}>
                <div className={classes.styleBanner}>
                    <div className={classes.bannerAvatar}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfoBanner;

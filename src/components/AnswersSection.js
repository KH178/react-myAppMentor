import React,{useState} from 'react';
import { createUseStyles } from 'react-jss';
import { Card, CardTitle, CardText} from 'reactstrap';

const useStyles = createUseStyles({

})

export default function AnswersSection() {
    const classes = useStyles();
    return (
        <div className={classes.answers}>
            <div className={classes.titleDiv}>
                <p className={classes.title}>Answers</p>
                <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              </Card>
            </div>
        </div>
    )
}

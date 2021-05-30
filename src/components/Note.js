import React,{useState} from "react"
import { Page,Button,Row,Text,Spacer,Col,Code,Divider,Progress,Card,Grid } from '@geist-ui/react'

export default (props)=>{
    

    return(
        <Grid xs={8}>
            <Card shadow>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Row justify="center"><Button type="error">Delete</Button></Row>
        
            </Card>
        </Grid>
    )
}
import React,{useState} from 'react'
import { Page,Button,Row,Text,Spacer,Col,Code,Divider,Progress,Card,Grid,useModal,Modal,Input,Textarea} from '@geist-ui/react'
export default (props)=>{
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    return(
        <Modal {...props.bindings}>
        <Modal.Title>Add Note</Modal.Title>
        
        <Modal.Content>
            
          <Input placeholder="The Evil Rabbit" onChange={(e)=>{setTitle(e.target.value)}}><Text h5>Title</Text></Input>
          <Textarea placeholder="Please enter a description." onChange={(e)=>{setContent(e.target.value)}}>
          
          </Textarea>
          <Button type='secondary-light'onClick={()=>{props.handleAdd(title,content);}}>AddNote</Button>
        </Modal.Content>
        
      </Modal>



    )

}
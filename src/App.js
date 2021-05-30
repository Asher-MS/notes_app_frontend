import logo from './logo.svg';
import axios from 'axios';
import React,{useState,useEffect} from "react"
import './App.css';
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Note from './components/Note.js'
import { Page,Button,Row,Text,Spacer,Col,Code,Divider,Progress,Card,Grid,useModal } from '@geist-ui/react'
import AddNote from './components/AddNote.js'
const API_URL="https://mynotes-asher.herokuapp.com"
function App() {
  const [notes,setNotes]=useState([
    {title:"test1",content:"Chumma"}
  ]);
  const { visible, setVisible, bindings } = useModal();
  const handleAdd=(title,content)=>{
    console.log(title,content);
    axios.post(API_URL,{title:title,description:content,importance:0}).then(res=>{updateNotes();})

    // setNotes([...notes,{title:title,content:content}])
  };
  const updateNotes=()=>{
    axios.get(API_URL).then(res=>{
      setNotes(res.data);
    });
  }
  useEffect(()=>{
    axios.get(API_URL).then(res=>{
      setNotes(res.data);
    });
  },[]);
  return (
    <GeistProvider>
      <CssBaseline/>
      <Page size='large'>
      <Spacer y={5}/>
        <Row>
          <Text h1>My Notes...</Text>
        </Row>
        <Row align="middle">
          <Col><Code block > You have {notes.length} notes</Code></Col>
          <Spacer x={4}/>
          <Col><Row justify="end"><Button shadow type="secondary" size="large" onClick={()=>{setVisible('true')}}>Add Notes</Button></Row></Col>
        </Row>
        <Spacer y={2}/>
        <Divider/>
        <Spacer y={3}/>
        <Grid.Container gap={2} justify="center">
          {notes?.map(note=>{
            return <Note title={note.title} content={note.content}/>
          })
          }
          
        </Grid.Container>
        
        
      </Page>
      <AddNote visible={visible} setVisible={setVisible} bindings={bindings} handleAdd={handleAdd}/>
    </GeistProvider>
    
  );
}

export default App;

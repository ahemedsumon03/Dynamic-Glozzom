import React, {Component} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import axios from 'axios'

class NewsLetter extends Component {

    SendNewsData=()=>{
        let name = document.getElementById('myname').value;
        let email = document.getElementById('myemail').value;

        if(name.length == 0)
        {
            document.getElementById('mybutton').innerHTML = "Name can not be empty";
            setTimeout(()=>{
                document.getElementById('mybutton').innerHTML = "Subscribe";
            },3000);
        }
        else if(email.length == 0)
        {
            document.getElementById('mybutton').innerHTML = "Email can not be empty";
            setTimeout(()=>{
                document.getElementById('mybutton').innerHTML = "Subscribe";
            },3000);
        }
        else{
            let data = {
                name:name,
                email:email
            }

            let config = {
                headers:{
                    "Access-Control-Allow-Origin":"*",
                    "Content-Type":"application/json"
                }
            }
            
            document.getElementById('mybutton').innerHTML="Data Sending....";

            axios.post('http://127.0.0.1:1000/api/getnewLetterInfo',JSON.stringify(data),config).then(response=>{
               if(response.status == 200 && response.data==1){
                   document.getElementById('mybutton').innerHTML = "Data is Send";
                   setTimeout(()=>{
                    document.getElementById('mybutton').innerHTML = "Subscribe"; 
                   },3000);
               }else{
                   document.getElementById('mybutton').innerHTML = "Something is Wrong";
                   setTimeout(()=>{
                    document.getElementById('mybutton').innerHTML = "Subscribe"; 
                   },3000);
               }
            }).catch(error=>{
                document.getElementById('mybutton').innerHTML = "Data is not Send";
                setTimeout(()=>{
                 document.getElementById('mybutton').innerHTML = "Subscribe"; 
                },3000);

                console.log(error);
            });
        }
    }

    render() {
        return (
            <div>
                <section id='newsletter' className='py-5 bg-dark text-light text-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h2>Signup For Our Newsletter</h2>
                                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus.</p>

                                <Form className='form-inline justify-content-center'>
                                    
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control id="myname" className='formField' type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail" className='ml-3'>
                                        <Form.Control id='myemail' className='formField' type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Button onClick={this.SendNewsData} variant="primary" id='mybutton' className='ml-3'>
                                        Subscribe
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NewsLetter;
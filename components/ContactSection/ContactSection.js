import React, {Component} from 'react';
import axios from 'axios'

class ContactSection extends Component {


     SendData=()=>{
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let mail =  document.getElementById('mail').value;
        let pn =    document.getElementById('pn').value;
        let msg =   document.getElementById('msg').value;

        if (fname.length==0) {
            document.getElementById('mybtn').innerHTML = "First name is empty";
            setTimeout(()=>{
                document.getElementById('mybtn').innerHTML = "Send";
            },3000);
        }else if(lname.length == 0)
        {
            document.getElementById('mybtn').innerHTML = "Last name is empty";
            setTimeout(()=>{
                document.getElementById('mybtn').innerHTML = "Send";
            },3000);
        }
        else if(mail.length == 0)
        {
            document.getElementById('mybtn').innerHTML = "Email is empty";
            setTimeout(()=>{
                document.getElementById('mybtn').innerHTML = "Send";
            },3000);  
        }
        else if(pn.length == 0)
        {
            document.getElementById('mybtn').innerHTML = "Phone number is empty";
            setTimeout(()=>{
                document.getElementById('mybtn').innerHTML = "Send";
            },3000);
        }
        else if(msg.length == 0)
        {
            document.getElementById('mybtn').innerHTML = "Message is empty";
            setTimeout(()=>{
                document.getElementById('mybtn').innerHTML = "Send";
            },3000);
        }
        else{

            let data={
                fname:fname,
                lname:lname,
                email:mail,
                phone:pn,
                message:msg
            }
    
            let config = {
                 headers:{
                     "Access-Control-Allow-Origin":"*",
                     "Content-Type":"application/json",
                     "Access-Control-Allow-Headers":"Origin,X-Requested-With,Content-Type,Accept"
                 }
            }
    
            document.getElementById('mybtn').innerHTML = "Data Sending.....";
    
            axios.post('http://127.0.0.1:1000/api/getPassData',JSON.stringify(data),config).then(result=>{
                if(result.status === 200 && result.data === 1)
                {
                    document.getElementById('mybtn').innerHTML = "Data is Send";
                    setTimeout(()=> {
                        document.getElementById('mybtn').innerHTML = 'Send';
                    },3000);
                }else {
                    document.getElementById('mybtn').innerHTML = "Something went wrong";
                    setTimeout(()=> {
                        document.getElementById('mybtn').innerHTML = 'Send';
                    },3000);
                }
    
            }).catch(error=>{
                document.getElementById('mybtn').innerHTML = "Data is not Send";
                setTimeout( ()=> {
                    document.getElementById('mybtn').innerHTML = 'Send';
                },3000);
    
                console.log(error);
            });
        }
    }

    render() {

        let allData = this.props.myData;

        return (
            <div>
                <section className='contact-section py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h4 className="text-center mb-4">Please fill out this form to contact us</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id='fname' type="text" placeholder="Enter name"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id='lname' type="text" placeholder="Last name" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id='mail' type="email" placeholder="Email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input id='pn' type="text" placeholder="Phone number"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea id='msg' rows="5" cols="80" placeholder="Message"
                                                              className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <button onClick={this.SendData} id='mybtn' className="btn btn-block btn-dark">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Get In Touch</h4>
                                        <p>{allData[0]['contact_des']}</p>
                                        <h4>Address</h4>
                                        <p>{allData[0]['address']}</p>
                                        <h4>Email</h4>
                                        <p>{allData[0]['email']}</p>
                                        <h4>Phone</h4>
                                        <p className="mb-2">{allData[0]['phone_number']}</p>
                                        <p>{allData[0]['phone_number']}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactSection;
import React from 'react';
import axios from 'axios';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
    .catch((e)=>alert(e))
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  onNameChange =(event) => {
    this.setState({name: event.target.value})
}

onEmailChange = (event) => {
    this.setState({email: event.target.value})
}

onMessageChange=(event) => {
    this.setState({message: event.target.value})
}
  render() {
    return(
      <div className="App" style={{paddingLeft:80, paddingRight:80, paddingTop:50}}>
        <form id="contact-form" onSubmit={(e)=>this.handleSubmit(e)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={(e)=>this.onNameChange(e)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={(e)=>this.onEmailChange(e)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={(e)=>this.onMessageChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

export default Contact;
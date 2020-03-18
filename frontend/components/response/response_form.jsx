import React from 'react'; 
import { withRouter } from 'react-router-dom';

class ResponseForm extends React.Component {
  constructor(props) {  
    super(props); 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.update = this.update.bind(this); 
    this.state = {
      story_id: this.props.match.params.storyId,
      body: ''
    }; 
  }
 
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }; 

  handleSubmit(e) {
    e.preventDefault();
    this.props.createResponse(this.state); 
    this.setState({body: ''});
  }

  render () {
    let name;
    if (!this.props.currentUser) {
      return (<div></div>); 
    } else {
      name = `${this.props.currentUser.username}`
    }; 

    return (
      <div className="response-form">
       <form onSubmit={this.handleSubmit}>
         <div className="response-author">{name}</div>
         <textarea  className="response-textbox" value={this.state.body} onChange={this.update("body")} placeholder="Write a response"></textarea>
         <br/>
         <button className="response-publish">Publish</button>
       </form>
     </div>
    )
  }
}; 


export default withRouter(ResponseForm);
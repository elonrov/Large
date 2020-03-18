import React from 'react'; 
import ResponseIndexItem from './response_index_item';

class ResponseIndex extends React.Component {
  constructor(props) {
    super(props) 
  }; 

  componentDidMount() {
    debugger
    this.props.fetchResponses(); 
  }

  render() {
    const responses = this.props.responses.reverse().map((response) => {
      return (
        <ResponseIndexItem 
          key={response.id}
          response={response}
          currentUser={this.props.currentUser} />
      )
    }); 
    return (
      <div>
        {responses}
      </div>
    )
  }
}; 

export default ResponseIndex;

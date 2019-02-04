
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchStream,editStream} from '../../actions';
import React, { Component } from 'react';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
   
    onSubmit=(formValues)=>{
        debugger
        this.props.editStream(this.props.match.params.id,formValues);
        
    }
    render() {
        console.log(this.props);//class based this.props
        if(!this.props.stream){
            return <div>Loading!!!!</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                initialValues={_.pick(this.props.stream,'title','description')}
                onSubmit={this.onSubmit}/>
            </div>
        );
    }
}



const mapStatetoProps=(state,ownProps)=>{
    console.log(ownProps); 
    return {stream:state.streams[ownProps.match.params.id]}

};
export default connect (
    mapStatetoProps,
    {fetchStream,editStream}
    )(StreamEdit);
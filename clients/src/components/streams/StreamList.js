import React from 'react';
import {connect}from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

import { Component } from 'react';

class StreamList extends Component {


    componentDidMount(){

        this.props.fetchStreams();//action creator(function) call which is passed as props from fetchStreams
    }

    renderAdmin=(stream)=>{
        if(stream.userId===this.props.currentUserId){
            return (
                <div className="right floated content">
                   {/* <button className="ui button primary">EDIT</button> */}
                   <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                   EDIT
                   </Link>
                   <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                   DELETE
                   </Link>
               </div>
            );
        }

    }

    renderCreate=()=>{
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}} >
                 <Link to="/streams/new" className="ui button primary">
                  Create Stream
                 </Link>
                </div>
            );

        }
    }
      renderList=()=>{
       return this.props.streams.map((stream)=>{
           return(
               <div className="item" key={stream.id}>
               {this.renderAdmin(stream)}
                 <i className="large middle aligned icon camera "/>
                  <div className="content">
                  <Link to={`/streams/${stream.id}`}>
                    {stream.title}
                    </Link>
                     <div className="description">{stream.description}</div>
                  </div>
               </div>
           );



       })

      };
    render() {
        //console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}
 
const mapStateToProps=(state)=>{

    return {streams:Object.values(state.streams),
            currentUserId:state.auth.userId,
            isSignedIn:state.auth.isSignedIn
         };
    //JS fn takes the object values and puts into an array--object to array
}


export default connect(mapStateToProps,{fetchStreams}) (StreamList);
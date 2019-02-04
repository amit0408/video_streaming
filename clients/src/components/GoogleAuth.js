import React, { Component } from 'react';
import{signIn,signOut} from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends Component {
    

    componentDidMount(){ //loading is required only one time so DidMount
    //    loading 
            window.gapi.load('client:auth2',()=>{
//Initialization
            window.gapi.client.init({
                clientId:'85218607711-1r0ssr1khbjf6dho7qbosihc7r2dp47k.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
  

    onSignOutClick=()=>{

        this.auth.signOut();
    }

    onSignInClick=()=>{

        this.auth.signIn();
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
        
    }

    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon"/>
                Sign Out
                </button>
            );
        }
        else{
            return (
            <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon"/>
            Sign In with Google
            </button>
            );
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps =(state)=>{

    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);
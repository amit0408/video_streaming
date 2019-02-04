import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INITIAL_STATE={//this naming convention ensures that the object should never be modified
    isSignedIn:null,
    userId:null
}


export default(state=INITIAL_STATE,action)=>{


    switch(action.type){

        case SIGN_IN://user signs in->assign the id passes in payload
        return {...state,isSignedIn:true,userId:action.payload};

        case SIGN_OUT://when user signes out make id null again
        return{...state,isSignedIn:false,userId:null}

        default:
        return state;
    }
}
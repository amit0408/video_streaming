import {connect} from 'react-redux';
import {createStream } from '../../actions';
import React, { Component } from 'react';
import StreamForm from './StreamForm';

class StreamCreate extends Component { 
    
    onSubmit = (formValues) => {

                console.log(formValues);
                this.props.createStream(formValues);
            }
    
    
        render() {
            return (
                <div>
                    <h3>Create A Stream</h3>
                    <StreamForm onSubmit={this.onSubmit}/>
                </div>
            );
        }
    

}
export default connect(null,{createStream})(StreamCreate)










// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import {connect} from 'react-redux';
// import {createStream } from '../../actions/index';

// class StreamCreate extends Component {

//     renderError = ({ error, touched }) => {
//         if (touched && error) {
//             return (
//                 <div className="ui error message">
//                     <div className="header">{error}</div>
//                 </div>
//             );
//         }
//     }


//  renderInput=({input,label,meta})=>{
//      const className=`field ${meta.error && meta.touched}?'error':""`;
//    console.log(meta);
//    return(
//    <div className={className}>
//    <label>{label}</label>
//    <input {...input} autoComplete="off"/>
//    {this.renderError(meta)}
//    </div>

//    );

//  }

//  onSubmit = (formValues) => {
// debugger
//         console.log(formValues);
//         this.props.createStream(formValues);
//     }


//     render() {
//         return (
//             <form
//                 onSubmit={this.props.handleSubmit(this.onSubmit)}
//                 className="ui form error">
//                 <Field name="title" component={this.renderInput} label="Enter Name" />
//                 <Field name="description" component={this.renderInput} label="Enter Description" />
//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// }






// const validate = (formValues) => {

//     const errors = {};
//     //console.log("error" + formValues.title);

//     if (!formValues.title) {
//         console.log("You need to enter the title");
//     }

//     if (!formValues.description) {
//         console.log("You need to enter the description");
//     }
//     return errors;

// }

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate:validate

// })(StreamCreate);


// export default connect(null,{createStream})(formWrapped);
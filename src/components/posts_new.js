import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component{
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/">Back</Link>
                </div>
                <h3>Post New</h3>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if (!values.title)
        errors.title = "Enter a title!";
    if (!values.categories)
        errors.categories = "Enter categories!";
    if (!values.content)
        errors.content = "Enter a content!";

    return errors;
}

export default reduxForm({
    validate, //or validate: validate
    form: 'postNewForm'
})(PostsNew);
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component{
    renderField(field){
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        // console.log(values);
        createPost(values);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/">Back</Link>
                </div>
                <h3>Post New</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
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
})(
    connect(null, {createPost})(PostsNew)
);
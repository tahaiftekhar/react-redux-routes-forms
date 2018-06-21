import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        // For const { id, a, b, c } = this.props.match.params; if multiple route args
        //or const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }
    render(){
        return(
            <div>Posts Show</div>
        );
    }
}

export default connect(null, { fetchPost })(PostsShow);
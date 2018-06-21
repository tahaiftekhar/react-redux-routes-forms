import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component{
    componentDidMount(){
        if (!this.props.post) {     //So it does not fetch the record again, if already present through index page
            const {id} = this.props.match.params;
            // For const { id, a, b, c } = this.props.match.params; if multiple route args
            //or const id = this.props.match.params.id;
            this.props.fetchPost(id);
        }
    }

    deletePost(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        });
    }

    render(){
        if (!this.props.post){
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
        const post = this.props.post;
        return(
            <div>
                <Link to="/">Back to Posts</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.deletePost.bind(this)}
                >Delete</button>
                <h3>{post.title}</h3>
                <h6>Category: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
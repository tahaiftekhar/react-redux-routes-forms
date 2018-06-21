import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POST:
            const post = action.payload.data;
            return {...state, [post.id]: post};
        case FETCH_POSTS:
            const posts = _.mapKeys(action.payload.data, 'id');
            return posts;
        case DELETE_POST:
            //Need to change here to delete probably
            return state;
    }
    return state;
};


import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';
import { FETCH_POST } from '../actions/index';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POST:
            const post = action.payload.data;
            return {...state, [post.id]: post};
        case FETCH_POSTS:
            const posts = _.mapKeys(action.payload.data, 'id');
            return posts;
    }
    return state;
};


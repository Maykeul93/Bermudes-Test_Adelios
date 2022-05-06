import { connect } from 'react-redux';
import Result from 'src/components/Result';

import {
  setPosts,
} from 'src/actions/data';

const mapStateToProps = (state) => ({
    data: state.data.data,
    posts: state.data.posts
});

const mapDispatchToProps = (dispatch) => ({
    setPosts: (value) => dispatch(setPosts(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
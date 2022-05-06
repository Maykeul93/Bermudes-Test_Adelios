import { connect } from 'react-redux';
import Form from 'src/components/Form';

import { onInputChange, setPosts } from 'src/actions/data';

const mapStateToProps = (state) => ({
    data: state.data.data,
    inputValue: state.data.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
    setPosts: (value) => dispatch(setPosts(value)),
    onInputChange: (value) => dispatch(onInputChange(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
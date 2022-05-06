import { connect } from 'react-redux';
import Produit from 'src/components/Produit';

import {
  addFavorites,
  removeFavorites
} from 'src/actions/data';

const mapStateToProps = (state) => ({
    favorites: state.data.favorites
});

const mapDispatchToProps = (dispatch) => ({
    addFavorites: (value) => dispatch(addFavorites(value)),
    removeFavorites: (value) => dispatch(removeFavorites(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Produit);
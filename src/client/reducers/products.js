import api from '../utils/api';

export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';

export const getProducts = () => async (dispatch) => {
    const data = await api.getProducts();
    dispatch({
        type: PRODUCTS_LOADED,
        items: data.products
    });
};

const initialState = {
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_LOADED:
            return Object.assign({}, state, { items: action.items });
        default:
            return state;
    }
}

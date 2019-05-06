import ProductsReducer from 'client/reducers/products-reducer';
import ProductReducer from 'client/reducers/product-reducer';
import ContentReducer from 'client/reducers/content-reducer';
import ContactReducer from 'client/reducers/contact-reducer';
import AuthReducer from 'client/reducers/auth-reducer';

const rootReducer = {
    products: ProductsReducer,
    product: ProductReducer,
    content: ContentReducer,
    contact: ContactReducer,
    auth: AuthReducer,
};

export default rootReducer;

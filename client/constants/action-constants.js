const ACTIONS = {
	// Products Actions
	GET_PRODUCTS_REQUEST: 'products:getProductsRequest',
	GET_PRODUCTS_SUCCESS: 'products:getProductsSuccess',
	GET_PRODUCTS_ERROR: 'products:getProductsError',

	// Product Actions
	GET_PRODUCT_REQUEST: 'product:getProductRequest',
	GET_PRODUCT_SUCCESS: 'product:getProductSuccess',
	GET_PRODUCT_ERROR: 'product:getProductError',

	// Content Actions
	GET_CONTENT_REQUEST: 'content:getContentRequest',
	GET_CONTENT_SUCCESS: 'content:getContentSuccess',
	GET_CONTENT_ERROR: 'content:getContentError',

	// Contact Actions
	SEND_CONTACT_REQUEST: 'contact:sendContactRequest',
	SEND_CONTACT_SUCCESS: 'contact:sendContactSuccess',
	SEND_CONTACT_ERROR: 'contact:sendContactError',

	// Login Actions
	SEND_LOGIN_REQUEST: 'login:sendLoginRequest',
	SEND_LOGIN_SUCCESS: 'login:sendLoginSuccess',
	SEND_LOGIN_ERROR: 'login:sendLoginError',

	// Auth Actions
	SEND_AUTH_REQUEST: 'auth:sendAuthRequest',
	SEND_AUTH_SUCCESS: 'auth:sendAuthSuccess',
	SEND_AUTH_ERROR: 'auth:sendAuthError',
};

export default ACTIONS;

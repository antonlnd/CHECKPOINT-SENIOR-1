import { MESSAGES_LOADING, NEW_MESSAGE, MESSAGES_RECEIVED} from './constants';

const initialState = {
	messages: [],
	messagesLoading: false,
};

export default ( state = initialState, action ) => {
	switch (action.type) {
		case MESSAGES_LOADING:
			return Object.assign({}, state, {
				messages: [],
				messagesLoading: true,
			})
	case MESSAGES_RECEIVED:
			return Object.assign({}, state, {
				messages:  action.messages,
				messagesLoading: false,
			})
	case NEW_MESSAGE:
			return Object.assign({}, state, {
				messages:  action.messages,
				messagesLoading: true
			})

		default:
			return state

	}

}

import alt from '../alt';
import Actions from '../actions';

class ChatStore {
	constructor(){
		this.bindListeners({
			login: Actions.login
		});
		this.state = {user: null};
	}

	login(user){
		this.setState({user: user});
	}
}

export default alt.createStore(ChatStore)
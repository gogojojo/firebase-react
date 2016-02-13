import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class  ChannelList extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			channels: [
				'dogs',
				'cats'
			]
		};
	}

	render(){
		var channelNodes = this.state.channels.map((channel)=> {
			return(
				<Channel channel={channel} />
			);
		});

		return (
			<Card style={{
				flexGrow: 1
			}}>
				<List>
					<div> {channelNodes} </div>
				</List>
			</Card>
		);
	}
}

export default ChannelList
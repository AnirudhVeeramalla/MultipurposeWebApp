import React,{Component} from 'react'
import './codeforces.css';

class UserInfo extends Component
{
	constructor(){
		super();
		this.state={r:null}
	}
	componentDidMount=async ()=>{
		this.setState({r:await this.retriev()})
	}
	retriev=async ()=>{
		return await fetch('https://codeforces.com/api/user.info?handles=akhildutt81').then((res)=>res.json());
	}
	render(){
		if (this.state.r==null){
			return <h3>loading</h3>
		}
		else
		{
			const contribution=this.state.r['result'][0].contribution;
			const handle=this.state.r['result'][0].handle;
			const avatar=this.state.r['result'][0].avatar;
			const friendsCount=this.state.r['result'][0].friendOfCount;
			const maxRating=this.state.r['result'][0].maxRating;
			const rating=this.state.r['result'][0].rating;
			const rank=this.state.r['result'][0].maxRank;
			return(
				 <div className="userInfo">
		          <center>
			          <h1 className="userf_styling">UserInfo</h1>
			          <h3>UserName: {handle}</h3>
			          <img src={avatar} width="100px" height="100px" alt="Error"/>
			          <h3>Contribution : {contribution}</h3>
			          <h3>FriendsCount : {friendsCount}</h3>
			          <h3>MaxRating : {maxRating}</h3>
			          <h3>Rating : {rating}</h3>
			          <h3>Rank : {rank}</h3>
			       </center>
		         </div>
				);
		}
	}
} 
	
export default UserInfo;
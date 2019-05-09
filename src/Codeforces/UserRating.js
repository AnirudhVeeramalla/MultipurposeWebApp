import React,{Component} from 'react'
import './codeforces.css';

class UserRating extends Component
{
	constructor(){
		super();
		this.state={r:null}
	}
	componentDidMount=async ()=>{
		this.setState({r:await this.retriev()})
	}
	retriev=async ()=>{
		return await fetch('https://codeforces.com/api/user.rating?handle=akhildutt81').then((res)=>res.json());
	}
	render(){
		if (this.state.r==null){
			return <h3>loading</h3>
		}
        else
        {
            const contestId=this.state.r['result'][0].contestId;
			const contestName=this.state.r['result'][0].contestName;
			const newRating=this.state.r['result'][0].newRating;
			const oldRating=this.state.r['result'][0].oldRating;
			const rank=this.state.r['result'][0].rank;
			return(
				 <div className="userRating">
		          <h3 className="f_styling">User Rating</h3>
		          <div className="userstat">
			          <h3>ContestId : {contestId}</h3>
			          <h3>ContestName : {contestName}</h3>
			          <h3>NewRating : {newRating}</h3>
			          <h3>OldRating : {oldRating}</h3>
			          <h3>Rank : {rank}</h3>
		          </div>
		       </div>
		   );
        }
    }
}
export default UserRating;
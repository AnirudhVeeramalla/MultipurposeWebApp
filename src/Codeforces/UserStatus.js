import React,{Component} from 'react'
import './codeforces.css';


class UserStatus extends Component
{
	constructor(){
		super();
		this.state={r:null}
	}
	componentDidMount=async ()=>{
		this.setState({r:await this.retriev()})
	}
	retriev=async ()=>{
		return await fetch('https://codeforces.com/api/user.status?handle=AkhilDutt81&from=1&count=1').then((res)=>res.json());
	}
	render(){
		if (this.state.r==null){
			return <h3>loading</h3>
		}
        else
        {
        	const contestid=this.state.r['result'][0].contestId;
			const problemName=this.state.r['result'][0].problem.name;
			const programmingLanguage=this.state.r['result'][0].programmingLanguage;
			const timeConsumed=this.state.r['result'][0].timeConsumedMillis;
			const verdict=this.state.r['result'][0].verdict;
			return(
				 <div className="contest">
		          <h1 className="f_styling">User Status</h1>
		          <div className="userstat">
			          <h3> Recent Submission</h3>
			          <h3>ContestId : {contestid}</h3>
			          <h3>Problem Name : {problemName}</h3>
			          <h3>Programming language : {programmingLanguage}</h3>
			          <h3>Time consumed(in millis) : {timeConsumed}</h3>
			          <h3>Verdict : {verdict}</h3>
		          </div>
		        </div>
				);
        }
    }
}
export default UserStatus;
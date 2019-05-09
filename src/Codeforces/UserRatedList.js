import React,{Component} from 'react'
import './codeforces.css';


class UserRatedList extends Component
{
	constructor(){
		super();
		this.state={r:null}
	}
	componentDidMount=async ()=>{
		this.setState({r:await this.retriev()})
	}
	retriev=async ()=>{
		return await fetch('https://codeforces.com/api/user.ratedList?activeOnly=true').then((res)=>res.json());
	}
	render(){
		if (this.state.r==null){
			return <h3>loading</h3>
		}
		else{
            const first=this.state.r['result'][0].lastName;
			const second=this.state.r['result'][1].lastName;
			const third=this.state.r['result'][2].lastName;
			const four=this.state.r['result'][3].lastName;
			const five=this.state.r['result'][4].lastName;
			return(
				 <div className="userRatedList">
		          <h1 className="f_styling">UserRatedList</h1>
		          <div className="userstat">
		             <ol className="userRated">
		               <li>{first}</li>
		               <li>{second}</li>
		               <li>{third}</li>
		               <li>{four}</li>
		               <li>{five}</li>
		             </ol>
		          </div>
		       </div>
				);
		}
	}
}
export default UserRatedList;
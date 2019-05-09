import React,{Component} from 'react'
import './codeforces.css';
class Contests extends Component
{
	constructor(){
		super();
		this.state={r:null}
	}
	componentDidMount=async ()=>{
		this.setState({r:await this.retriev()})
	}
	retriev=async ()=>{
		return await fetch('https://codeforces.com/api/contest.list?gym=true').then((res)=>res.json());
	}
	render(){
		if (this.state.r==null){
			return <h3>loading</h3>
		}
        else
        {
        	const first=this.state.r['result'][0].name;
			const second=this.state.r['result'][1].name;
			const third=this.state.r['result'][2].name;
			const four=this.state.r['result'][3].name;
			const five=this.state.r['result'][4].name;
			return(
				 <div className="contest">
		          <h1 className="f_styling">Contests</h1>
		          <div className="userstat">
		             <ol className="contests">
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
export default Contests;
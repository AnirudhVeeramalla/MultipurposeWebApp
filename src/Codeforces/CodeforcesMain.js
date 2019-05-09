import React,{Component} from 'react';
import './codeforces.css';
import UserInfo from './UserInfo';
import Contest from './Contests';
import RecentActions from './RecentActions';
import UserStatus from './UserStatus';
import UserRating from './UserRating';
import UserRatedList from './UserRatedList';  

class CodeforcesMain extends Component {
  render(){
    return(
      <div className="bg">
       <UserInfo/>
       <Contest/>
       <RecentActions/>
       <UserStatus/>
       <UserRating/>
       <UserRatedList/>
     </div>
    );
  }
}
export default CodeforcesMain;

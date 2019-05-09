import React from 'react'
import './codeforces.css';

function RecentActions(){

    const handle1="misophonic";
    const handle2="Marquis";
    const text1="Add 5 couple of times.";
    const text2="Can you explain problem statement";

	return(
		 <div className="contest">
          <h1 className="f_styling">Recent Actions</h1>
          <ol className="contests">
            <li>
              <h2> Comment</h2>
               <h4>CommentHandle: {handle1}</h4>
               <h4>Text: {text1}</h4>
            </li>
            <li>
               <h2> Comment</h2>
               <h4>CommentHandle: {handle2}</h4>
               <h4>Text: {text2}</h4>
            </li>
          </ol>
       </div>
		);
}
export default RecentActions;
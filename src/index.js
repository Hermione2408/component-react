import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';
import CommentDetail from "./commentDetail";
import ApprovalCard from "./ApprovalCard";

const App =() => {
    console.log(faker)
    return (
<div className="ui container comments">

    <ApprovalCard>
        <div>
            <h4>Warning!</h4>
        Are you sure
        </div>
      
    </ApprovalCard>
     <CommentDetail author="alex" timeAgo="Today at 2:00" avatar={faker.image.avatar()} />
    <ApprovalCard > 
   <CommentDetail author='Sam' timeAgo="Today at 4:45" avatar={faker.image.avatar()} />
   </ApprovalCard>
   <ApprovalCard>
   <CommentDetail author="alex" timeAgo="Today at 2:00" avatar={faker.image.avatar()} />

   </ApprovalCard>
  
   <CommentDetail author="Jane" timeAgo="Today at 4:00" avatar={faker.image.avatar()} />
   
   
</div>

    );
} ;
ReactDOM.render(<App/>, document.querySelector('#root') );
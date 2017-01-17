import React from 'react';
import { Link } from 'react-router';

class Member extends React.Component {
    
    render(){
        return (
            <p>
                <Link to={`/mypage/${this.props.reactkey}`}>
                    { this.props.name } : { this.props.phone }
                </Link>
            </p>
        );
    }
}
 
export default Member;
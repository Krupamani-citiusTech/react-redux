import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../store/action/userAction';



class Content extends Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //     tagline: this.props.tagline
    //   }
    }
  
    componentDidMount() {
     this.props.getUserList();
    }
    render(){
        const {userObj } = this.props;
        // console.log('userObj---->',this.props.userObj.data);
        return(
            <div>Hi</div>
        )
    }
}
    const mapStateToProps = (state) => {
        console.log('userdata---->',state);
        return {
          userObj: state.user
        }
      }
      
      const mapDispatchToProps = {
        getUserList
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(Content);
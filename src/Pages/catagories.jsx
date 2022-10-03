import React, { Component } from "react";
import { getCatagoriesList } from "../store/action/catagoriesAction";
import { connect } from 'react-redux';

// const Catagieriesdetails = () => {
//     useEffect((props)=>{
//    console.log('props--->',props)
//    props.getUserListData();
//     },[]);
//     return(
//         <div>This is catagieriesdetails</div>
//     )
// }
class Catagoriesdetails extends Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //     tagline: this.props.tagline
    //   }
    }
  
    componentDidMount() {
        this.props.getCatagoriesList();
    }
    render(){
        const {userObj } = this.props;
        console.log('userObj from catagories---->',this.props.userObj.data);
        return(
          <div>
            <div>sub_branch1</div>
          {/* {this.props.userObj.data.map((user) => (
            <div className="user">{user.id}</div>
          ))} */}
          </div>
        )
    }
}
    const mapStateToProps = (state) => {
        console.log('userdata---->',state);
        return {
          userObj: state.user
        }
      }
      
      const mapDispatchToProps =  {
        getCatagoriesList
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(Catagoriesdetails);
// export default Catagieriesdetails;
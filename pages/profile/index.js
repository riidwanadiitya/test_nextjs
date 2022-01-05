import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/layout/Layout";


function Profile(props) {
  const {user}= props;
  return (
    <div>
      <Layout>
        <h1>Profile Page</h1>
        <hr/>
        <h3>Hai, {user}</h3>
      </Layout>
    </div>
  );
}

const mapStateToProps =state =>{
  return{
    user : state.main.name
  }
}

export default connect(mapStateToProps, null)(Profile);

import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getLeagues} from "../../redux/leaguesReducer";
import {appStateType} from "../../redux/reduxStore";
import Leagues from "./Leagues";

type mapPropsType = ReturnType<typeof mapStateToProps>
type dispatchPropsType = {
  getLeagues: () => void
}

class LeaguesContainer extends React.Component<mapPropsType & dispatchPropsType> {
  componentDidMount() {
    this.props.getLeagues();
  }

  render() {
    return (
      <div>
        <Leagues leagues={this.props.leagues}/>
      </div>
    );
  }
}

const mapStateToProps = (state: appStateType) => {
  return {
    leagues: state.leaguesPage.leagues
  }
}

const mapDispatchToProps = {
  getLeagues
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LeaguesContainer);
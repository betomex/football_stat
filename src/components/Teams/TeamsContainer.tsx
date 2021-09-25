import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {appStateType} from "../../redux/reduxStore";
import {getTeams} from "../../redux/teamsReducer";
import Teams from "./Teams";

type mapPropsType = ReturnType<typeof mapStateToProps>
type dispatchPropsType = {
  getTeams: () => void
}

class TeamsContainer extends React.Component<mapPropsType & dispatchPropsType> {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    return (
      <div>
        <Teams teams={this.props.teams}/>
      </div>
    );
  }
}

const mapStateToProps = (state: appStateType) => {
  return {
    teams: state.teamsPage.teams
  }
}

const mapDispatchToProps = {
  getTeams
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TeamsContainer);
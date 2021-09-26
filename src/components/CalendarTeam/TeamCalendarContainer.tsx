import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {appStateType} from "../../redux/reduxStore";
import {getTeamMatches} from "../../redux/teamCalendarReducer";
import TeamCalendar from "./TeamCalendar";

type mapPropsType = ReturnType<typeof mapStateToProps>
type dispatchPropsType = {
  getTeamMatches: () => void
}

class TeamCalendarContainer extends React.Component<mapPropsType & dispatchPropsType> {
  componentDidMount() {
    this.props.getTeamMatches();
  }

  render() {
    return (
      <div>
        <TeamCalendar teamMatches={this.props.teamMatches} teamID={this.props.teamID}/>
      </div>
    );
  }
}

const mapStateToProps = (state: appStateType) => {
  return {
    teamMatches: state.teamCalendar.teamMatches,
    teamID: state.teamCalendar.teamID
  }
}

const mapDispatchToProps = {
  getTeamMatches
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TeamCalendarContainer);
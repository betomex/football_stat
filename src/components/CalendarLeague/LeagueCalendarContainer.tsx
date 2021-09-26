import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import { getLeagueMatches } from "../../redux/leagueCalendarReducer";
import {appStateType} from "../../redux/reduxStore";
import LeagueCalendar from "./LeagueCalendar";

type mapPropsType = ReturnType<typeof mapStateToProps>
type dispatchPropsType = {
  getLeagueMatches: () => void
}

class LeagueCalendarContainer extends React.Component<mapPropsType & dispatchPropsType> {
  componentDidMount() {
    this.props.getLeagueMatches();
  }

  render() {
    return (
      <div>
        <LeagueCalendar matches={this.props.matches}/>
      </div>
    );
  }
}

const mapStateToProps = (state: appStateType) => {
  return {
    matches: state.leagueCalendar.matches
  }
}

const mapDispatchToProps = {
  getLeagueMatches
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LeagueCalendarContainer);
import React from "react";
import { Route, Switch } from "react-router-dom";
import Schedule from "./schedule/Schedule.js";
import QnABoard from "./board/QnABoard.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import MainPage from "../pages/MainPage.js";
import TeamPage from "../pages/TeamPage.js";
import MainSchedule from "./main/MainSchedule.js";
import MainTeamRank from "./main/MainTeamRank.js";
import BoardWrite from "./board/BoardWrite.js";
import BoardPage from "../pages/BoardPage.js";
import RecordPage from "../pages/RecordPage.js";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/teaminfo" component={TeamPage} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/record" component={RecordPage} />
        <Route path="/board" component={BoardPage} />
        <Route path="/board/qna" component={QnABoard} />
        <Route path="/404" component={NotFoundPage} />

        <Route path="/1" component={BoardWrite} />
        <Route path="/mainteamrank" component={MainTeamRank} />
        <Route path="/mainschedule" component={MainSchedule} />
      </Switch>
    );
  }
}

export default Routes;

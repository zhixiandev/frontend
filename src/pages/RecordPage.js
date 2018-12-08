import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TeamVersus from "../components/matchRecord/TeamVersus";
import TeamRank from "../components/matchRecord/TeamRank";
import { Card } from "mdbreact";

class RecordPage extends Component {
  render() {
    return (
      <Card className="mb-5">
        <Switch>
          <Route path="/record/versus" component={TeamVersus} />
          <Route path="/record/rank" component={TeamRank} />
        </Switch>
      </Card>
    );
  }
}

export default RecordPage;

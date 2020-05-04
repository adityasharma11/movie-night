import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import MovieItemPage from "./Pages/MovieItemPage/MovieItemPage";
import { connect } from "react-redux";
import SearchPage from "./Components/SearchPage/SearchPage";
import { compose } from "redux";
import { withRouter } from "react-router";
import ListOverview from "./Components/ListOverview/ListOverview";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies/:imdbId" component={MovieItemPage} />
          <Route exact path="/searchresults" component={SearchPage} />
          <Route exact path="/mylist" component={ListOverview} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);

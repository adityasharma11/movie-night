import React from "react";
import { connect } from "react-redux";
import { selectListItems } from "../../Redux/List/list-selectors";
import "./ListOverview.scss";
import ListItem from "../ListItem/ListItem";

const ListOverview = ({ listItems }) => {
  return (
    <div className="list-overview">
      <h1 className="list-overview__title">
        My Watchlist
      </h1>
      <div className="list-overview__outer">
        {listItems && listItems.length ?
          <div className="list-overview__inner">{listItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}</div> :
          <h1>No Items</h1>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  listItems: selectListItems(state)
});

export default connect(mapStateToProps)(ListOverview);

import { connect } from "react-redux";
import { setFilter } from "../../actions/visibility-filters";
import { VisibilityFilter } from "../../components/visibility-filters";
import { Store } from "../../stores";
const mapDispatchToProps = {
  //Binding addtoto action to onSubmit event
  setFilter: setFilter,
};
const mapStateToProps = (store: Store) => {
  return store.visibilityFilters;
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(VisibilityFilter);

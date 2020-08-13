import { connect } from "react-redux";
import { setFilter } from "../../actions/visibility-filters";
import { VisibilityFilter } from "../../components/visibility-filters";
import { Store } from "../../stores";
const mapDispatchToProps = {
  //Binding Setfilter action to Visible-filter trong component
  setFilter: setFilter,
};
const mapStateToProps = (store: Store) => {
  const { visibilityFilters } = store;
  return { filter: visibilityFilters };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(VisibilityFilter);

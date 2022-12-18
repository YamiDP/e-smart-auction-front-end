export const Filter = () => {
  return (
    <div id="dokan-store-listing-filter-wrap">
      <div className="left">
        <p className="item store-count">Total stores showing: 294 </p>
      </div>
      <div className="right">
        <div className="item">
          <div className="dokan-icons">
            <div className="dokan-icon-div" />
            <div className="dokan-icon-div" />
            <div className="dokan-icon-div" />
          </div>
          <button className="dokan-store-list-filter-button dokan-btn dokan-btn-theme">
            Filter{" "}
          </button>
        </div>
        <form
          name="stores_sorting"
          className="sort-by item"
          method="get"
          data-hs-cf-bound="true"
        >
          <label>Sort by:</label>
          <select
            name="stores_orderby"
            id="stores_orderby"
            aria-label="Sort by"
          >
            <option value="most_recent" selected="selected">
              Most Recent
            </option>
            <option value="total_orders">Most Popular</option>{" "}
          </select>
        </form>
        <div className="toggle-view item">
          <span
            className="dashicons dashicons-screenoptions active"
            data-view="grid-view"
          />
          <span
            className="dashicons dashicons-menu-alt"
            data-view="list-view"
          />
        </div>
      </div>
    </div>
  );
};

export const Form = () => {
  return (
    <form
      name="dokan_store_lists_filter_form"
      id="dokan-store-listing-filter-form-wrap"
      style={{ display: "none" }}
      data-hs-cf-bound="true"
    >
      <div className="store-search grid-item">
        <input
          type="search"
          className="store-search-input"
          name="dokan_seller_search"
          placeholder="Search Vendors"
        />
      </div>
      <div className="apply-filter">
        <button id="cancel-filter-btn" className="dokan-btn dokan-btn-theme">
          Cancel
        </button>
        <button
          id="apply-filter-btn"
          className="dokan-btn dokan-btn-theme"
          type="submit"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

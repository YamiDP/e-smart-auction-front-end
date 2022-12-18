export const Breadcum = ({ countView = null }) => {
  return (
    <div className="ibid-breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="breadcrumbs breadcrumbs-navxt"
              typeof="BreadcrumbList"
              vocab="https://schema.org/"
            >
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to iBid."
                  href="https://ibid.modeltheme.com"
                  className="home"
                >
                  <span property="name">iBid</span>
                </a>
                <meta property="position" content={1} />
              </span>{" "}
              /{" "}
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Shop."
                  href="https://ibid.modeltheme.com/shop/"
                  className="post post-page"
                >
                  <span property="name">Shop</span>
                </a>
                <meta property="position" content={2} />
              </span>{" "}
              /{" "}
              <span property="itemListElement" typeof="ListItem">
                <span property="name" className="post post-page current-item">
                  Products by Categories Grid
                </span>
                <meta
                  property="url"
                  content="https://ibid.modeltheme.com/shop/products-by-categories/"
                />
                <meta property="position" content={3} />
              </span>
            </div>
          </div>
          <div className="col-md-12">
            <h1>Products by Categories Grid</h1>
            {countView && (
              <div className="mt-view-count">
                <i className="far fa-eye" />
                <span className="views">{countView} views</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import { Breadcum } from "./Breadcum";

export const WrapperContent = ({
  children,
  propsBreadcum = { show: false },
  padding = 0,
  layout = 0,
}) => {
  const choosePadding = {
    0: "no-padding",
    1: "high-padding",
  };
  const Layout1 = (
    <div
      id="primary"
      className={`${choosePadding[padding]} content-area no-sidebar`}
    >
      <div className="container">
        <main id="main" className="col-md_12 site-main main-content">
          <article className="page type-page status-publish hentry">
            <div className="entry-content">{children}</div>
          </article>
        </main>
      </div>
    </div>
  );
  const Layout2 = (
    <div id="primary" className={`content-area`}>
      <main id="main" className="site-main" role="main">
        <div className={`${choosePadding[padding]}`}>{children}</div>
      </main>
    </div>
  );
  const chooseLayout = {
    0: Layout1,
    1: Layout2,
  };
  return (
    <>
      {propsBreadcum.show && <Breadcum {...propsBreadcum} />}
      {chooseLayout[layout]}
    </>
  );
};

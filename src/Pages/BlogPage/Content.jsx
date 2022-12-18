import { useMemo } from "react";
import { WrapperContent } from "../../Elements/WrapperContent";
const fakeData = [
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
  {
    src: "https://ibid.modeltheme.com/wp-content/uploads/2019/09/blogpost6-1100x600.jpg",
    href: "https://ibid.modeltheme.com/a-smartphone-keeps-your-friend-away/",
  },
];
export const Content = () => {
  const View = useMemo(
    () =>
      fakeData.map((item, index) => (
        <div
          key={index}
          data-id="id-5608"
          className="lvca-grid-item lvca-portfolio-item  term-380"
        >
          <article
            id="post-5608"
            className="post-5608 post type-post status-publish format-standard has-post-thumbnail hentry category-smart tag-os tag-phone tag-technology"
          >
            <div className="lvca-project-image">
              <img
                width={1100}
                height={600}
                src={item.src}
                className="attachment-ibid_posts_1100x600 size-ibid_posts_1100x600 wp-post-image"
                alt=""
              />
            </div>
            <div className="lvca-entry-text-wrap ">
              <h3 className="entry-title">
                <a
                  href={item.href}
                  title="A Phone Keeps Your Friends Away"
                  rel="
                                        bookmark"
                >
                  A Phone Keeps Your Friends Away
                </a>
              </h3>
              <div className="lvca-entry-meta">
                <span className="author vcard">
                  By{" "}
                  <a
                    className="url fn n"
                    href="https://ibid.modeltheme.com/author/admin/"
                    title="James Colins"
                  >
                    James Colins
                  </a>
                </span>
                <span className="lvca-terms">
                  <a href="https://ibid.modeltheme.com/category/smart/">
                    Smart
                  </a>
                </span>
              </div>
              <div className="entry-summary">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </div>
            </div>
          </article>
        </div>
      )),
    []
  );
  return (
    <WrapperContent padding="1">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="boxed-blog wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="lvca-portfolio-wrap lvca-gapless-grid">
                <div
                  id="lvca-portfolio-636b3b3125d33"
                  className="lvca-portfolio js-isotope lvca-masonry lvca-grid-container  lvca-grid-desktop-3 lvca-grid-tablet-2 lvca-grid-mobile-1"
                  data-gutter={20}
                  data-tablet_gutter={10}
                  data-tablet_width={800}
                  data-mobile_gutter={10}
                  data-mobile_width={480}
                  data-isotope-options='{ "itemSelector": ".lvca-portfolio-item", "layoutMode": "masonry" }'
                >
                  {View}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix" />
    </WrapperContent>
  );
};

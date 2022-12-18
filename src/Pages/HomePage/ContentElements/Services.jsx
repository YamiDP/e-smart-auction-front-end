import { useMemo } from "react";

const fakeData = [
  {
    link: "https://ibid.modeltheme.com",
    icon: "https://ibid.modeltheme.com/wp-content/uploads/2019/08/support_icons.png",
    title: "Call Center",
    content: "Completely synergize",
  },
  {
    link: "https://ibid.modeltheme.com",
    icon: "https://ibid.modeltheme.com/wp-content/uploads/2019/08/support_icons.png",
    title: "Call Center",
    content: "Completely synergize",
  },
  {
    link: "https://ibid.modeltheme.com",
    icon: "https://ibid.modeltheme.com/wp-content/uploads/2019/08/support_icons.png",
    title: "Call Center",
    content: "Completely synergize",
  },
  {
    link: "https://ibid.modeltheme.com",
    icon: "https://ibid.modeltheme.com/wp-content/uploads/2019/08/support_icons.png",
    title: "Call Center",
    content: "Completely synergize",
  },
];

export const Service = () => {
  const View = useMemo(
    () =>
      fakeData.map((item, index) => (
        <div key={index} className="wpb_column vc_column_container vc_col-sm-3">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="mt-icon-listgroup-item wow ">
                <a href={item.link}>
                  <div className="mt-icon-listgroup-holder">
                    <div className="mt-icon-listgroup-icon-holder-inner">
                      <img
                        alt="list"
                        style={{ marginRight: 20 }}
                        className="mt-image-list"
                        src={item.icon}
                      />
                    </div>
                    <div className="mt-icon-listgroup-content-holder-inner">
                      <p
                        className="mt-icon-listgroup-title"
                        style={{ fontSize: 20, color: "#343e47" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-icon-listgroup-text"
                        style={{ fontSize: 14, color: "#606060" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )),
    []
  );
  return <div className="vc_row wpb_row vc_row-fluid" style={{marginTop: "80px"}}>{View}</div>;
};

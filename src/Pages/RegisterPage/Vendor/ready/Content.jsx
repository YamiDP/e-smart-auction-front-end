export const Content = () => {
    return (
        <>
  <h1 id="wc-logo">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>iBid</font>
    </font>
  </h1>
  <ol className="wc-setup-steps">
    <li
      className="
            done                "
    >
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>Cửa hàng</font>
      </font>
    </li>
    <li
      className="
            done                "
    >
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>Thanh toán</font>
      </font>
    </li>
    <li
      className="
            active                "
    >
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>Sẳn sàng!</font>
      </font>
    </li>
  </ol>
  <div className="wc-setup-content">
    <div className="dokan-setup-done">
      <img src="./../../../image/dokan-checked.png" alt="thiết lập dokan" />
      <h1>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            Cửa hàng của bạn đã sẵn sàng!
          </font>
        </font>
      </h1>
    </div>
    <div className="dokan-setup-done-content">
      <p className="wc-setup-actions step">
        <a
          className="button button-primary dokan-btn-theme"
          href="#/dashboard/"
        >
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              Chuyển đến Bảng điều khiển cửa hàng của bạn!
            </font>
          </font>
        </a>
      </p>
    </div>
  </div>{" "}
  <a className="wc-return-to-dashboard" href="#">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>Quay lại Thị trường</font>
    </font>
  </a>
  <div id="tiptip_holder" style={{ maxWidth: 200 }}>
    <div id="tiptip_arrow">
      <div id="tiptip_arrow_inner" />
    </div>
    <div id="tiptip_content" />
  </div>
  <div
    id="eJOY__extension_root"
    className="eJOY__extension_root_class"
    style={{ all: "unset" }}
  />
  <iframe
    id="nr-ext-rsicon"
    style={{
      position: "absolute",
      display: "none",
      width: 50,
      height: 50,
      zIndex: 2147483647,
      borderStyle: "none",
      background: "transparent"
    }}
  />
  {/* Code injected by live-server */}
  <div id="goog-gt-tt" className="skiptranslate" dir="ltr">
    <div style={{ padding: 8 }}>
      <div>
        <div className="logo">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png"
            width={20}
            height={20}
            alt="Google Translate"
          />
        </div>
      </div>
    </div>
    <div className="top" style={{ padding: 8, float: "left", width: "100%" }}>
      <h1 className="title gray">Original text</h1>
    </div>
    <div className="middle" style={{ padding: 8 }}>
      <div className="original-text" />
    </div>
    <div className="bottom" style={{ padding: 8 }}>
      <div className="activity-links">
        <span className="activity-link">Contribute a better translation</span>
      </div>
      <div className="started-activity-container">
        <hr
          style={{
            color: "#CCC",
            backgroundColor: "#CCC",
            height: 1,
            border: "none"
          }}
        />
        <div className="activity-root" />
      </div>
    </div>
    <div className="status-message" style={{ display: "none" }} />
  </div>
  <div style={{ position: "absolute", top: 0, display: "block !important" }} />
  <div className="goog-te-spinner-pos">
    <div className="goog-te-spinner-animation">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="goog-te-spinner"
        width="96px"
        height="96px"
        viewBox="0 0 66 66"
      >
        <circle
          className="goog-te-spinner-path"
          fill="none"
          strokeWidth={6}
          strokeLinecap="round"
          cx={33}
          cy={33}
          r={30}
        ></circle>
      </svg>
    </div>
  </div>
</>

    );
  };
  
export const FormContact = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1566807418506 vc_row-has-fill"
    >
      <div className="wpb_column vc_column_container vc_col-sm-2">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="box-shadow-column wpb_column vc_column_container vc_col-sm-10 vc_col-has-fill">
        <div className="vc_column-inner vc_custom_1567589730737">
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element ">
              <div className="wpb_wrapper">
                <h1>
                  <strong>Get in Touch</strong>
                </h1>
                <p>Feel free to drop us a line below!</p>
              </div>
            </div>
            <div className="vc_empty_space" style={{ height: 28 }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div className="wpb_text_column wpb_content_element  vc_custom_1566384223625">
              <div className="wpb_wrapper">
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f4419-p1362-o2"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                    <ul />
                  </div>
                  <form
                    action="/contact/#wpcf7-f4419-p1362-o2"
                    method="post"
                    className="wpcf7-form init"
                    noValidate="novalidate"
                    data-status="init"
                    data-hs-cf-bound="true"
                  >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" defaultValue={4419} />
                      <input
                        type="hidden"
                        name="_wpcf7_version"
                        defaultValue="5.6.1"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_locale"
                        defaultValue="en_US"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        defaultValue="wpcf7-f4419-p1362-o2"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_container_post"
                        defaultValue={1362}
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_posted_data_hash"
                        defaultValue=""
                      />
                    </div>
                    <div className="ibid-contact-form">
                      <div className="col-md-6">
                        <label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="first-name"
                          >
                            <input
                              type="text"
                              name="first-name"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Your Name"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email"
                          >
                            <input
                              type="email"
                              name="email"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Email Adress"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-md-12">
                        <label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="your-message"
                          >
                            <textarea
                              name="your-message"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Your Message"
                              defaultValue={""}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="wpcf7-form-control wpcf7-submit"
                        >
                          SEND MESSAGE{" "}
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

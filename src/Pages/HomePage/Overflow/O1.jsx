export const O1 = () => {
  return (
    <div className="modeltheme-modal-holder">
      <div className="modeltheme-overlay-inner" />
      <div className="modeltheme-modal-container">
        <div className="modeltheme-modal" id="modal-log-in">
          <div className="modeltheme-content" id="login-modal-content">
            <h3 className="relative text-center">Access Your Account </h3>
            <div className="modal-content row">
              <div className="col-md-12">
                <div className="woocommerce-notices-wrapper" />
                <div
                  className="u-columns col2-set ibid-set-login row"
                  id="customer_login"
                >
                  <div className="u-column1 col-1  col-md-6">
                    <h2>Login</h2>
                    <form
                      id="login"
                      className="woocommerce-form woocommerce-form-login login"
                      method="post"
                      data-hs-cf-bound="true"
                    >
                      <p className="status" />
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="username">
                          Username or email address&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          defaultValue=""
                        />{" "}
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password">
                          Password&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </p>
                      <p className="form-row">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                          <input
                            className="woocommerce-form__input woocommerce-form__input-checkbox"
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            defaultValue="forever"
                          />{" "}
                          <span>Remember me</span>
                        </label>
                        <input
                          type="hidden"
                          id="woocommerce-login-nonce"
                          name="woocommerce-login-nonce"
                          defaultValue="3c37da26e6"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/"
                        />{" "}
                        <button
                          type="submit"
                          className="woocommerce-button button woocommerce-form-login__submit"
                          name="login"
                          value="Log in"
                        >
                          Log in
                        </button>
                      </p>
                      <p className="woocommerce-LostPassword lost_password">
                        <a href="https://ibid.modeltheme.com/my-account/lost-password/">
                          Lost your password?
                        </a>
                      </p>
                      <input
                        type="hidden"
                        id="security"
                        name="security"
                        defaultValue="6a28e22dc5"
                      />
                      <input
                        type="hidden"
                        name="_wp_http_referer"
                        defaultValue="/"
                      />{" "}
                    </form>
                  </div>
                  <div className="u-column2 col-2 col-md-6">
                    <h2>Register</h2>
                    <form
                      id="register"
                      method="post"
                      className="woocommerce-form woocommerce-form-register register"
                      data-hs-cf-bound="true"
                    >
                      <p className="status" />
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_username">
                          Username&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="reg_username"
                          autoComplete="username"
                          defaultValue=""
                        />{" "}
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Email address&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="email"
                          id="reg_email"
                          autoComplete="email"
                          defaultValue=""
                        />{" "}
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_password">
                          Password&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="password"
                          id="reg_password"
                          autoComplete="new-password"
                        />
                      </p>
                      <div
                        className="show_if_seller"
                        style={{ display: "none" }}
                      >
                        <div className="split-row form-row-wide">
                          <p className="form-row form-group">
                            <label htmlFor="first-name">
                              First Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="input-text form-control"
                              name="fname"
                              id="first-name"
                              defaultValue=""
                              required="required"
                              disabled=""
                            />
                          </p>
                          <p className="form-row form-group">
                            <label htmlFor="last-name">
                              Last Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="input-text form-control"
                              name="lname"
                              id="last-name"
                              defaultValue=""
                              required="required"
                              disabled=""
                            />
                          </p>
                        </div>
                        <p className="form-row form-group form-row-wide">
                          <label htmlFor="company-name">
                            Shop Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="input-text form-control"
                            name="shopname"
                            id="company-name"
                            defaultValue=""
                            required="required"
                            disabled=""
                          />
                        </p>
                        <p className="form-row form-group form-row-wide">
                          <label htmlFor="seller-url" className="pull-left">
                            Shop URL <span className="required">*</span>
                          </label>
                          <strong id="url-alart-mgs" className="pull-right" />
                          <input
                            type="text"
                            className="input-text form-control"
                            name="shopurl"
                            id="seller-url"
                            defaultValue=""
                            required="required"
                            disabled=""
                          />
                          <small>
                            https://ibid.modeltheme.com/store/
                            <strong id="url-alart" />
                          </small>
                        </p>
                        <p className="form-row form-group form-row-wide">
                          <label htmlFor="shop-phone">
                            Phone Number<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="input-text form-control"
                            name="phone"
                            id="shop-phone"
                            defaultValue=""
                            required="required"
                            disabled=""
                          />
                        </p>
                      </div>
                      <p className="form-row form-group user-role">
                        <label className="radio">
                          <input
                            type="radio"
                            name="role"
                            defaultValue="customer"
                            defaultChecked="checked"
                          />
                          I am a customer{" "}
                        </label>
                        <label className="radio">
                          <input
                            type="radio"
                            name="role"
                            defaultValue="seller"
                          />
                          I am a vendor{" "}
                        </label>
                      </p>
                      <div className="woocommerce-privacy-policy-text" />
                      <p className="woocommerce-form-row form-row">
                        <input
                          type="hidden"
                          id="woocommerce-register-nonce"
                          name="woocommerce-register-nonce"
                          defaultValue="950a0a43c4"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/"
                        />{" "}
                        <button
                          type="submit"
                          className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                          name="register"
                          value="Register"
                        >
                          Register
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
                <div
                  className="nsl-container nsl-container-block"
                  data-align="left"
                >
                  <div className="nsl-container-buttons">
                    <a
                      href="https://ibid.modeltheme.com/wp-login.php?loginSocial=facebook&redirect=https%3A%2F%2Fibid.modeltheme.com%2F"
                      rel="nofollow"
                      aria-label="Continue with <b>Facebook</b>"
                      data-plugin="nsl"
                      data-action="connect"
                      data-provider="facebook"
                      data-popupwidth={600}
                      data-popupheight={679}
                    >
                      <div
                        className="nsl-button nsl-button-default nsl-button-facebook"
                        data-skin="dark"
                        style={{ backgroundColor: "#1877F2" }}
                      >
                        <div className="nsl-button-svg-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1365.3 1365.3"
                            height="1365.3"
                            width="1365.3"
                          >
                            <path
                              d="M1365.3 682.7A682.7 682.7 0 10576 1357V880H402.7V682.7H576V532.3c0-171.1 102-265.6 257.9-265.6 74.6 0 152.8 13.3 152.8 13.3v168h-86.1c-84.8 0-111.3 52.6-111.3 106.6v128h189.4L948.4 880h-159v477a682.8 682.8 0 00576-674.3"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                        <div className="nsl-button-label-container">
                          Continue with <b>Facebook</b>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

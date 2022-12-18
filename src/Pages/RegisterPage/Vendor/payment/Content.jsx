export const Content = () => {
    return (
        <div className="wc-setup-content">
  <h1>Thiết lập thanh toán</h1>
  <form method="post">
    <table className="form-table">
      <tbody>
        <tr>
          <th scope="row">
            <label>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>PayPal</font>
              </font>
            </label>
          </th>
          <td>
            <div className="dokan-form-group">
              <div className="dokan-w8">
                <div className="dokan-input-group">
                  <span className="dokan-input-group-addon">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>E-mail</font>
                    </font>
                  </span>
                  <input
                    defaultValue=""
                    name="settings[paypal][email]"
                    className="dokan-form-control email"
                    placeholder="you@domain.com"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p className="wc-setup-actions step">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          <input
            type="submit"
            className="button-primary button button-large button-next payment-continue-btn dokan-btn-theme"
            defaultValue="Tiếp tục"
            name="save_step"
          />
        </font>
      </font>
      <a
        href="/?page=dokan-seller-setup&step=next_steps"
        className="button button-large button-next payment-step-skip-btn dokan-btn-theme"
      >
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Bỏ qua bước này</font>
        </font>
      </a>
      <input
        type="hidden"
        id="_wpnonce"
        name="_wpnonce"
        defaultValue="3c55fc951b"
      />
      <input
        type="hidden"
        name="_wp_http_referer"
        defaultValue="/?page=dokan-seller-setup&step=payment"
      />
    </p>
  </form>
</div>

    );
  };
  
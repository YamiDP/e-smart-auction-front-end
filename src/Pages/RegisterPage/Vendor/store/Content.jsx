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
              active                "
      >
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Cửa hàng</font>
        </font>
      </li>
      <li
        className="
                              "
      >
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Thanh toán</font>
        </font>
      </li>
      <li
        className="
                              "
      >
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Sẳn sàng!</font>
        </font>
      </li>
    </ol>
    <div className="wc-setup-content">
      <h1>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Thiết lập cửa hàng</font>
        </font>
      </h1>
      <form method="post" className="dokan-seller-setup-form">
        <table className="form-table">
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="store_ppp">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Tên cửa hàng</font>
                  </font>
                </label>
              </th>
              <td>
                <input
                  type="text"
                  id="store_ppp"
                  name="store_ppp"
                  defaultValue=""
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="address[street_1]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Số nhà, tên đường
                    </font>
                  </font>
                </label>
              </th>
              <td>
                <input
                  type="text"
                  id="address[street_1]"
                  name="address[street_1]"
                  defaultValue=""
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="address[zip]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>ZipCode</font>
                  </font>
                </label>
              </th>
              <td>
                <input
                  type="text"
                  id="address[zip]"
                  name="address[zip]"
                  defaultValue=""
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="address[country]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Tỉnh/Thành Phố
                    </font>
                  </font>
                </label>
              </th>
              <td>
                <select
                  name="address[country]"
                  className="wc-enhanced-select country_to_state select2-hidden-accessible enhanced"
                  id="address[country]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">- Chọn địa điểm -</option>
                  <optgroup label="------------------------------">
                    <option value="AF">Áp-ga-ni-xtan</option>
                    <option value="AX">Quần đảo Aland</option>
                    <option value="AL">anbani</option>
                    <option value="DZ">An-giê-ri</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Ăng-gô-la</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Nam Cực</option>
                    <option value="AG">Antigua và Barbuda</option>
                    <option value="AR">Ác-hen-ti-na</option>
                    <option value="AM">Ác-mê-ni-a</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Châu Úc</option>
                    <option value="AT">Áo</option>
                    <option value="AZ">A-déc-bai-gian</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Băng-la-đét</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Bêlarut</option>
                    <option value="PW">belau</option>
                    <option value="BE">nước Bỉ</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Bénin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bu-tan</option>
                    <option value="BO">Bôlivia</option>
                    <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
                    <option value="BA">Bosnia và Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Đảo Bouvet</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">Lãnh thổ Ấn Độ Dương thuộc Anh</option>
                    <option value="BN">Bru-nây</option>
                    <option value="BG">Bulgari</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Campuchia</option>
                    <option value="CM">Camerun</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Mũi Verde</option>
                    <option value="KY">Quần đảo Cayman</option>
                    <option value="CF">Cộng hòa trung phi</option>
                    <option value="TD">Tchad</option>
                    <option value="CL">chi-lê</option>
                    <option value="CN">Trung Quốc</option>
                    <option value="CX">đảo giáng sinh</option>
                    <option value="CC">Quần đảo Cocos (Keeling)</option>
                    <option value="CO">cô-lôm-bi-a</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Công-gô (Brazzaville)</option>
                    <option value="CD">Công-gô (Kinshasa)</option>
                    <option value="CK">Quần đảo Cook</option>
                    <option value="CR">Cô-xta Ri-ca</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Rượu cam bì</option>
                    <option value="CY">Síp</option>
                    <option value="CZ">Cộng hòa Séc</option>
                    <option value="DK">Đan mạch</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Đô-mi-ni-ca</option>
                    <option value="DO">Cộng hòa Dominica</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Ai Cập</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="SZ">Eswatini</option>
                    <option value="ET">Ê-ti-ô-pi-a</option>
                    <option value="FK">Quần đảo Falkland</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="CI">Ivory Coast</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="KP">North Korea</option>
                    <option value="MK">North Macedonia</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PS">Palestinian Territory</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="ST">São Tomé and Príncipe</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="SX">Saint Martin (Dutch part)</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia/Sandwich Islands</option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom (UK)</option>
                    <option value="US">United States (US)</option>
                    <option value="UM">
                      United States (US) Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands (British)</option>
                    <option value="VI">Virgin Islands (US)</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Phía tây Sahara</option>
                    <option value="YE">Y-ê-men</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabuê</option>
                  </optgroup>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  style={{ width: 400 }}
                >
                  <span className="selection"></span>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="address[country]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Quận/huyện</font>
                  </font>
                </label>
              </th>
              <td>
                <select
                  name="address[country]"
                  className="wc-enhanced-select country_to_state select2-hidden-accessible enhanced"
                  id="address[country]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">- Chọn địa điểm -</option>
                  <optgroup label="------------------------------">
                    <option value="AF">Áp-ga-ni-xtan</option>
                    <option value="AX">Quần đảo Aland</option>
                    <option value="AL">anbani</option>
                    <option value="DZ">An-giê-ri</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Ăng-gô-la</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Nam Cực</option>
                    <option value="AG">Antigua và Barbuda</option>
                    <option value="AR">Ác-hen-ti-na</option>
                    <option value="AM">Ác-mê-ni-a</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Châu Úc</option>
                    <option value="AT">Áo</option>
                    <option value="AZ">A-déc-bai-gian</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Băng-la-đét</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Bêlarut</option>
                    <option value="PW">belau</option>
                    <option value="BE">nước Bỉ</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Bénin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bu-tan</option>
                    <option value="BO">Bôlivia</option>
                    <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
                    <option value="BA">Bosnia và Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Đảo Bouvet</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">Lãnh thổ Ấn Độ Dương thuộc Anh</option>
                    <option value="BN">Bru-nây</option>
                    <option value="BG">Bulgari</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Campuchia</option>
                    <option value="CM">Camerun</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Mũi Verde</option>
                    <option value="KY">Quần đảo Cayman</option>
                    <option value="CF">Cộng hòa trung phi</option>
                    <option value="TD">Tchad</option>
                    <option value="CL">chi-lê</option>
                    <option value="CN">Trung Quốc</option>
                    <option value="CX">đảo giáng sinh</option>
                    <option value="CC">Quần đảo Cocos (Keeling)</option>
                    <option value="CO">cô-lôm-bi-a</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Công-gô (Brazzaville)</option>
                    <option value="CD">Công-gô (Kinshasa)</option>
                    <option value="CK">Quần đảo Cook</option>
                    <option value="CR">Cô-xta Ri-ca</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Rượu cam bì</option>
                    <option value="CY">Síp</option>
                    <option value="CZ">Cộng hòa Séc</option>
                    <option value="DK">Đan mạch</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Đô-mi-ni-ca</option>
                    <option value="DO">Cộng hòa Dominica</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Ai Cập</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="SZ">Eswatini</option>
                    <option value="ET">Ê-ti-ô-pi-a</option>
                    <option value="FK">Quần đảo Falkland</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="CI">Ivory Coast</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="KP">North Korea</option>
                    <option value="MK">North Macedonia</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PS">Palestinian Territory</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="ST">São Tomé and Príncipe</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="SX">Saint Martin (Dutch part)</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia/Sandwich Islands</option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom (UK)</option>
                    <option value="US">United States (US)</option>
                    <option value="UM">
                      United States (US) Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands (British)</option>
                    <option value="VI">Virgin Islands (US)</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Phía tây Sahara</option>
                    <option value="YE">Y-ê-men</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabuê</option>
                  </optgroup>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  style={{ width: 400 }}
                >
                  <span className="selection"></span>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="address[country]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Phường/xã</font>
                  </font>
                </label>
              </th>
              <td>
                <select
                  name="address[country]"
                  className="wc-enhanced-select country_to_state select2-hidden-accessible enhanced"
                  id="address[country]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">- Chọn địa điểm -</option>
                  <optgroup label="------------------------------">
                    <option value="AF">Áp-ga-ni-xtan</option>
                    <option value="AX">Quần đảo Aland</option>
                    <option value="AL">anbani</option>
                    <option value="DZ">An-giê-ri</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Ăng-gô-la</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Nam Cực</option>
                    <option value="AG">Antigua và Barbuda</option>
                    <option value="AR">Ác-hen-ti-na</option>
                    <option value="AM">Ác-mê-ni-a</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Châu Úc</option>
                    <option value="AT">Áo</option>
                    <option value="AZ">A-déc-bai-gian</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Băng-la-đét</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Bêlarut</option>
                    <option value="PW">belau</option>
                    <option value="BE">nước Bỉ</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Bénin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bu-tan</option>
                    <option value="BO">Bôlivia</option>
                    <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
                    <option value="BA">Bosnia và Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Đảo Bouvet</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">Lãnh thổ Ấn Độ Dương thuộc Anh</option>
                    <option value="BN">Bru-nây</option>
                    <option value="BG">Bulgari</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Campuchia</option>
                    <option value="CM">Camerun</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Mũi Verde</option>
                    <option value="KY">Quần đảo Cayman</option>
                    <option value="CF">Cộng hòa trung phi</option>
                    <option value="TD">Tchad</option>
                    <option value="CL">chi-lê</option>
                    <option value="CN">Trung Quốc</option>
                    <option value="CX">đảo giáng sinh</option>
                    <option value="CC">Quần đảo Cocos (Keeling)</option>
                    <option value="CO">cô-lôm-bi-a</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Công-gô (Brazzaville)</option>
                    <option value="CD">Công-gô (Kinshasa)</option>
                    <option value="CK">Quần đảo Cook</option>
                    <option value="CR">Cô-xta Ri-ca</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Rượu cam bì</option>
                    <option value="CY">Síp</option>
                    <option value="CZ">Cộng hòa Séc</option>
                    <option value="DK">Đan mạch</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Đô-mi-ni-ca</option>
                    <option value="DO">Cộng hòa Dominica</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Ai Cập</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="SZ">Eswatini</option>
                    <option value="ET">Ê-ti-ô-pi-a</option>
                    <option value="FK">Quần đảo Falkland</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="CI">Ivory Coast</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="KP">North Korea</option>
                    <option value="MK">North Macedonia</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PS">Palestinian Territory</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="ST">São Tomé and Príncipe</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="SX">Saint Martin (Dutch part)</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia/Sandwich Islands</option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom (UK)</option>
                    <option value="US">United States (US)</option>
                    <option value="UM">
                      United States (US) Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands (British)</option>
                    <option value="VI">Virgin Islands (US)</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Phía tây Sahara</option>
                    <option value="YE">Y-ê-men</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabuê</option>
                  </optgroup>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  style={{ width: 400 }}
                >
                  <span className="selection"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="wc-setup-actions step">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              <input
                type="submit"
                className="button-primary button button-large button-next store-step-continue dokan-btn-theme"
                defaultValue="Tiếp tục"
                name="save_step"
              />
            </font>
          </font>
          <a
            href="/?page=dokan-seller-setup&step=payment"
            className="button button-large button-next store-step-skip-btn dokan-btn-theme"
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
            defaultValue="/?page=dokan-seller-setup&step=store"
          />
        </p>
      </form>
    </div>
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

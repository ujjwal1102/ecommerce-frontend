import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Admin Profile</h3>
              </div>
            </div>
          </div>{" "}
          {/* Row end  */}
          <div className="row g-3">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="card profile-card flex-column mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Profile</h6>
                </div>
                <div className="card-body d-flex profile-fulldeatil flex-column">
                  <div className="profile-block text-center w220 mx-auto">
                    <a href="#">
                      <img
                        src="assets/images/lg/avatar4.svg"
                        alt=""
                        className="avatar xl rounded img-thumbnail shadow-sm"
                      />
                    </a>
                    <button
                      className="btn btn-primary"
                      style={{ position: "absolute", top: 15, right: 15 }}
                      data-bs-toggle="modal"
                      data-bs-target="#editprofile"
                    >
                      <i className="icofont-edit" />
                    </button>
                    <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                      <span className="text-muted small">
                        Admin ID : PXL-0001
                      </span>
                    </div>
                  </div>
                  <div className="profile-info w-100">
                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                      Adrian Allan
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                      24 years, California
                    </span>
                    <p className="mt-2">
                      Duis felis ligula, pharetra at nisl sit amet, ullamcorper
                      fringilla mi. Cras luctus metus non enim porttitor
                      sagittis. Sed tristique scelerisque arcu id dignissim.
                    </p>
                    <div className="row g-2 pt-2">
                      <div className="col-xl-12">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-touch-phone" />
                          <span className="ms-2">202-555-0174 </span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="d-flex align-items-center">
                          <i className="icofont-email" />
                          <span className="ms-2">adrianallan@gmail.com</span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="d-flex align-items-center">
                          <i className="icofont-birthday-cake" />
                          <span className="ms-2">19/03/1980</span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="d-flex align-items-center">
                          <i className="icofont-address-book" />
                          <span className="ms-2">
                            2734 West Fork Street,EASTON 02334.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Payment Method</h6>
                </div>
                <div className="card-body">
                  <div className="payment-info">
                    <h5 className="payment-name text-muted">
                      <i className="icofont-visa-alt fs-3" /> Visa *******7548
                    </h5>
                    <span>Next billing charged $48</span>
                    <br />
                    <em className="text-muted">Autopay on July 20, 2021</em>
                    <a
                      href="javascript:void(0);"
                      className="edit-payment-info text-secondary"
                    >
                      Edit Payment Info
                    </a>
                  </div>
                  <p className="mt-3">
                    <a href="javascript:void(0);" className="btn btn-primary">
                      {" "}
                      Add Payment Info
                    </a>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5>Notification preferences</h5>
                  <span className="text-muted">
                    Control all our newsletter and email related notifications
                    to your email
                  </span>
                  <div className="mt-4">
                    <div className="form-check form-switch mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="np-Newsletter"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="np-Newsletter"
                      >
                        Activity Notifications
                      </label>
                    </div>
                    <div className="form-check form-switch mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="np-Notifications"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="np-Notifications"
                      >
                        Comment Notifications
                      </label>
                    </div>
                    <div className="form-check form-switch mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="np-Preferences"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="np-Preferences"
                      >
                        Email Preferences
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Profile Settings</h6>
                </div>
                <div className="card-body">
                  <form className="row g-4">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">User Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="Password" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Company Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Contact Person</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Mobile Number <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <label className="form-label">Website Url</label>
                      <div className="input-group">
                        <span className="input-group-text">http://</span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select className="form-control">
                          <option value="">-- Select Country --</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
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
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
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
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
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
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
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
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
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
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="form-label">State/Province</label>
                        <select className="form-control">
                          <option>California</option>
                          <option>Alaska</option>
                          <option>Alabama</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button
                        type="button"
                        className="btn btn-primary text-uppercase px-5"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card auth-detailblock">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Authentication Details</h6>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#authchange"
                  >
                    <i className="icofont-edit" />
                  </button>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label col-6 col-sm-5">
                        User Name :
                      </label>
                      <span>
                        <strong>Adrian007</strong>
                      </span>
                    </div>
                    <div className="col-12">
                      <label className="form-label col-6 col-sm-5">
                        Login Password :
                      </label>
                      <span>
                        <strong>Abc*******</strong>
                      </span>
                    </div>
                    <div className="col-12">
                      <label className="form-label col-6 col-sm-5">
                        Last Login:
                      </label>
                      <span>
                        <strong>128.456.89 (Apple) safari</strong>
                      </span>
                    </div>
                    <div className="col-12">
                      <label className="form-label col-6 col-sm-5">
                        Last Password change:
                      </label>
                      <span>
                        <strong>3 Month Ago</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

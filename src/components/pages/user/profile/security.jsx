const SecurityInfo = () => {
  return (
    <>
      <div className="tab-pane" id="security">
        <h4>SECURITY SETTINGS</h4>
        <hr />
        <form>
          <div className="form-outline mb-3">
            <label className="form-label">Change Password</label>
            <input
              type="text"
              className={`form-control autosize ${"" ? "placeholder" : ""}`}
              placeholder="Enter your old password"
            />
            <input
              type="text"
              className={`form-control autosize mt-1 ${
                "" ? "placeholder" : ""
              }`}
              placeholder="New password"
            />
            <input
              type="text"
              className={`form-control autosize mt-1 ${
                "" ? "placeholder" : ""
              }`}
              placeholder="Confirm new password"
            />
          </div>
        </form>
        <hr />
        <form>
          <div className="form-outline mb-3">
            <label className="form-label">Two Factor Authentication</label>
            <div>
              <button className="btn btn-info" type="button">
                Enable two-factor authentication
              </button>
              <p className="small text-muted mt-2">
                Two-factor authentication adds an additional layer of security
                to your account by requiring more than just a password to log
                in.
              </p>
            </div>
          </div>
        </form>
        <hr />
        <form>
          <div className="form-outline mb-3 mb-0">
            <label className="d-block">Sessions</label>
            <p className="small text-muted ">
              This is a list of devices that have logged into your account.
              Revoke any sessions that you do not recognize.
            </p>
            <ul className="list-group list-group-sm">
              <li className="list-group-item has-icon">
                <div>
                  <h6 className="mb-0">San Francisco City 190.24.335.55</h6>
                  <small className="text-muted">
                    Your current session seen in United States
                  </small>
                </div>
                <button className="btn btn-dark btn-sm mt-3" type="button">
                  More info
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};
export default SecurityInfo;

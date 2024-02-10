const Notification = () => {
  return (
    <>
      <div className="tab-pane" id="notification">
        <h4>NOTIFICATION SETTINGS</h4>
        <hr />
        <form>
          <div className="form-outline mb-3">
            <label className="form-label ">Security Alerts</label>
            <div className="small text-muted mb-3">
              Receive security alert notifications via email
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Email each time a vulnerability is found
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Email a digest summary of vulnerability
              </label>
            </div>
          </div>
          <div className="form-outline mb-3 ">
            <label className="form-label">SMS Notifications</label>
            <ul className="list-group list-group-sm">
              <li className="list-group-item has-icon">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customSwitch1">
                    Comments
                  </label>
                </div>
              </li>
              <li className="list-group-item has-icon">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch2"
                  />
                  <label className="form-check-label" htmlFor="customSwitch2">
                    Updates From People
                  </label>
                </div>
              </li>
              <li className="list-group-item has-icon">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customSwitch3">
                    Reminders
                  </label>
                </div>
              </li>
              <li className="list-group-item has-icon">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch4"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customSwitch4">
                    Events
                  </label>
                </div>
              </li>
              <li className="list-group-item has-icon">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch5"
                  />
                  <label className="form-check-label" htmlFor="customSwitch5">
                    Pages You Follow
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};
export default Notification;

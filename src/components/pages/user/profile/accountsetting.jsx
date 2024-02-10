import React from "react";
const AccountSetting = () => {
  return (
    <>
      <div className="tab-pane" id="account">
        <h4>ACCOUNT SETTINGS</h4>
        <hr />
        <form>
          <div className="form-outline mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control autosize ${
                "" ? "placeholder" : ""
              }`}
              id="username"
              aria-describedby="usernameHelp"
              placeholder="Enter your username"
              defaultValue="kennethvaldez"
            />
            <small id="usernameHelp" className="form-text text-muted">
              After changing your username, your old username becomes available
              for anyone else to claim.
            </small>
          </div>
          <hr />
          <div className="form-outline mb-3">
            <label className="d-block text-danger">Delete Account</label>
            <p className="form-text text-muted">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
          <button className="btn btn-danger" type="button">
            Delete Account
          </button>
        </form>
      </div>
    </>
  );
};
export default AccountSetting;

import React from 'react'

export default function Content() {
  return (
    <>
	<div>
  <div className="page-content">
    <div className="content-wrapper">
      <div className="content-inner">
        <div className="content d-flex justify-content-center align-items-center">
          <form className="login-form" action="index.html">
            <div className="card mb-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <div className="d-inline-flex align-items-center justify-content-center mb-4 mt-2">
                    <img src="admin/images/logo_icon.svg" className="h-48px" alt />
                  </div>
                  <h5 className="mb-0">Login to your account</h5>
                  <span className="d-block text-muted">Enter your credentials below</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <div className="form-control-feedback form-control-feedback-start">
                    <input type="text" className="form-control" placeholder="john@doe.com" />
                    <div className="form-control-feedback-icon">
                      <i className="fa-regular fa-circle-user" style={{paddingTop: 4}} />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="form-control-feedback form-control-feedback-start">
                    <input type="password" className="form-control" placeholder="•••••••••••" />
                    <div className="form-control-feedback-icon">
                      <i className="fa-solid fa-lock" style={{paddingTop: 4}} />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary w-100">Sign in</button>
                </div>
                <div className="text-center">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </div>
          </form>
          {/* /login form */}
        </div>
        {/* /content area */}
        
      </div>
      <div className="btn-to-top"><button className="btn btn-secondary btn-icon rounded-pill" type="button"><i className="ph-arrow-up" /></button></div></div>
  </div>
</div>
    </>
  )
}

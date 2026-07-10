import React from "react";

export const Lifecycle = () => {
  return (
    <div className="container-lg container-fluid mt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <h2 className="mb-5 fs-3">Trust with confidence</h2>
          <div className="mb-4">
            <h3 className="fs-3"></h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh 
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div>
            <h3 className="fs-3 ">No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push  notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div>
            <h3 className="fs-3">The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h3 className="fs-3">Do better with money</h3>
            <p className="text-muted"> 
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <div className="text-center">
            <a href="#">
              <img
                src="/images/ecosystem.png"
                alt="ecosystem"
                style={{ width: "99%" }}
              />
            </a>
          </div>
          <p className="text-center">
            <a href="#" className="mx-5" style={{textDecoration:"none"}} >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{textDecoration:"none"}}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

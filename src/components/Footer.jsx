import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="normal-case text-5xl pt-5 pb-2">
          Tool <span className="text-primary pl-1 font-bold">Composer </span>
        </div>

        <p className="pl-3">
          TOOL COMPOSER Industries Ltd.
          <br />
          Providing reliable tools since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <p className="link link-hover">Branding</p>
        <p className="link link-hover">Design</p>
        <p className="link link-hover">Marketing</p>
        <p className="link link-hover">Advertisement</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </div>
    </footer>
  );
}

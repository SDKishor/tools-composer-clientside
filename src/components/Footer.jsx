import React from "react";

export default function Footer() {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content">
      <div>
        <div class="normal-case text-5xl pt-5">
          Tool <span className="text-primary pl-1 font-bold">Composer </span>
        </div>

        <p>
          TOOL COMPOSER Industries Ltd.
          <br />
          Providing reliable tools since 1992
        </p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

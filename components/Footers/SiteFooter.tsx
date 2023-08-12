"use client";
import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Layout from "../Layouts/Layout/Layout";
import AppLogo from "../Common/AppLogo";

export default function SiteFooter() {
  return (
    <Footer className="dark:bg-secondary/20 p-0 bg-secondary/5" container>
      <div className="w-full">
        <Layout>
          <div className="grid  w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <AppLogo />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-secondary">
              <div>
                <Footer.Title className="dark:text-secondary" title="about" />
                <Footer.LinkGroup col>
                  {footerItems.about.map((item) => (
                    <Footer.Link
                      key={item.title}
                      href="#"
                      className="text-secondary"
                    >
                      {item.title}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="dark:text-secondary"
                  title="Follow us"
                />
                <Footer.LinkGroup col>
                  {footerItems.followUs.map((item) => (
                    <Footer.Link
                      key={item.title}
                      href="#"
                      className="text-secondary"
                    >
                      {item.title}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="dark:text-secondary" title="Legal" />
                <Footer.LinkGroup col>
                  {footerItems.legal.map((item) => (
                    <Footer.Link
                      key={item.title}
                      href="#"
                      className="text-secondary"
                    >
                      {item.title}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </Layout>
        <Footer.Divider />
        <Layout>
          <div className="w-full p-5 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Flowbite™" href="#" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </Layout>
      </div>
    </Footer>
  );
}
const footerItems = {
  about: [
    {
      title: "About",
      href: "/",
    },
    {
      title: "Gallery",
      href: "/",
    },
  ],
  followUs: [
    {
      title: "Github",
      href: "",
    },
    {
      title: "Discord",
      href: "",
    },
  ],
  legal: [
    {
      title: "Privacy Policy",
      href: "",
    },
    {
      title: "Terms & Conditions",
      href: "",
    },
    {
      title: "Contact Us",
      href: "",
    },
  ],
};

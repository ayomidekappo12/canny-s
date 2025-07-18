"use client";

import React from "react";

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#111518] text-base font-medium leading-normal pb-2">
          {label}
        </p>
        <input
          type={type}
          placeholder={placeholder}
          className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-none border-none bg-[#f0f3f4] h-14 placeholder:text-[#637c88] p-4 text-base"
        />
      </label>
    </div>
  );
}

function TextAreaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#111518] text-base font-medium leading-normal pb-2">
          {label}
        </p>
        <textarea
          placeholder={placeholder}
          className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-none border-none bg-[#f0f3f4] min-h-36 placeholder:text-[#637c88] p-4 text-base"
        ></textarea>
      </label>
    </div>
  );
}

function SelectField() {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#111518] text-base font-medium leading-normal pb-2">
          Service of Interest
        </p>
        <select className="form-input flex w-full flex-1 overflow-hidden rounded-lg text-[#111518] focus:outline-none border-none bg-[#f0f3f4] h-14 placeholder:text-[#637c88] p-4 text-base">
          <option>Select a Service</option>
          <option value="cleaning">Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="move">Move-in/Move-out</option>
        </select>
      </label>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="w-full max-w-[960px]">
            <section className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#111518] text-[28px] md:text-[32px] font-bold leading-tight">
                  Get in Touch
                </h1>
                <p className="text-[#637c88] text-sm leading-normal">
                  We're here to help with your cleaning needs. Reach out to us
                  for inquiries, bookings, or any questions you may have.
                </p>
              </div>
            </section>

            <form className="space-y-2">
              <InputField label="Name" placeholder="Your Name" />
              <InputField label="Email" placeholder="Your Email" type="email" />
              <InputField
                label="Phone Number"
                placeholder="Your Phone Number"
                type="tel"
              />
              <SelectField />
              <TextAreaField label="Message" placeholder="Your Message" />
              <div className="flex px-4 py-3 justify-end">
                <button className="bg-[#19a1e5] text-white rounded-lg px-4 h-10 text-sm font-bold">
                  Submit
                </button>
              </div>
            </form>

            <section className="px-4 pt-5">
              <h2 className="text-[#111518] text-[20px] md:text-[22px] font-bold leading-tight">
                Or Contact Us Directly
              </h2>
              <p className="text-base pt-2">Phone: +44 020 7946 0958</p>
              <p className="text-base pt-1">Email: info@cannyscleaning.com</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

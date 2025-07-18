"use client";

import React from "react";

export default function About() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        {/* Story Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <StorySection />
            <ImageGrid />
            <MissionSection />
            <ValuesSection />
          </div>
        </div>
      </div>
    </div>
  );
}


function StorySection() {
  return (
    <section
      className="flex flex-col min-h-[480px] items-center justify-center gap-6 md:gap-8 p-4 rounded-lg text-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCpTgBtEdd52d9J-ZeBqz5qQNPedPxiAqOqPc9oL0YeeVAz_zn2fSY_yLGM-Shu1-rS9rTBN_vN6kCpIEA_jROHPp5XYLusM2yhlJU4Yzc5JPQbFvgFl9md09qOb3Hp9jvjxZekzmkafI598T8Q-fJVvyQ7zxLxGwBe5yUsjN0Rj4AMyOYFAD0qkA-E4isAgFi2zgo7qTC7ZnDCCEe2SqQhHDhp5XasnYwE_n8jjDo4LY-GZaImIZkqn0sDt3whAlar5jbV4qFuX6o)",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">
        Our Story
      </h1>
      <p className="text-sm md:text-base max-w-3xl">
        At Clean London, we believe in more than just cleaning; we're dedicated
        to creating healthier, happier spaces for our clients. Founded in 2010
        by Sarah Thompson... (shortened for brevity)
      </p>
      <button className="h-10 md:h-12 px-4 md:px-5 bg-[#19a1e5] text-white text-sm md:text-base font-bold rounded-lg">
        Get a Quote
      </button>
    </section>
  );
}

function ImageGrid() {
  return (
    <section className="w-full p-4 grid grid-cols-[2fr_1fr_1fr] gap-2 rounded-lg">
      <div
        className="bg-cover bg-center aspect-auto row-span-2"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDw6Ykc2gXb1rMrjBFgOb22MSyQoUCxCDFi1yji4L08aW_59WcUIZRgnXb5Ks1Oa3OUQ2aBBUzrXhwR0ju_QYk4Rw9n59j6Yy8IhBooCfyCPrJiuMZAFXHMA-dURTVyM6sf79KyfLSghceed6ZBdDAaqVkaTL5lLaoBI5-ScasNImpXuRftj_tVNU69O8jvGNGGAmlsQaNs7_lscdZpC7G5L4tOnwQSpkTW9roGmWox5eMbOiE0_EuCQ-10iHsd9fp1zqBV2LtnJJQ)",
        }}
      ></div>
      <div
        className="bg-cover bg-center aspect-auto col-span-2 row-span-2"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBJL20o_X-gVgnFyydARnycluRmWjIGLULfcd-Phcf53Ii8nf34oNBccKqIO581roeE7w3PppxRq9F3LiFw7dJNXwpCOIuOY-IXbPWEB-QnnzSdNrhaiIN06WHcReeuEcLUCYUNjgAXKLHexdVjFdgRb5LRW90kdtsOrBjxdK7WlesBMUBLbQyxLoLW_EoVf7eToEpyfvl3yQIOE7-52s9SQmjcAhDKA6-kiMFbjbzr262Q1QWiUhQpl098LVJypfcoiyJICUKo2ow)",
        }}
      ></div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="px-4">
      <h2 className="text-[22px] font-bold tracking-tight text-[#1E293B] pb-3 pt-5">
        Our Mission
      </h2>
      <p className="text-base text-[#1E293B]">
        Our mission is to provide exceptional cleaning services... (shortened
        for brevity)
      </p>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { title: "Integrity", icon: "🤝" },
    { title: "Reliability", icon: "🛡️" },
    { title: "Sustainability", icon: "🌿" },
  ];

  return (
    <section className="px-4 pb-6">
      <h2 className="text-[22px] font-bold tracking-tight text-[#1E293B] pb-3 pt-5">
        Our Values
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {values.map((val) => (
          <div
            key={val.title}
            className="flex items-center gap-3 p-4 border border-[#dce2e5] bg-white rounded-lg"
          >
            <span className="text-2xl">{val.icon}</span>
            <h3 className="font-bold text-[#1E293B]">{val.title}</h3>
          </div>
        ))}
      </div>
      <p className="text-base text-[#1E293B] pt-4">
        At Clean London, our core values guide everything we do... (shortened)
      </p>
    </section>
  );
}

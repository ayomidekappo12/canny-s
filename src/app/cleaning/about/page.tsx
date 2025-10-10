import React from "react";

export default function About() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="container flex h-full grow flex-col">
        {/* Story Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
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
          "url(https://res.cloudinary.com/dxvf9uqwe/image/upload/v1752848923/Depth_6_Frame_0_1_lwlnbm.svg)",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">
        Our Story
      </h1>
      <p className="text-sm md:text-base max-w-3xl">
        Canny&apos;s Cleaning Services is a family-owned business, proudly
        serving London and Kent since 2019. We bring together strong work ethics
        and real-life experience to deliver reliable, high-quality cleaning
        tailored to each client&apos;s needs. Operating in two of the most
        diverse and dynamic areas in the UK, we understand the importance of a
        clean, welcoming space for people from all walks of life — whether at
        home or at work.
      </p>
    </section>
  );
}

function ImageGrid() {
  return (
    <section className="w-full h-full py-4 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-lg">
        {/* Large Left Image */}
        <div
          className="bg-cover bg-center rounded-lg sm:col-span-2 sm:row-span-2 h-64 sm:h-96"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dxvf9uqwe/image/upload/v1754945586/unnamed_iaidby.png)",
          }}
        ></div>

        {/* Top Right Small Image */}
        <div
          className="bg-cover bg-center rounded-lg h-64 sm:h-96"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dxvf9uqwe/image/upload/v1754945586/unnamed_1_agvv7h.png)",
          }}
        ></div>
      </div>
    </section>
  );
}


function MissionSection() {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold tracking-tight text-[#1E293B] pb-3 pt-5">
        Our Mission
      </h2>
      <p className="text-base text-[#1E293B]">
        At Canny&apos;s Cleaning Services, we offer a wide range of domestic and
        commercial cleaning to help keep your space safe, healthy, and looking
        its best. We treat every job like it&apos;s our own home or workplace,
        using safe but powerful disinfectants to move you from the red zone to
        the green — so you can breathe easy and focus on what matters. or —
        giving you and your team peace of mind every step of the way.
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
      <h2 className="text-2xl font-bold tracking-tight text-[#1E293B] pb-3 pt-5">
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
        Our vision is to be recognised by our clients, customers, and employees
        as one of the leading cleaning contract service providers in the UK. We
        are committed to creating the healthiest and most productive
        environments—whether in restaurants, gyms, schools, offices, nurseries,
        shopping centres, hotels, workshops, homes, or any other space—by
        effectively eliminating bacteria and ensuring top-level cleanliness.
      </p>
    </section>
  );
}

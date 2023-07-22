"use client";
import GlobalFooter from "@/components/globalFooter";
import GlobalNav from "@/components/globalNav";

import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <section className="flex justify-center items-center border-b-2 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        <GlobalNav />
      </section>
      <section className=" bg-amber-700">
        <Main />
      </section>
      <section className=" bg-teal-900 max-h-11">
        <GlobalFooter />
      </section>
    </div>
  );
}

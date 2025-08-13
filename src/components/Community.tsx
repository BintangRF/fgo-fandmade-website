import React from "react";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

type CommunityCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

// Reusable Community Card Component
function CommunityCard({
  icon,
  title,
  description,
  link,
  linkText,
}: CommunityCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg border-2 border-custom-gold-accent">
      {/* Layer gradient yang bisa dianimasikan */}
      <div
        className="absolute inset-0 h-[300px] w-[450px] bg-gradient-to-br from-custom-crimson-red via-custom-amethyst-purple to-custom-gold-accent
                   transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-200"
      />

      {/* Konten */}
      <div className="relative p-6 z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-custom-ivory-white">{icon}</div>
          <h3 className="text-xl font-bold text-custom-ivory-white">{title}</h3>
        </div>

        <p className="text-custom-ivory-white/90 mb-6 leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center px-4 py-2 rounded-md text-custom-ivory-white font-bold
                     bg-custom-ivory-white/30 border border-custom-ivory-white/30 backdrop-blur-md
                     hover:bg-custom-ivory-white/40 transition-all duration-500"
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <Container
      id="community"
      className="relative bg-gradient-to-b from-custom-amethyst-purple/50 to-custom-light-gray overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 0C100 0 150 50 200 100C150 150 100 200 100 200C100 200 50 150 0 100C50 50 100 0 100 0Z"
            fill="url(#gold-gradient)"
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F9D423" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Command Seal Decoration */}
      <div className="absolute bottom-10 left-10 opacity-5 rotate-12">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="#D4AF37">
          <path d="M60,20 C40,40 20,60 20,80 C20,100 40,100 60,100 C80,100 100,100 100,80 C100,60 80,40 60,20 Z" />
        </svg>
      </div>

      {/* Section Content */}
      <SectionTitle
        preTitle="Komunitas Fate/Grand Order"
        title="Gabung dengan Master Lainnya"
      >
        Bersama ribuan Master dari seluruh dunia, berdiskusi tentang strategi,
        event terbaru, dan ceritakan pengalamanmu dalam perjalanan menyelamatkan
        manusia. Mari bangun ikatan yang kuat seperti Command Spell antara
        Master dan Servant!
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Discord Card */}
        <CommunityCard
          icon={
            <svg className="w-10 h-10" fill="#5865F2" viewBox="0 0 24 24">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-.99 0-1.8-.9-1.8-2.02s.79-2.02 1.8-2.02c1 0 1.81.9 1.81 2.02.01 1.12-.8 2.02-1.81 2.02zm6.96 0c-.99 0-1.8-.9-1.8-2.02s.79-2.02 1.8-2.02c1 0 1.81.9 1.81 2.02 0 1.12-.8 2.02-1.81 2.02z" />
            </svg>
          }
          title="Discord"
          description="Diskusi real-time dengan ribuan Master tentang strategi, event, dan lore FGO."
          link="/discord"
          linkText="Join Server"
        />

        {/* Forum Card */}
        <CommunityCard
          icon={
            <svg className="w-10 h-10" fill="#D4AF37" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm1 4.2h2.5v3.6H13zm3 12.6H8v-1.5h8zm-8-3h8v-1.5H8zm0-3h8v-1.5H8z" />
            </svg>
          }
          title="Forum"
          description="Tanya jawab seputar team composition, farming spots, dan servant review."
          link="/forum"
          linkText="Buka Forum"
        />

        {/* Event Card */}
        <CommunityCard
          icon={
            <svg className="w-10 h-10" fill="#E74C3C" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
            </svg>
          }
          title="Event Guide"
          description="Update event terbaru, reward, dan tips menyelesaikan challenge dengan cepat."
          link="/events"
          linkText="Lihat Event"
        />
      </div>

      {/* Chaldea Gate Decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10">
        <svg width="300" height="100" viewBox="0 0 300 100">
          <path d="M150 0L300 100H0L150 0Z" fill="#D4AF37" />
        </svg>
      </div>
    </Container>
  );
}

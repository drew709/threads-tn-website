import { Link } from "react-router-dom";

export const displayFont = {
  fontFamily: '"Freshman", sans-serif',
  fontWeight: 400,
};

export const SHOP = {
  phoneDisplay: "(931) 455-0079",
  phoneHref: "tel:931-455-0079",
  email: "orders@threadstn.com",
  emailHref: "mailto:orders@threadstn.com",
  street: "106 W. Ogee Street",
  city: "Tullahoma, TN",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=106+W.+Ogee+Street,+Tullahoma,+TN",
  mapEmbed:
    "https://maps.google.com/maps?q=106%20W.%20Ogee%20Street%2C%20Tullahoma%2C%20TN&z=16&output=embed",
  facebook: "https://www.facebook.com/ThreadsTN",
  instagram: "https://www.instagram.com/threads_tn",
  googleReviews: "https://www.google.com/search?q=Threads+TN+Reviews",
};

/**
 * Snapshot from the live Google reviews widget on November 11, 2026.
 * The reviews section below still loads the live widget. Re-check this
 * number before treating it as permanent.
 */
export const GOOGLE_SNAPSHOT = {
  score: "4.8",
  count: "37",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function PrimaryLink({ to, children, tone = "paper", className = "" }) {
  const tones = {
    paper:
      "bg-[#8C1515] text-white hover:bg-[#5c0e0e] focus-visible:ring-[#8C1515] focus-visible:ring-offset-[#F4EFE8]",
    ink: "bg-white text-[#8C1515] hover:bg-[#F4EFE8] focus-visible:ring-white focus-visible:ring-offset-[#231816]",
  };

  return (
    <Link
      to={to}
      className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-base font-semibold shadow-sm transition-colors motion-safe:transition-colors sm:w-auto ${focusRing} ${tones[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-flex w-full items-center justify-center rounded-full border border-[#1C1412]/15 bg-white/80 px-6 py-3.5 text-center text-base font-semibold text-[#1C1412] transition-colors hover:border-[#8C1515] hover:text-[#8C1515] focus-visible:ring-[#8C1515] focus-visible:ring-offset-[#F4EFE8] sm:w-auto ${focusRing} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PhoneButton({ tone = "ink", className = "" }) {
  const tones = {
    ink: "border-white/40 text-white hover:bg-white hover:text-[#231816] focus-visible:ring-white focus-visible:ring-offset-[#231816]",
  };

  return (
    <a
      href={SHOP.phoneHref}
      className={`inline-flex w-full items-center justify-center rounded-full border px-6 py-3.5 text-center text-base font-semibold transition-colors sm:w-auto ${focusRing} ${tones[tone]} ${className}`}
    >
      Call {SHOP.phoneDisplay}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, titleId, children }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C1515]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="text-balance text-3xl leading-tight text-[#1C1412] sm:text-4xl"
        style={displayFont}
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-[#4A433E] sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export function NeedsConfirm({ children }) {
  return (
    <li className="text-sm leading-relaxed text-[#3F3832]">{children}</li>
  );
}

export function TextLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 font-semibold text-[#8C1515] underline decoration-[#8C1515]/30 underline-offset-4 transition-colors hover:decoration-[#8C1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${className}`}
    >
      {children}
    </Link>
  );
}

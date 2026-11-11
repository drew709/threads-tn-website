import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/team-stores", label: "Team Stores" },
  { to: "/about", label: "About" },
];

const PHONE_DISPLAY = "(931) 455-0079";
const PHONE_HREF = "tel:+19314550079";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1515] focus-visible:ring-offset-2";

const WORDMARK_STYLE = {
  fontFamily: '"Freshman", sans-serif',
  fontWeight: 400,
};

function isTabbable(element) {
  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

function normalizePath(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export default function Header() {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);
  const isCurrent = (to) => currentPath === to;
  const headerRef = useRef(null);
  const barRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [barHeight, setBarHeight] = useState(80);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 8;
      setScrolled((current) => (current === next ? current : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;

    const measure = () => setBarHeight(bar.offsetHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const header = headerRef.current;
    const menu = menuRef.current;
    const inertTargets = ["main-content", "site-footer", "floating-quote"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const tabbables = () =>
      header
        ? [...header.querySelectorAll("a[href], button:not([disabled])")].filter(isTabbable)
        : [];

    const firstMenuLink = menu?.querySelector("[data-menu-link]");
    firstMenuLink?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const items = tabbables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !header.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    inertTargets.forEach((node) => node.setAttribute("inert", ""));
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      inertTargets.forEach((node) => node.removeAttribute("inert"));
      const button = menuButtonRef.current;
      const focusStillInHeader = header?.contains(document.activeElement);
      if (button && focusStillInHeader) {
        button.focus({ preventScroll: true });
      }
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const desktopLinkClass = (isActive) =>
    [
      "relative whitespace-nowrap text-sm font-medium tracking-wide transition-colors",
      "after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:bg-[#8C1515] after:transition-transform after:duration-200 after:content-[''] motion-reduce:after:transition-none",
      FOCUS_RING,
      "rounded-sm",
      isActive
        ? "text-[#8C1515] after:scale-x-100"
        : "text-neutral-800 after:scale-x-0 hover:text-[#8C1515] hover:after:scale-x-100",
    ].join(" ");

  const quoteClass = (isActive) =>
    [
      "inline-flex items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm transition-colors",
      FOCUS_RING,
      isActive ? "bg-black" : "bg-[#8C1515] hover:bg-black",
    ].join(" ");

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-[60]">
      <style>{`
        @keyframes threads-menu-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          #site-menu { animation: none !important; }
        }
      `}</style>

      <a
        href="#main-content"
        className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#8C1515] ${FOCUS_RING}`}
        onClick={(event) => {
          event.preventDefault();
          setOpen(false);
          document.getElementById("main-content")?.focus({ preventScroll: false });
        }}
      >
        Skip to content
      </a>

      <div
        ref={barRef}
        className={`border-b bg-white transition-[box-shadow,border-color] duration-200 motion-reduce:transition-none ${
          scrolled ? "border-neutral-200 shadow-md" : "border-transparent shadow-none"
        }`}
      >
        <div className="h-[3px] bg-[#8C1515]" aria-hidden="true" />
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 transition-[height] duration-200 ease-out motion-reduce:transition-none sm:px-6 ${
            scrolled ? "h-16" : "h-[4.75rem]"
          }`}
        >
          <Link
            to="/"
            aria-label="Threads TN, Tullahoma, Tennessee, home"
            aria-current={isCurrent("/") ? "page" : undefined}
            className={`flex items-center gap-2.5 rounded-md pr-1 ${FOCUS_RING}`}
          >
            <picture>
              <source srcSet="/logo-header.webp" type="image/webp" />
              <img
                src="/logo-header.jpg"
                alt=""
                width={884}
                height={280}
                decoding="async"
                fetchPriority="high"
                className={`w-auto transition-[height] duration-200 motion-reduce:transition-none ${
                  scrolled ? "h-8 sm:h-9 lg:h-10" : "h-9 sm:h-11 lg:h-12"
                }`}
              />
            </picture>
            <span className="hidden min-w-0 flex-col md:flex">
              <span
                className="text-[1.35rem] leading-none tracking-wide text-neutral-950"
                style={WORDMARK_STYLE}
              >
                THREADS <span className="text-[#8C1515]">TN</span>
              </span>
              <span
                className={`overflow-hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 transition-all duration-200 motion-reduce:transition-none ${
                  scrolled ? "mt-0 max-h-0 opacity-0" : "mt-1 max-h-4 opacity-100"
                }`}
              >
                Tullahoma, TN
              </span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-x-5 xl:gap-x-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isCurrent(item.to) ? "page" : undefined}
                className={desktopLinkClass(isCurrent(item.to))}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="col-start-3 flex items-center gap-1.5 sm:gap-2">
            <span className="mx-1 hidden h-6 w-px bg-neutral-200 lg:block" aria-hidden="true" />
            <a
              href={PHONE_HREF}
              aria-label={`Call Threads TN at ${PHONE_DISPLAY}`}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-[#8C1515] lg:hidden ${FOCUS_RING}`}
            >
              <Phone aria-hidden="true" size={18} strokeWidth={2.25} />
            </a>
            <a
              href={PHONE_HREF}
              className={`hidden items-center gap-2 whitespace-nowrap rounded-full px-2 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-[#8C1515] lg:inline-flex ${FOCUS_RING}`}
            >
              <Phone aria-hidden="true" size={16} strokeWidth={2.25} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link
              to="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
              className={`${quoteClass(isCurrent("/contact"))} h-10 px-3.5 lg:hidden`}
            >
              Quote
            </Link>
            <Link
              to="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
              className={`${quoteClass(isCurrent("/contact"))} hidden h-10 px-5 lg:inline-flex`}
            >
              Get a Quote
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-[#8C1515] lg:hidden ${
                open ? "bg-neutral-100 text-[#8C1515]" : ""
              } ${FOCUS_RING}`}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? (
                <X aria-hidden="true" size={22} strokeWidth={2.25} />
              ) : (
                <Menu aria-hidden="true" size={22} strokeWidth={2.25} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        id="site-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Main menu"
        className={`${
          open ? "flex animate-[threads-menu-in_160ms_ease-out]" : "hidden"
        } fixed inset-x-0 bottom-0 z-40 flex-col bg-white lg:hidden`}
        style={{ top: barHeight }}
      >
        <nav className="flex-1 overflow-y-auto overscroll-contain px-2 pt-2" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-menu-link
              onClick={closeMenu}
              aria-current={isCurrent(item.to) ? "page" : undefined}
              className={[
                "flex min-h-[3.25rem] items-center border-b border-l-4 border-b-neutral-100 px-4 text-2xl transition-colors",
                FOCUS_RING,
                isCurrent(item.to)
                  ? "border-l-[#8C1515] bg-[#8C1515]/5 font-semibold text-[#8C1515]"
                  : "border-l-transparent font-medium text-neutral-900 hover:bg-neutral-50 hover:text-[#8C1515]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-neutral-200 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
          <a
            href={PHONE_HREF}
            className={`flex items-center gap-4 rounded-2xl bg-neutral-50 px-4 py-4 transition-colors hover:bg-neutral-100 ${FOCUS_RING}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8C1515] text-white">
              <Phone aria-hidden="true" size={20} strokeWidth={2.25} />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Call the shop
              </span>
              <span className="block text-xl font-semibold leading-tight text-neutral-950">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-0.5 block text-sm text-neutral-600">
                106 W. Ogee Street, Tullahoma, TN
              </span>
            </span>
          </a>
          <Link
            to="/contact"
            onClick={closeMenu}
            aria-current={isCurrent("/contact") ? "page" : undefined}
            className={`${quoteClass(isCurrent("/contact"))} mt-3 h-12 w-full text-base`}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

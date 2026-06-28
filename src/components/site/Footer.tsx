import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 text-left">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
              <img src="/logo.png" alt="TrendTide Connect" className="h-5 w-5 object-contain" />
            </span>
            TrendTide Connect
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            India's fastest  influencer marketing marketplace. Discover verified creators,
            launch campaigns, and scale your brand with measurable ROI.
          </p>
          <div className="mt-6 flex gap-3 text-muted-foreground">
            <a
              href="https://www.instagram.com/ttc.in?igsh=dnBhZHFoczE0OWk="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TrendTide Connect on Instagram"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-muted hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://youtube.com/@trendtideconnect11?si=5iGncY8iXHJru3IG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TrendTide Connect on YouTube"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-muted hover:text-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@trendtideconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email TrendTide Connect via Gmail"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Platform" links={[
          { to: "/start-campaign", label: "Start Campaign" },
        ]} />
        <div className="text-left">
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
            </li>
          </ul>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} TrendTide Connect. All rights reserved.</p>
          <p>Built for the creator economy.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="transition-colors hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

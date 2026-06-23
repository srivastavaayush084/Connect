import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/start-campaign", label: "For Brands" },
  { to: "/join-creator", label: "For Creators" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
            <img src="/logo.png" alt="TrendTide Connect" className="h-5 w-5 object-contain" />
          </span>
          <span>TrendTide Connect</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted/60" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/join-creator">Join as Creator</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95">
            <Link to="/start-campaign">Start Campaign</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="ghost" className="flex-1">
                <Link to="/join-creator" onClick={() => setOpen(false)}>Join as Creator</Link>
              </Button>
              <Button asChild className="flex-1 bg-gradient-brand text-primary-foreground">
                <Link to="/start-campaign" onClick={() => setOpen(false)}>Start Campaign</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

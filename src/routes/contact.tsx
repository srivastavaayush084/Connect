import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TrendTide Connect" },
      { name: "description", content: "Get in touch with TrendTide Connect — partnerships, support and press." },
      { property: "og:title", content: "Contact — TrendTide Connect" },
      { property: "og:description", content: "Contact TrendTide Connect for partnerships, support and press enquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">Have a question or want to partner with us? Fill the form or reach out directly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 p-6">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Your name" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your enquiry" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button type="submit" className="bg-gradient-brand text-primary-foreground">Send Message</Button>
                <span className="text-sm text-muted-foreground">We'll reply within 2 business days.</span>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border/60 p-6">
              <h3 className="mb-2 text-lg font-semibold">General enquiries</h3>
              <p className="text-muted-foreground">info@trendtideconnect.com</p>
            </div>

            {/* Partnerships card removed */}

            <div className="rounded-lg border border-border/60 p-6">
              <h3 className="mb-2 text-lg font-semibold">Head office</h3>
              <p className="text-muted-foreground">Azamgarh, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default Contact;

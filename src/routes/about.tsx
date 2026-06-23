import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Megaphone, Image, PenTool, Map } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TrendTide Connect" },
      { name: "description", content: "About TrendTide Connect — influencer marketing services and brand promotion." },
      { property: "og:title", content: "About — TrendTide Connect" },
      { property: "og:description", content: "About TrendTide Connect — influencer marketing services and brand promotion." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-5xl font-bold leading-tight">We'll help you <span className="text-indigo-500">Digitally</span> transform your business.</h1>
            <p className="mt-8 text-lg text-muted-foreground">Harness the power of Influencers to its best with our wide range of expert Influencer Marketing services! From Nano-Micro Bulk Activation and Celebrity partnerships, our influencer marketing strategy will help you navigate the ever-evolving influencer landscape through a wide range of services.</p>

            <p className="mt-6 text-lg text-muted-foreground">Trust TrendTide Connect — the leading influencer marketing agency in India — to unlock the full potential of influencer marketing and achieve outstanding results for your business.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card title="Influencer Marketing" Icon={Megaphone}>
              As a leading influencer marketing agency in India, we specialize in creating impactful campaigns that connect brands with influential individuals who can promote their products or services to a wide audience.
            </Card>

            <Card title="Logo Promotion" Icon={Megaphone}>
              Advertisement for logo promotion management. Boost your brand with targeted logo promotion services across platforms to increase visibility and recognition.
            </Card>

            <Card title="Logo Designing" Icon={PenTool}>
              Your brand deserves a unique identity. Our designers craft logos that tell your story and elevate your brand with creativity and precision.
            </Card>

            <Card title="Billboard Marketing" Icon={Map}>
              Reach thousands of people with billboard advertising. We provide effective offline marketing solutions to make a big impact for your brand.
            </Card>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function Card({ title, children, Icon }: { title: string; children: any; Icon: any }) {
  return (
    <div className="rounded-lg border border-border/60 p-6 shadow-sm bg-card">
      <div className="flex items-center gap-3">
        <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

export default About;

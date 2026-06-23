import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Target, Wallet, Smartphone, Tag, Building2, Rocket, MapPin, Loader2, CheckCircle2, Mail, Home } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { sendAdminNotification, sendBrandConfirmation } from "@/lib/email";

const steps = [
  { id: 1, label: "Brand", icon: Building2 },
  { id: 2, label: "Objective", icon: Target },
  { id: 3, label: "Budget", icon: Wallet },
  { id: 4, label: "Platforms", icon: Smartphone },
  { id: 5, label: "Categories", icon: Tag },
  { id: 6, label: "Select language", icon: Tag },
  { id: 7, label: "Select state", icon: MapPin },
  { id: 8, label: "Submit", icon: Rocket },
];

const objectives = ["Awareness", "Leads", "Sales", "App Installs"];
const budgets = ["₹10K – ₹50K", "₹50K – ₹1L", "₹1L – ₹5L", "₹5L+"];
const platforms = ["Instagram", "YouTube", "LinkedIn", "Snapchat", "X"];
const cats = ["Fashion", "Beauty", "Technology", "Gaming", "Finance", "Education", "Travel", "Food", "Fitness", "Lifestyle"];
const languages = ["English", "Hindi", "Tamil", "Bengali", "Marathi", "Gujarati", "Kannada", "Malayalam"];
const states = ["All India", "Maharashtra", "Karnataka", "Delhi", "Tamil Nadu", "West Bengal", "Gujarat", "Rajasthan", "Uttar Pradesh"];
const places = ["North", "South", "East", "West"];

export const Route = createFileRoute("/start-campaign")({
  head: () => ({
    meta: [
      { title: "Start an Influencer Campaign — TrendTide Connect" },
      { name: "description", content: "Launch your influencer marketing campaign in minutes. Set objectives, budget, platforms and get matched with verified creators." },
      { property: "og:title", content: "Start an Influencer Campaign — TrendTide Connect" },
      { property: "og:description", content: "Launch your influencer marketing campaign in minutes with AI-matched verified creators." },
      { property: "og:url", content: "/start-campaign" },
    ],
    links: [{ rel: "canonical", href: "/start-campaign" }],
  }),
  component: StartCampaign,
});

function StartCampaign() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    brandName: "", website: "", industry: "", contact: "", email: "", phone: "",
    objective: "", budget: "", platforms: [] as string[], categories: [] as string[], languages: [] as string[], state: "", place: "",
  });

  const update = (k: keyof typeof data, v: any) => setData((d) => ({ ...d, [k]: v }));
  const toggle = (k: "platforms" | "categories" | "languages", v: string) =>
    setData((d) => ({ ...d, [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v] }));

  const next = () => setStep((s) => Math.min(s + 1, 8));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    if (!data.email) {
      toast.error("Please enter a valid email address in step 1.");
      return;
    }
    setSubmitting(true);
    try {
      await Promise.all([
        sendAdminNotification(data),
        sendBrandConfirmation(data),
      ]);
      setSubmitted(true);
    } catch (err) {
      console.error("Email send failed:", err);
      toast.error("Something went wrong sending your campaign. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="bg-gradient-hero">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Campaign <span className="text-gradient">submitted</span>
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elev sm:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand shadow-glow"
            >
              <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">Your campaign is on its way!</h2>
              <p className="mt-3 text-muted-foreground">
                We've received your brief and sent a confirmation to <span className="font-semibold text-foreground">{data.email}</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 rounded-2xl bg-muted/40 p-5 text-left"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Campaign Summary</h3>
              <dl className="grid gap-2 text-sm">
                {[
                  ["Brand", data.brandName],
                  ["Objective", data.objective],
                  ["Budget", data.budget],
                  ["Platforms", data.platforms.join(", ")],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
                    <dt className="font-medium text-muted-foreground">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4"
            >
              <Mail className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Our team will reach out within <span className="font-semibold text-foreground">24 hours</span> with creator recommendations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setData({
                    brandName: "", website: "", industry: "", contact: "", email: "", phone: "",
                    objective: "", budget: "", platforms: [], categories: [], languages: [], state: "", place: "",
                  });
                }}
                className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95"
              >
                <Rocket className="mr-2 h-4 w-4" /> Start another campaign
              </Button>
              <Button variant="outline" asChild>
                <a href="/"><Home className="mr-2 h-4 w-4" /> Back to home</a>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Launch your <span className="text-gradient">campaign</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Eight quick steps and you'll be matched with the right creators.
          </p>

          {/* Stepper */}
          <div className="mt-10 hidden items-center gap-2 md:flex">
            {steps.map((s, i) => (
              <div key={s.id} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all ${step > s.id ? "bg-gradient-brand text-primary-foreground border-transparent" :
                      step === s.id ? "border-primary bg-card text-primary ring-brand" :
                        "border-border bg-card text-muted-foreground"
                    }`}
                >
                  {step > s.id ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                </div>
                <span className={`text-xs font-medium ${step >= s.id ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
                {i < steps.length - 1 && <div className={`mx-1 h-px flex-1 ${step > s.id ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground md:hidden">Step {step} of {steps.length} · {steps[step - 1].label}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-elev sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold">Brand information</h2>
                  <Grid>
                    <Field label="Brand name"><Input value={data.brandName} onChange={(e) => update("brandName", e.target.value)} placeholder="Brand Name" /></Field>
                    <Field label="Website"><Input value={data.website} onChange={(e) => update("website", e.target.value)} placeholder="Website" /></Field>
                    <Field label="Industry"><Input value={data.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Industry" /></Field>
                    <Field label="Contact person"><Input value={data.contact} onChange={(e) => update("contact", e.target.value)} placeholder="Contact Person" /></Field>
                    <Field label="Email"><Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="Email" /></Field>
                    <Field label="Phone"><Input value={data.phone} onChange={(e) => update("phone", e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Phone" maxLength={10} inputMode="numeric" /></Field>
                  </Grid>
                </div>
              )}

              {step === 2 && (
                <ChoiceStep
                  title="What's the campaign objective?"
                  options={objectives}
                  selected={[data.objective]}
                  onSelect={(v) => update("objective", v)}
                />
              )}

              {step === 3 && (
                <ChoiceStep
                  title="What's your campaign budget?"
                  options={budgets}
                  selected={[data.budget]}
                  onSelect={(v) => update("budget", v)}
                />
              )}

              {step === 4 && (
                <ChoiceStep
                  title="Which platforms?"
                  options={platforms}
                  selected={data.platforms}
                  multi
                  onSelect={(v) => toggle("platforms", v)}
                />
              )}

              {step === 5 && (
                <ChoiceStep
                  title="Which creator categories?"
                  options={cats}
                  selected={data.categories}
                  multi
                  onSelect={(v) => toggle("categories", v)}
                />
              )}

              {step === 6 && (
                <ChoiceStep
                  title="Select target languages"
                  options={languages}
                  selected={data.languages}
                  multi
                  onSelect={(v) => toggle("languages", v)}
                />
              )}

              {step === 7 && (
                <div className="space-y-5">
                  <ChoiceStep
                    title="Select target state"
                    options={states}
                    selected={data.state ? [data.state] : []}
                    onSelect={(v) => update("state", v)}
                  />

                  <div className="pt-4">
                    <h3 className="font-display text-lg font-semibold">Select place</h3>
                    <p className="text-sm text-muted-foreground">Choose a region</p>
                    <div className="mt-3 grid grid-cols-4 gap-3">
                      {places.map((p) => (
                        <button
                          key={p}
                          onClick={() => update("place", p)}
                          className={`rounded-2xl border p-3 text-sm ${data.place === p ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow" : "border-border bg-card"}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 8 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-semibold">Review and submit</h2>
                  <p className="text-sm text-muted-foreground">
                    Our team and AI matcher will surface the best-fit creators for your brief within 24 hours.
                  </p>
                  <dl className="grid gap-3 rounded-2xl bg-muted/40 p-5 text-sm">
                    {[
                      ["Brand", data.brandName || "—"],
                      ["Objective", data.objective || "—"],
                      ["Budget", data.budget || "—"],
                      ["Platforms", data.platforms.join(", ") || "—"],
                      ["Categories", data.categories.join(", ") || "—"],
                      ["Languages", data.languages.join(", ") || "—"],
                      ["State", data.state || "—"],
                      ["Place", data.place || "—"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
                        <dt className="font-medium text-muted-foreground">{k}</dt>
                        <dd className="text-right font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button variant="ghost" onClick={prev} disabled={step === 1 || submitting}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            {step < 8 ? (
              <Button onClick={next} className="bg-gradient-brand text-primary-foreground hover:opacity-95">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={submit} disabled={submitting} className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95">
                {submitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…</>
                ) : (
                  <>Submit campaign <Rocket className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function ChoiceStep({ title, options, selected, onSelect, multi }: { title: string; options: string[]; selected: string[]; onSelect: (v: string) => void; multi?: boolean }) {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{multi ? "Select all that apply." : "Pick one."}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => {
          const isSel = selected.includes(o);
          return (
            <button
              key={o}
              onClick={() => onSelect(o)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${isSel
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                  : "border-border bg-card hover:border-primary/40"
                }`}
            >
              <span className="font-medium">{o}</span>
              {isSel && <Check className="h-4 w-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

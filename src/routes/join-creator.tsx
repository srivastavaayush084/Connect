import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useEffect } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/apmG7JsqUbiKknNHA";

export const Route = createFileRoute("/join-creator")({
  head: () => ({
    meta: [{ title: "Join as Creator — TrendTide Connect" }],
  }),
  component: JoinCreator,
});

function JoinCreator() {
  useEffect(() => {
    // auto-redirect to Google Form
    window.location.href = GOOGLE_FORM_URL;
  }, []);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-28 text-center">
        <h1 className="font-display text-3xl font-bold">Join as a Creator</h1>
        <p className="mt-4 text-muted-foreground">You are being redirected to the creator signup form. If you are not redirected, <a className="text-primary" href={GOOGLE_FORM_URL}>click here</a>.</p>
      </div>
    </SiteLayout>
  );
}

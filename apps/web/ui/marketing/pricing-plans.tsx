"use client";

import {
  APP_DOMAIN,
  cn,
  nFormatter,
  PLANS,
  PRICING_PLAN_TAGLINES,
  type PlanDetails,
} from "@dub/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const TAGLINES: Record<string, string> = {
  Free: "For trying Veltrio on a few links",
  ...PRICING_PLAN_TAGLINES.links,
};

// The Free plan has no feature list, so describe it from its limits
function planFeatures(plan: PlanDetails) {
  if (plan.features?.length) return plan.features.map((f) => f.text);
  const l = plan.limits;
  return [
    `${nFormatter(l.links)} new links/mo`,
    `${nFormatter(l.clicks)} tracked events/mo`,
    `${l.retention} analytics retention`,
    `${l.domains} custom domains`,
    `${l.users} user`,
  ];
}

export function PricingPlans() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("yearly");

  return (
    <div>
      <div className="flex justify-center">
        <Tabs
          value={period}
          onValueChange={(v) => setPeriod(v as "monthly" | "yearly")}
        >
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <span className="rounded-full bg-mk-mint px-1.5 text-[11px] font-semibold text-mk-mint-fg">
                Save 10%
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {PLANS.map((plan) => {
          const price = plan.price[period];
          const isEnterprise = price === null;
          const featured = plan.name === "Business";
          return (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border bg-white p-5",
                featured
                  ? "border-mk-accent shadow-[0_20px_50px_-24px_hsl(var(--mk-accent)/0.5)]"
                  : "border-mk-border",
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-mk-display text-xl font-bold text-mk-fg">
                  {plan.name}
                </h2>
                {featured && <Badge variant="accent">Popular</Badge>}
              </div>
              <p className="mt-1.5 min-h-[40px] text-sm text-mk-muted-fg">
                {TAGLINES[plan.name]}
              </p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-mk-display text-4xl font-extrabold tracking-tight text-mk-fg">
                  {isEnterprise ? "Custom" : `$${price}`}
                </span>
                {!isEnterprise && (
                  <span className="text-sm text-mk-muted-fg">/mo</span>
                )}
              </p>
              <p className="mt-1 h-5 text-xs text-mk-muted-fg">
                {!isEnterprise && price! > 0 && period === "yearly"
                  ? "billed yearly"
                  : ""}
              </p>
              <Button
                className="mt-5 w-full"
                variant={featured ? "accent" : isEnterprise ? "outline" : "default"}
                asChild
              >
                {isEnterprise ? (
                  <Link href="/contact">Contact us</Link>
                ) : (
                  <a href={`${APP_DOMAIN}/register`}>
                    {price === 0 ? "Start for free" : `Get ${plan.name}`}
                  </a>
                )}
              </Button>
              <div className="mt-6 border-t border-mk-border pt-5">
                {plan.featureTitle && (
                  <p className="text-sm font-medium text-mk-fg">
                    {plan.featureTitle}
                  </p>
                )}
                <ul className="mt-3 space-y-2.5">
                  {(isEnterprise
                    ? [
                        "Custom usage limits",
                        "SAML SSO and SCIM",
                        "Audit logs",
                        "Volume discounts",
                        "Custom contract and invoicing",
                      ]
                    : planFeatures(plan)
                  ).map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-mk-fg">
                      <Check className="mt-0.5 size-4 shrink-0 text-mk-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

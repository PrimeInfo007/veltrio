import { cn } from "@dub/utils";
import {
  CheckCircle2,
  Clock,
  Copy,
  DollarSign,
  MousePointerClick,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { MockWindow } from "./mockups";
import { Badge } from "./ui/badge";

// Sample people for marketing mockups only
const PARTNERS = [
  { name: "Maya Chen", initials: "MC", color: "#2F45FF", earned: "$4,812", sales: 112, status: "Paid" },
  { name: "Leo Hart", initials: "LH", color: "#0B6B4A", earned: "$3,240", sales: 86, status: "Paid" },
  { name: "Ana Souza", initials: "AS", color: "#C2410C", earned: "$1,975", sales: 51, status: "Pending" },
  { name: "Sam Okafor", initials: "SO", color: "#7C3AED", earned: "$1,104", sales: 29, status: "Pending" },
];

export function PartnerProgramMock({ className }: { className?: string }) {
  return (
    <MockWindow
      title="Northwind affiliate program"
      className={cn("mx-auto w-full max-w-4xl text-left", className)}
    >
      <div className="grid grid-cols-2 border-b border-mk-border sm:grid-cols-4">
        {[
          { label: "Partners", value: "184" },
          { label: "Revenue", value: "$96,420" },
          { label: "Commissions", value: "$19,284" },
          { label: "Next payout", value: "Dec 1" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={cn(
              "px-5 py-4",
              i % 2 === 1 && "border-l border-mk-border",
              i >= 2 && "border-t border-mk-border sm:border-t-0",
              i === 2 && "sm:border-l",
            )}
          >
            <p className="text-xs font-medium text-mk-muted-fg">{s.label}</p>
            <p className="mt-1 font-mk-display text-xl font-bold tabular-nums tracking-tight text-mk-fg">
              {s.value}
            </p>
          </div>
        ))}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-mk-muted-fg">
            <th className="px-5 py-3 font-medium">Partner</th>
            <th className="hidden px-5 py-3 font-medium sm:table-cell">Sales</th>
            <th className="px-5 py-3 font-medium">Earned</th>
            <th className="px-5 py-3 font-medium">Payout</th>
          </tr>
        </thead>
        <tbody>
          {PARTNERS.map((p) => (
            <tr key={p.name} className="border-t border-mk-border">
              <td className="px-5 py-3">
                <span className="flex items-center gap-2.5">
                  <span
                    className="flex size-7 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                    style={{ background: p.color }}
                  >
                    {p.initials}
                  </span>
                  <span className="font-medium text-mk-fg">{p.name}</span>
                </span>
              </td>
              <td className="hidden px-5 py-3 tabular-nums text-mk-fg sm:table-cell">
                {p.sales}
              </td>
              <td className="px-5 py-3 font-medium tabular-nums text-mk-fg">
                {p.earned}
              </td>
              <td className="px-5 py-3">
                {p.status === "Paid" ? (
                  <Badge variant="mint" className="py-0.5">
                    <CheckCircle2 className="size-3" />
                    Paid
                  </Badge>
                ) : (
                  <Badge className="py-0.5">
                    <Clock className="size-3 text-mk-muted-fg" />
                    Pending
                  </Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MockWindow>
  );
}

export function RewardsMock() {
  return (
    <div className="w-full max-w-sm space-y-2.5">
      {[
        { icon: DollarSign, title: "20% of every sale", note: "for 12 months" },
        { icon: UserPlus, title: "$5 per sign-up", note: "after email is verified" },
        { icon: MousePointerClick, title: "$0.10 per click", note: "paid out monthly" },
      ].map(({ icon: Icon, title, note }) => (
        <div
          key={title}
          className="flex items-center gap-3 rounded-xl border border-mk-border bg-white px-3.5 py-3 shadow-sm"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-mk-mint">
            <Icon className="size-4 text-mk-mint-fg" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-mk-fg">
              {title}
            </span>
            <span className="block text-xs text-mk-muted-fg">{note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function PartnerPortalMock() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-mk-border bg-white p-4 text-left shadow-sm">
      <p className="text-xs font-medium text-mk-muted-fg">Your referral link</p>
      <div className="mt-1.5 flex items-center justify-between rounded-lg border border-mk-border bg-mk-muted/60 px-3 py-2 text-sm font-semibold text-mk-fg">
        veltrio.link/maya
        <Copy className="size-3.5 text-mk-muted-fg" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Clicks", "3,912"],
          ["Sign-ups", "418"],
          ["Earned", "$4,812"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-mk-muted/60 py-2.5">
            <p className="text-[11px] text-mk-muted-fg">{k}</p>
            <p className="text-sm font-bold tabular-nums text-mk-fg">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FraudMock() {
  return (
    <div className="w-full max-w-sm space-y-2.5">
      {[
        { label: "Self-referral blocked", detail: "Same card as the partner", tone: "warn" },
        { label: "Duplicate sign-ups held", detail: "6 accounts from one device", tone: "warn" },
        { label: "Partner verified", detail: "Identity and payout details checked", tone: "ok" },
      ].map((r) => (
        <div
          key={r.label}
          className="flex items-center gap-3 rounded-xl border border-mk-border bg-white px-3.5 py-2.5 shadow-sm"
        >
          <ShieldCheck
            className={cn(
              "size-4 shrink-0",
              r.tone === "ok" ? "text-mk-mint-fg" : "text-[#C2410C]",
            )}
          />
          <span className="min-w-0">
            <span className="block text-sm font-medium text-mk-fg">
              {r.label}
            </span>
            <span className="block truncate text-xs text-mk-muted-fg">
              {r.detail}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

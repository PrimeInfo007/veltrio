import { PARTNERS_DOMAIN } from "@dub/utils";
import { PartnerProps, ProgramProps } from "../types";

// Construct the program or Veltrio Network referral link
// Examples are
// https://partners.veltrio.link/register?via=johndoe
// https://partners.veltrio.link/acme/apply?via=johndoe
export const constructPartnerReferralLink = ({
  partner,
  program,
}: {
  partner: Pick<PartnerProps, "username"> | undefined;
  program?: Pick<ProgramProps, "slug">;
}) => {
  const viaQuery = partner?.username
    ? `?via=${encodeURIComponent(partner.username)}`
    : "";

  const path = program ? `/${program.slug}/apply` : "/register";

  return `${PARTNERS_DOMAIN}${path}${viaQuery}`;
};

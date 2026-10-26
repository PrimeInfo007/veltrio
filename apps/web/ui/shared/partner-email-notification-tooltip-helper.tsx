import { Tooltip } from "@dub/ui";

export const PartnerEmailNotificationTooltipHelper = ({
  text = "notified via email",
}: {
  text?: string;
}) => {
  return (
    <Tooltip content="Only partners who have previously created an account on [partners.veltrio.link](https://partners.veltrio.link) will receive an email notification.">
      <span className="cursor-help underline decoration-dotted underline-offset-2">
        {text}
      </span>
    </Tooltip>
  );
};

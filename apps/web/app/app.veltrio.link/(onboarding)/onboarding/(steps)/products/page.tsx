import { testIds } from "@/lib/e2e/test-ids";
import { StepPage } from "../step-page";
import { ProductSelector } from "./product-selector";

export default function Products() {
  return (
    <StepPage
      headingTestId={testIds.onboarding.stepProducts}
      title="What do you want to do with Veltrio?"
      description="Choose how you'll use Veltrio to grow your business"
      className="max-w-none"
    >
      <ProductSelector />
    </StepPage>
  );
}

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51RGSKZPsho9ZzNBl6KUxmOWysyEI8M4crp1GPqfYfNla2oS3aAioyQg1LMQgSjxDTsWib9hpbjKJVdThRtcGIkjo00lXmLuFAU",
);

export default stripePromise;

import {
  BannerExample,
  CompactBannerAboutExample,
  CompactBannerPricingExample,
  ServiceBannerAirbnbCleaningExample,
  ServiceBannerDeepCleaningExample,
  ServiceBannerEndOfLeaseExample,
  ServiceBannerRegularCleaningExample,
  ServiceBannerRestaurantCleaningExample,
} from "@/components/layouts/Banner/EXAMPLES";
import ExampleServicePage, {
  BannerWithNavigation,
  DeepCleaningPage,
  EndOfLeaseCleaningPage,
  HouseCleaningPage,
  ManualCarouselExample,
  OfficeCleaningPage,
  WindowCleaningPage,
} from "@/components/layouts/Banner/REAL_WORLD_EXAMPLES";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import Home from "@/modules/home";

export default function HomePage() {
  return (
    <LayoutComponents>
      <Home />
    </LayoutComponents>
  );
}

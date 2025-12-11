import { Routes } from "@/lib/enum/routes";
import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";

export default function ServicePage() {
  return <ServiceComponent data={services[Routes.SERVICE_REGULAR_CLEANING]} />;
}

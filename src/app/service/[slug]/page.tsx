// app/service/[slug]/page.tsx

import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";

// Hàm này sẽ trở thành async
export default async function ServiceDetails({ params }) {
  // Chờ params slug
  const { slug } = await params;

  // Lấy thông tin dịch vụ từ data
  const service = services[slug];

  //   console.log("services", services);
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceComponent data={service} />;
}

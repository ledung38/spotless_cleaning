// app/service/[slug]/page.tsx

import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";

export function generateMetadata({ params }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://spotless-cleaning-psi.vercel.app";
  const service = services[params.slug];

  // Nếu slug không tồn tại -> fallback metadata an toàn
  if (!service) {
    return {
      title: "Service not found | Spotless Cleaning",
      description: "Sorry, this service is not available.",
      alternates: { canonical: `${siteUrl}/service/${params.slug}` },
    };
  }

  // Metadata SEO thật cho từng slug
  return {
    title: `${service.title} | Spotless Cleaning`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: `${siteUrl}/og-services.png`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      url: `${siteUrl}/service/${params.slug}`,
      siteName: "Spotless Cleaning",
    },
    alternates: {
      canonical: `${siteUrl}/service/${params.slug}`,
    },
  };
}

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

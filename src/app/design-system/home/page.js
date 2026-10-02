import Home from "../../page";

export const metadata = {
  title: "Sistema de diseño · Home",
  robots: { index: false, follow: false },
};

export const revalidate = 1800;

export default function HomePreviewPage() {
  return <Home />;
}

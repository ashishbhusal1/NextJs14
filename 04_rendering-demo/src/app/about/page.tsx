import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About server component");
  return <h1>AboutPage {new Date().toLocaleTimeString()}</h1>;
}

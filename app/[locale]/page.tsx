import {Metadata} from "next";
import {default as About, generateMetadata as redirectedGenerateMetadata} from "@/app/[locale]/about/page";

export const metadata = {
  // just don't specify a title
};
/*export async function generateMetadata(): Promise<Metadata> {
   return redirectedGenerateMetadata();
}*/

export default function Home() {
  return <About />;
}

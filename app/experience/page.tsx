import { redirect } from "next/navigation";

/** Experience lives on `/` now — keep this URL as an alias. */
export default function ExperiencePage() {
  redirect("/");
}

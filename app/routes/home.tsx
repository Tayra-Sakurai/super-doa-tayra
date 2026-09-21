import type { Route } from "./+types/home";
import { createClient } from "~/utils/supabase.server";

export async function loader({ request }: Route.LoaderArgs) {
  const { supabase } = createClient(request);
  const { data: { user } } = await supabase.auth.getUser();

  return { user };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meet Recording" },
    { name: "description", content: "Welcome to Meet Recording!" },
  ];
}

export default function Home({
  
}) {
  return (
    <h1>Welcome</h1>
  );
}

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Match Recorder" },
    { name: "description", content: "Welcome to Match Recorder!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Input from "./Input";
import MyEvent from "./MyEvent";
import UseEffectExample from "./UseEffectExample";
import UseEffectExample2 from "./UseEffectExample2";
import StateObjectExample from "./StateObjectExample";
import UseRefExample from "./UseRefExample";
import IfElseExample from "./IfElseExample";
import ArrayAndMapExample from "./ArrayAndMapExample";
import NavLinkExample from "./NavLinkExample";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <NavLinkExample />;
}

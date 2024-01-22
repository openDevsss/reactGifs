import {
  EnvelopeSimple,
  Key,
  LockKey,
  PencilSimple,
} from "@phosphor-icons/react";
import { EmailConfirmation } from "./EmailConfirmation";
import { ProfileEdit } from "./ProfileEdit";

export const settingsPage = [
  {
    title: "Edit Profile",
    url: "edit",
    component: ProfileEdit,
    icon: <PencilSimple size={32} />,
  },
  {
    title: "Email confirmation",
    url: "confirmation",
    component: EmailConfirmation,
    icon: <EnvelopeSimple size={32} />,
  },
  {
    title: "Privacy",
    url: "privacy",
    component: "",
    icon: <LockKey size={32} />,
  },
  {
    title: "Password",
    url: "password",
    component: "",
    icon: <Key size={32} />,
  },
];

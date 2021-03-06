import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" aling="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/">
          DashBoard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/Users">
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/Forms">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/Automation">
          Automoção
        </NavLink>
      </NavSection>
    </Stack>
  );
}

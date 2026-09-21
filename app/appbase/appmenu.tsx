import Menu, { type MenuProps } from "@mui/material/Menu";

export default function AppMenu(props: Omit<MenuProps, "children">) {
  return (
    <Menu {...props} />
  );
}
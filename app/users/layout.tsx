import { ReactNode } from "react";
import Sidebar from '../components/sidebar/Sidebar';
import getUsers from '../actions/getUsers';
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: ReactNode;
}) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server component
    <Sidebar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}

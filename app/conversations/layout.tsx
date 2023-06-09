import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";
import getConversations from "../actions/getConversations";

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversation = await getConversations();
  return (
    // @ts-expect-error Server component
    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  );
}

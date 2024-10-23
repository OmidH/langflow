import ForwardedIconComponent from "@/components/genericIconComponent";
import useKnowledgeManagerStore from "@/stores/knowledgeManagerStore";
import { Outlet, useParams } from "react-router-dom";
import SidebarNav from "../../components/sidebarComponent";

export default function SettingsPage(): JSX.Element {
  const { id } = useParams();
  const knowledges = useKnowledgeManagerStore((state) => state.knowledges);
  const sidebarNavItems: {
    href?: string;
    title: string;
    icon: React.ReactNode;
  }[] = [];

  sidebarNavItems.push({
    title: "Knowledge 1",
    href: "/knowledge/1",
    icon: (
      <ForwardedIconComponent
        name="Globe"
        className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
      />
    ),
  });

  return (
    <div className="flex h-full w-full space-y-8 lg:flex-row lg:space-x-8 lg:space-y-8">
      <aside className="flex h-full shrink-0 flex-col space-y-6 pt-7 lg:w-[20vw]">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="flex-1 pb-8">
          Hello
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { PanelHeader } from "../PanelHeader";
const panelBreadcrumb = ["My Dashboard"];

function AdminDashboardPanel() {
  return (
    <div className="admin-dashboard-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-start-2 flex flex-col justify-center items-center shadow-[0px_0px_21px_-6px_#ffffff] rounded-xl p-5 text-center min-h-52 col-span-1 bg-(--dark-grey)">
                <p className="text-xl font-bold text-white mb-4 md:mb-6">Total Users</p>
                <h4 id="total_users" className="text-2xl md:text-3xl font-bold text-(--yellow-text)">269</h4>
                <p className="hidden last-update text-sm font-semibold text-(--dark-white) max-w-[180px] mx-auto mt-4">Last Update 2/7/2025, 12:51:37 PM</p>
            </div>            
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPanel;

import { PanelHeader } from "../PanelHeader";
const panelBreadcrumb = ["My Dashboard"];

function UserDashboardPanel() {
  return (
    <div className="user-dashboard-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="flex flex-col justify-center items-center shadow-[0px_0px_21px_-6px_#ffffff] rounded-xl p-5 text-center min-h-52 col-span-1 bg-(--dark-grey)">
                <p className="text-xl font-bold text-white mb-4 md:mb-6">Deposite<br/>Balance</p>
                <h4 id="deposit_bal" className="text-2xl md:text-3xl font-bold text-(--yellow-text)">24 USD</h4>
                <p className="last-update text-sm font-semibold text-(--dark-white) max-w-[180px] mx-auto mt-4">Last Update 2/7/2025, 12:51:37 PM</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-[0px_0px_21px_-6px_#ffffff] rounded-xl p-5 text-center min-h-52 col-span-1 bg-(--dark-grey)">
                <p className="text-xl font-bold text-white mb-4 md:mb-6">Withdraw<br/>Amount</p>
                <h4 id="withdraw_amt" className="text-2xl md:text-3xl font-bold text-(--yellow-text)">18 USD</h4>
                <p className="last-update text-sm font-semibold text-(--dark-white) max-w-[180px] mx-auto mt-4">Last Update 2/7/2025, 12:51:37 PM</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-[0px_0px_21px_-6px_#ffffff] rounded-xl p-5 text-center min-h-52 col-span-1 bg-(--dark-grey)">
                <p className="text-xl font-bold text-white mb-4 md:mb-6">P & L</p>
                <h4 id="p_and_l" className="text-2xl md:text-3xl font-bold text-(--yellow-text)">12 USD</h4>
                <p className="last-update text-sm font-semibold text-(--dark-white) max-w-[180px] mx-auto mt-4">Last Update 2/7/2025, 12:51:37 PM</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPanel;

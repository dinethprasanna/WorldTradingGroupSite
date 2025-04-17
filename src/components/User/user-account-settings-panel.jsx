import { PanelHeader } from "../PanelHeader";
const panelBreadcrumb = ["Profile", "Account Settings"];

function UserAccountSettingsPanel() {
  return (
    <div className="user-account-settings-panel panel ">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        
        <div className="ac_details p-3 md:p-5 bg-(--dark-grey) rounded-lg">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">Account Details</h4>

          <div className="grid gap-3">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label htmlFor="" className="text-white min-w-32">ID</label>
              <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">ID</div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label htmlFor="" className="text-white min-w-32">Email</label>
              <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Email</div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label htmlFor="" className="text-white min-w-32">Name</label>
              <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Name</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserAccountSettingsPanel;

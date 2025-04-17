import { PanelHeader } from "../PanelHeader";
const panelBreadcrumb = ["Profile", "Personal Information"];

function UserPersonalInformationPanel() {
    return(
        <div className="user-personal-information-panel panel">
            <PanelHeader name={panelBreadcrumb} />

            
            <div className="panel-body-content">
        
                <div className="personal_details p-3 md:p-5 bg-(--dark-grey) rounded-lg">
                    <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">My Profile Details</h4>

                    <div className="grid gap-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <label htmlFor="" className="text-white min-w-32">First Name</label>
                            <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">First Name</div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <label htmlFor="" className="text-white min-w-32">Last Name</label>
                            <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Last Name</div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <label htmlFor="" className="text-white min-w-32">Birthday</label>
                            <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Birthday</div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <label htmlFor="" className="text-white min-w-32">Phone Number</label>
                            <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Phone Number</div>
                        </div>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <label htmlFor="" className="text-white min-w-32">Country</label>
                            <div className="detail_box px-4 py-3 rounded-lg text-white bg-(--dark-green) grow">Country</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default UserPersonalInformationPanel;
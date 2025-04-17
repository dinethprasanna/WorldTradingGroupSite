import { PanelHeader } from "../PanelHeader";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
const panelBreadcrumb = ["Inquiry"];

function UserInquiryPanel() {
  return (
    <div className="user-inquiry-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="inquiry_form p-3 md:p-5 bg-(--dark-grey) rounded-lg">
              <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
              Send  an Inquiry
              </h4>

              <form>
                <div className="flex flex-col gap-6">                  

                  <div className="grid gap-3">
                    <Label htmlFor="inquiry" className="text-(--yellow-text)">
                    Enter your Inquiry
                    </Label>
                    <textarea
                      placeholder="Enter your Inquiry"
                      rows="4"
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 lg:min-h-[262px]"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <input type="hidden" name="user_email" />
                  </div>

                  <div className="block">
                    <Button type="submit" className="w-auto cursor-pointer">
                    Send Inquiry
                    </Button>
                  </div>
                </div>
              </form>
            </div>
      </div>
    </div>
  );
}

export default UserInquiryPanel;

import { PanelHeader } from "../PanelHeader";
import { toast } from "sonner";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const panelBreadcrumb = ["Promotions"];

function AdminPromotionsPanel() {
  const [formFields, setFormFields] = useState([
    { desktopImage: null, mobileImage: null, promo_code: "" }
  ]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [isPromoEnabled, setIsPromoEnabled] = useState(false);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const handleFileChange = (event, index, field) => {
    let data = [...formFields];
    data[index][field] = event.target.files[0];
    setFormFields(data);
  };

  const handleSingleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      sectionTitle,
      isPromoEnabled,
      promotions: formFields,
    };
    console.log("Submitted Form Data:", formData);
  };

  const addFields = (e) => {
    e.preventDefault();
    if (formFields.length >= 10) {
      toast.error("Max limit reached!");
      return;
    }
    setFormFields([...formFields, { desktopImage: null, mobileImage: null, promo_code: "" }]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="admin-promotions-panel panel">
      <PanelHeader name={panelBreadcrumb} />
      <div className="panel-body-content">
        <div className="admin_inquiries_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-(--yellow-text) font-bold text-xl mb-4 lg:mb-7">Site Promotions</h4>
          <div className="block mt-6 text-white">
            <form onSubmit={submit}>
              <div className="flex items-center space-x-2 mb-6">
                <label htmlFor="terms" className="text-sm">Enable/Disable promotion section on home page:</label>
                <Checkbox id="terms" checked={isPromoEnabled} onCheckedChange={setIsPromoEnabled} />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="section-title" className="text-(--yellow-text)">Add title</Label>
                <Input id="section-title" type="text" placeholder="Title" value={sectionTitle} onChange={(e) => handleSingleInputChange(e, setSectionTitle)} required />
              </div>

              <div className="dynamic-promo-fields mt-8 px-3 py-6 border-(--light-green) border-1 rounded-lg mb-8">
                <div className="title flex flex-col md:flex-row justify-between mb-6">
                  <p className="text-base text-(--yellow-text)">Add promotion slides</p>
                  <Button variant="success" onClick={addFields}>Add a promotion</Button>
                </div>

                <div className="prom-wrapper grid gap-4 max-h-[360px] overflow-y-auto">
                  {formFields.map((form, index) => (
                    <div key={index} className="single-promo p-2 rounded-lg border-amber-200 border-1">
                      <div className="grid lg:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2 col-span-1">
                          <label className="text-white min-w-32">Add banner Image for Desktop Version:</label>
                          <Input type="file" onChange={(e) => handleFileChange(e, index, 'desktopImage')} />
                        </div>
                        <div className="flex flex-col gap-2 col-span-1">
                          <label className="text-white min-w-32">Add banner Image for Mobile Version:</label>
                          <Input type="file" onChange={(e) => handleFileChange(e, index, 'mobileImage')} />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 md:flex-row md:items-center my-6">
                        <label className="text-white min-w-32">Promotion Code:</label>
                        <Input name="promo_code" placeholder="Promotion code" type="text" onChange={(event) => handleFormChange(event, index)} value={form.promo_code} />
                      </div>
                      <Button variant="destructive" onClick={() => removeFields(index)}>Remove</Button>
                    </div>
                  ))}
                </div>
              </div>
              <Button type="submit">Save Promotion</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPromotionsPanel;
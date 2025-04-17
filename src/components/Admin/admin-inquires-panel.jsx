import { PanelHeader } from "../PanelHeader";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
const panelBreadcrumb = ["Inquiries"];

function AdminInquiriesPanel() {
  return (
    <div className="admin-inquiries-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="admin_inquiries_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          Inquiries
          </h4>

          <div className="block mt-6 overflow-x">
            <Table className="table-auto overflow-scroll w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Inquiry ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>Eadward1234@email.com</TableCell>
                  <TableCell>
                    <div className="message max-h-24 overflow-y-auto">
                    Lorem ipsum dolor sit amet. Ut mollitia alias id expedita perferendis At amet saepe eum minima velit et 
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>Eadward1234@email.com</TableCell>
                  <TableCell>
                    <div className="message max-h-24 overflow-y-auto">
                    Lorem ipsum dolor sit amet. Ut mollitia alias id expedita perferendis At amet saepe eum minima velit et 
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>Eadward1234@email.com</TableCell>
                  <TableCell>
                    <div className="message max-h-24 overflow-y-auto">
                    Lorem ipsum dolor sit amet. Ut mollitia alias id expedita perferendis At amet saepe eum minima velit et 
                    </div>
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInquiriesPanel;

import { PanelHeader } from "../PanelHeader";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from 'lucide-react';
const panelBreadcrumb = ["User Management", "Withdrawal Requests"];

function AdminWithdrawalRequestsPanel() {
  return (
    <div className="admin-withdrawal-requests-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="admin_withdrawal_management_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          Withdrawal Requests
          </h4>

          <div className="block mt-6 overflow-x">
            <Table className="table-auto overflow-scroll w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Requested User</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Bank Address</TableHead>
                  <TableHead className="text-right w-28">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>XXXX.XX</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet. Ut mollitia 
                  </TableCell>
                  <TableCell className="text-right  w-28">
                    <div className="btn-grid flex flex-row gap-2 justify-end">
                      <Button variant="success" className="w-[38px] h-[38px] rounded-lg"><Check color="#FFF" size={16} /></Button>
                      <Button variant="destructive" className="w-[38px] h-[38px] rounded-lg"><X color="#FFF" size={16} /></Button>
                    </div>
                    
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>XXXX.XX</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet. Ut mollitia 
                  </TableCell>
                  <TableCell className="text-right  w-28">
                    <Badge variant="success">Approved</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell>XXXX.XX</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet. Ut mollitia 
                  </TableCell>
                  <TableCell className="text-right  w-28">
                    <Badge variant="destructive">Rejected</Badge>
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

export default AdminWithdrawalRequestsPanel;

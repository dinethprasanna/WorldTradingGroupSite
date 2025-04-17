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
const panelBreadcrumb = ["User Management", "Users"];

function AdminUsersPanel() {
  return (
    <div className="admin-users-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="admin_user_management_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          User Management
          </h4>

          <div className="block mt-6 overflow-x">
            <Table className="table-auto overflow-scroll w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Wallet Balance</TableHead>
                  <TableHead className="text-right w-28">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Mason</TableCell>
                  <TableCell>Edwards</TableCell>
                  <TableCell>
                    <div className="wallet_bal_with_update_btn">
                      <div className="bal_info mb-8">
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">Deposit Balance:</span>XXXX.XX</p>
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">Withdrawal Amount:</span>XXXX.XX</p>
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">P & L:</span>XXXX.XX</p>
                      </div>
                      <Button variant="secondary">Update Balance</Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right  w-28"><Button variant="destructive">Remove</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Mason</TableCell>
                  <TableCell>Edwards</TableCell>
                  <TableCell>
                    <div className="wallet_bal_with_update_btn">
                      <div className="bal_info mb-8">
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">Deposit Balance:</span>XXXX.XX</p>
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">Withdrawal Amount:</span>XXXX.XX</p>
                        <p className="text-sm"><span className="text-(--yellow-text) mr-2">P & L:</span>XXXX.XX</p>
                      </div>
                      <Button variant="secondary">Update Balance</Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right  w-28"><Button variant="destructive">Remove</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsersPanel;

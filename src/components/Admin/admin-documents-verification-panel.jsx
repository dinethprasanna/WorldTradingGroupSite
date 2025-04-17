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
import { Link } from "react-router";
const panelBreadcrumb = ["User Management", "Documents Verification"];

function AdminDocumentsVerificationPanel() {
  return (
    <div className="admin-documents-verification-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
      <div className="admin_user_management_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          Documents Verification
          </h4>

          <div className="block mt-6 overflow-x">
            <Table className="table-auto overflow-scroll w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Document ID</TableHead>
                  <TableHead>Uploaded User</TableHead>
                  <TableHead>Proof of identity</TableHead>
                  <TableHead>Proof of address</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>

                <TableRow>
                  <TableCell>102</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>

                  <TableCell className="proof-identity text-center w-28">
                    <div className="btn-grid flex flex-row gap-2 justify-center mb-3">
                      <Button variant="success" className="w-[38px] h-[38px] rounded-lg"><Check color="#FFF" size={16} /></Button>
                      <Button variant="destructive" className="w-[38px] h-[38px] rounded-lg"><X color="#FFF" size={16} /></Button>
                    </div>
                    <div className="view-doc">
                      <Link to={`#`}>
                        <Button variant="secondary">View Doc</Button>
                      </Link>
                    </div>                    
                  </TableCell>

                  <TableCell className="proof-address text-center w-28">
                    <div className="btn-grid flex flex-row gap-2 justify-center mb-3">
                      <Button variant="success" className="w-[38px] h-[38px] rounded-lg"><Check color="#FFF" size={16} /></Button>
                      <Button variant="destructive" className="w-[38px] h-[38px] rounded-lg"><X color="#FFF" size={16} /></Button>
                    </div>
                    <div className="view-doc">
                      <Link to={`#`}>
                        <Button variant="secondary">View Doc</Button>
                      </Link>
                    </div>                    
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>103</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="success">Approved</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="destructive">Rejected</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>104</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="destructive">Rejected</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="success">Approved</Badge>
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

export default AdminDocumentsVerificationPanel;

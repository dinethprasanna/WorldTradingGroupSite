import { PanelHeader } from "../PanelHeader";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"

const panelBreadcrumb = ["Profile", "Verified Documents"];

function UserVerifiedDocumentsPanel() {
  return (
    <div className="user-verfied-documents-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <form action="#" method="post">
          <div className="verified_docs_form p-3 md:p-5 bg-(--dark-grey) rounded-lg">
            <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
              Verify Documents
            </h4>

            <div className="grid gap-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <label
                  htmlFor="Proof_of_identity"
                  className="text-white min-w-32"
                >
                  Proof of Identity
                </label>
                <Input
                  id="Proof_of_identity"
                  className="px-4 pt-1 border-transparent file:text-white rounded-lg text-(--dark-grey) file:px-3 bg-[#9BA2A6] w-full max-w-80"
                  type="file"
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <label
                  htmlFor="Proof_of_address"
                  className="text-white min-w-32"
                >
                  Proof of Address
                </label>
                <Input
                  id="Proof_of_address"
                  className="px-4 pt-1 border-transparent file:text-white rounded-lg text-(--dark-grey) file:px-3 bg-[#9BA2A6] w-full max-w-80"
                  type="file"
                />
              </div>
            </div>
            <Button
              variant="default"
              type="submit"
              className="mt-6 md:mt-7 lg:mt-8 w-full md:w-auto block px-6 min-h-11 cursor-pointer font-semibold"
            >
              Send Request
            </Button>
          </div>
        </form>

        <div className="verified_docs_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
            Documents Status
          </h4>

          <div className="block mt-6">
            <Table>
              <TableCaption>A list of your recent sent documents.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Uploaded Document</TableHead>
                  <TableHead className="text-right w-28">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia alias</TableCell>
                  <TableCell className="text-right  w-28"><Badge variant="success">Approved</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia alias</TableCell>
                  <TableCell className="text-right  w-28"><Badge variant="secondary">Pending</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lorem ipsum dolor sit amet. Ut mollitia alias</TableCell>
                  <TableCell className="text-right  w-28"><Badge variant="destructive">Rejected</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserVerifiedDocumentsPanel;

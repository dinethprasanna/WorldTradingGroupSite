import { PanelHeader } from "../PanelHeader";
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
const panelBreadcrumb = ["Markets", "Instruments"];

function UserInstrumentsPanel() {
  return (
    <div className="user-instruments-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <div className="verified_docs_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          Instruments
          </h4>

          <div className="block mt-6">
            <Table>
              <TableCaption>A list of your recent sent documents.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Crrency Name</TableHead>
                  <TableHead>market Price</TableHead>
                  <TableHead className="text-right w-28">Add</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>My currecy 01</TableCell>
                  <TableCell>XX.XX USD</TableCell>
                  <TableCell className="text-right  w-28"><Button variant="secondary">Add +</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>My currecy 02</TableCell>
                  <TableCell>XX.XX USD</TableCell>
                  <TableCell className="text-right  w-28"><Button variant="secondary">Add +</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>My currecy 03</TableCell>
                  <TableCell>XX.XX USD</TableCell>
                  <TableCell className="text-right  w-28"><Button variant="secondary">Add +</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInstrumentsPanel;

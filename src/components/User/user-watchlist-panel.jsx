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
const panelBreadcrumb = ["Markets", "Watchlist"];

function UserWatchlistPanel() {
  return (
    <div className="user-watchlist-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
      <div className="verified_docs_tbl p-3 md:p-5 bg-(--dark-grey) rounded-lg mt-8">
          <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
          Watchlist
          </h4>

          <div className="block mt-6">
            <Table>
              <TableCaption>Your watchlist.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Crrency Name</TableHead>
                  <TableHead>market Price</TableHead>
                  <TableHead className="text-right w-28">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>My currecy 01</TableCell>
                  <TableCell>XX.XX USD</TableCell>
                  <TableCell className="text-right  w-28"><Button variant="destructive">Remove</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>My currecy 02</TableCell>
                  <TableCell>XX.XX USD</TableCell>
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

export default UserWatchlistPanel;

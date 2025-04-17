import { PanelHeader } from "../PanelHeader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CreditCard, Copy  } from "lucide-react";
import { Link } from "react-router";
import { toast } from "sonner"
import { Button } from "../ui/button";

const panelBreadcrumb = ["My Funds", "Deposit"];

function UserDepositPanel() {
  const handleCopytoClipboard = (e) => {
    e.preventDefault();
    const copiedText = e.target.dataset.copy;
    navigator.clipboard.writeText(copiedText);

    // Show toast notification
    toast.info(" Copied to clipboard.");
  };
  return (
    <div className="user-deposit-panel panel">
      <PanelHeader name={panelBreadcrumb} />
      
      <div className="panel-body-content">

      <Tabs defaultValue="local_payment" className="w-auto max-w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger className="cursor-pointer" value="local_payment">Local payment</TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="crypto_payment">Crypto Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="local_payment">
          <Link to={`/`} className="mt-6 md:mt-8 flex flex-col justify-center items-center shadow-[0px_0px_21px_-6px_#ffffff] rounded-xl p-5 text-center w-52 h-52">
            <p className="text-white text-center text-xl md:text-2xl font-bold">Pay Now</p>
            <CreditCard color="#ffffff" size={88} />
          </Link>
        </TabsContent>

        <TabsContent value="crypto_payment">
          <div className="crypto-accordion">

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>BEP20</AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-4 justify-between items-center flex-wrap lg:flex-nowrap mb-6 lg:mb-1">
                    <p className="text-white">
                    0x3e78badf987a3cc50edd13954dc71a327b0a7a82 
                    </p>
                    <Button
                    variant="outline"
                    data-copy={"This is sample copied text 01"}
                    onClick={handleCopytoClipboard}
                    className="bg-transparent border-0 p-0 hover:bg-transparent cursor-pointer"
                  >
                    <Copy color="#ffffff" size={24} />
                  </Button>
                  </div>
                  <div className="qr">
                    <img src="/UserAssests/sample-qr.png" alt="QR" />
                  </div>
                  
                  
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>BEP20</AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-4 justify-between items-center flex-wrap lg:flex-nowrap mb-6 lg:mb-1">
                    <p className="text-white">
                    0x3e78badf987a3cc50edd13954dc71a327b0a7a82 
                    </p>
                    <Button
                    variant="outline"
                    data-copy={"This is sample copied text 02"}
                    onClick={handleCopytoClipboard}
                    className="bg-transparent border-0 p-0 hover:bg-transparent cursor-pointer"
                  >
                    <Copy color="#ffffff" size={24} />
                  </Button>
                  </div>
                  <div className="qr">
                    <img src="/UserAssests/sample-qr.png" alt="QR" />
                  </div>                 
                  
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </TabsContent>
      </Tabs>

      </div>
    </div>
  );
}

export default UserDepositPanel;

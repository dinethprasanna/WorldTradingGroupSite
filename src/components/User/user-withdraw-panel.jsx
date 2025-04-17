import { PanelHeader } from "../PanelHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link } from "react-router";
import { toast } from "sonner";
import { Button } from "../ui/button";
const panelBreadcrumb = ["My Funds", "Withdraw"];

function UserWithdrawPanel() {
  return (
    <div className="user-withdraw-panel panel">
      <PanelHeader name={panelBreadcrumb} />

      <div className="panel-body-content">
        <Tabs defaultValue="local_payment" className="w-auto">
          <div className="tab-wrapper  max-w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="cursor-pointer" value="local_payment">
                Local payment
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="crypto_payment">
                Crypto Payment
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="local_payment">
            <div className="ac_details p-3 md:p-5 bg-(--dark-grey) rounded-lg">
              <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
                Withdraw
              </h4>

              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="amt_of_withdraw" className="text-(--yellow-text)">
                    Amount to withdrwal (USD)
                    </Label>
                    <Input
                      id="amt_of_withdraw"
                      type="number"
                      placeholder="Amount to withdrwal"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="ac_number" className="text-(--yellow-text)">
                    Account Number
                    </Label>
                    <Input
                      id="ac_number"
                      type="number"
                      placeholder="Account Number"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="benificiary_name" className="text-(--yellow-text)">
                    Benificiary Name
                    </Label>
                    <Input
                      id="benificiary_name"
                      type="text"
                      placeholder="Benificiary name"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="benificiary_address" className="text-(--yellow-text)">
                    Benificiary Address
                    </Label>
                    <Input
                      id="benificiary_address"
                      type="text"
                      placeholder="Benificiary address"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1">
                      <Label htmlFor="ifsc" className="text-(--yellow-text)">
                      IFSC
                      </Label>
                      <Input
                        id="ifsc"
                        type="text"
                        placeholder="IFSC"
                        required
                        className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div className="col-span-1">
                      <Label htmlFor="swift_code" className="text-(--yellow-text)">
                      Swift Code
                      </Label>
                      <Input
                        id="swift_code"
                        type="text"
                        placeholder="Swift code"
                        required
                        className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="bank_name" className="text-(--yellow-text)">
                    Bank Name
                    </Label>
                    <Input
                      id="bank_name"
                      type="text"
                      placeholder="Bank name"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="bank_address" className="text-(--yellow-text)">
                    Bank Address
                    </Label>
                    <Input
                      id="bank_address"
                      type="text"
                      placeholder="Bank address"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="block">
                    <Button type="submit" className="w-auto cursor-pointer">
                      Send Request
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="crypto_payment">
          <div className="ac_details p-3 md:p-5 bg-(--dark-grey) rounded-lg">
              <h4 className="text-white font-bold text-xl mb-6 lg:mb-9">
                Withdraw
              </h4>

              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="amt_of_withdraw" className="text-(--yellow-text)">
                    Amount to withdrwal (USD)
                    </Label>
                    <Input
                      id="amt_of_withdraw"
                      type="number"
                      placeholder="Amount to withdrwal"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="wallet_address" className="text-(--yellow-text)">
                    Wallet Address
                    </Label>
                    <Input
                      id="wallet_address"
                      type="number"
                      placeholder="Wallet address"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="benificiary_name" className="text-(--yellow-text)">
                    Benificiary Name
                    </Label>
                    <Input
                      id="benificiary_name"
                      type="text"
                      placeholder="Benificiary name"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="network" className="text-(--yellow-text)">
                    Network
                    </Label>
                    <Input
                      id="network"
                      type="text"
                      placeholder="Network"
                      required
                      className="bg-[#A9AEB0] border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"
                    />
                  </div>

                  <div className="block">
                    <Button type="submit" className="w-auto cursor-pointer">
                      Send Request
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default UserWithdrawPanel;

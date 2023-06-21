import logo from "./logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
   const [amount, set_amount] = useState(0);
   const [tenor, set_tenor] = useState(3);
   const [interest, set_interest] = useState(10);
   const [processing, set_processing] = useState(0);
   const [processing_fee, set_processing_fee] = useState(0);
   const [receivable, set_receivable] = useState(0);
   const [monthly_installment, set_monthly_installment] = useState(0);
   const [aggregated, set_aggregated] = useState(0);

   useEffect(() => {
      let monthly_installment =
         tenor !== 0 ? amount * (interest / 100) + amount / tenor : 0;
      let processing_fee = processing !== 0 ? (processing / 100) * amount : 0;
      let aggregated =
         monthly_installment !== 0 ? monthly_installment * tenor : 0;
      set_aggregated(aggregated);
      set_processing_fee(processing_fee.toFixed(2));
      set_receivable(amount - processing_fee);
      set_monthly_installment(monthly_installment.toFixed(2));
   }, [amount, tenor, interest, processing]);

   return (
      <div className="mx-auto max-w-7xl p-4 flex flex-col items-center">
         <img
            src={logo}
            alt="Clouditate Logo"
            className="w-16 h-16 text-center "
         />
         <h2>Clouditate</h2>
         <div className="md:px-56">
            <h1 className="text-center text-2xl py-4 font-bold">
               USD Loan Calculator Zimbabwe
            </h1>

            <section className="font-sans">
               <div class="bg-white px-2 py-2 rounded mb-2">
                  <div class="flex flex-row items-center mb-2 place-content-between">
                     <label class="block tracking-wide text-sm md:text-base font-bold w-3/5">
                        Loan Amount (US$)
                     </label>
                     <input
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => set_amount(e.target.value)}
                        class="ml-2 w-2/5 py-2 px-2 border-2 text-xl border-black rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-bold"
                        id="amount"
                        type="number"
                     />
                  </div>
               </div>

               <div class="bg-white px-2 py-2 rounded mb-2">
                  <div class="flex flex-row items-center mb-2 place-content-between">
                     <label class="block tracking-wide text-sm md:text-base font-bold w-3/5">
                        Loan Tenor (Months)
                     </label>
                     <input
                        name="tenor"
                        required
                        value={tenor}
                        onChange={(e) => set_tenor(e.target.value)}
                        class="ml-2 w-2/5 py-2 px-2 border-2 text-xl border-black rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-bold"
                        id="amount"
                        type="number"
                     />
                  </div>
               </div>

               <div class="bg-white px-2 py-2 rounded mb-2">
                  <div class="flex flex-row items-center mb-2 place-content-between">
                     <label class="block tracking-wide  text-sm md:text-base font-bold w-3/5">
                        Interest Rate (%)
                     </label>
                     <input
                        name="interest"
                        required
                        value={interest}
                        onChange={(e) => set_interest(e.target.value)}
                        class="ml-2 w-2/5 py-2 px-2 border-2 text-xl border-black rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-bold"
                        id="amount"
                        type="number"
                     />
                  </div>
               </div>

               <div class="bg-white px-2 py-2 rounded mb-2">
                  <div class="flex flex-row items-center mb-2 place-content-between">
                     <label class="block tracking-wide  text-sm md:text-base font-bold w-3/5">
                        Processing Fee (%)
                     </label>
                     <input
                        name="processing"
                        required
                        value={processing}
                        onChange={(e) => set_processing(e.target.value)}
                        class="ml-2 w-2/5 py-2 px-2 border-2 text-xl border-black rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-bold"
                        id="amount"
                        type="number"
                     />
                  </div>
               </div>
            </section>
            <section>
               <div
                  class="flex flex-col place-content-between mb-4 bg-main py-6 px-4 rounded text-white"
                  id="installment"
               >
                  <div class="flex flex-row place-content-between">
                     <label class="block tracking-wide  text-base md:text-base font-bold">
                        Processing Fee
                     </label>
                     <h3 class="text-xl md:text-xl font-bold">
                        $ {processing_fee}
                     </h3>
                  </div>
                  <div class="flex flex-row place-content-between">
                     <label class="block tracking-wide  text-base md:text-base font-bold">
                        You'll Receive
                     </label>
                     <h3 class="text-xl md:text-xl font-bold  border-gray-200 border-2 pl-4 pr-4 rounded0xl">
                        $ {receivable}
                     </h3>
                  </div>
                  <div class="flex flex-row place-content-between">
                     <label class="block tracking-wide  text-base md:text-base font-bold">
                        Monthly Payment
                     </label>
                     <h3 class="text-xl md:text-xl font-bold">
                        $ {monthly_installment}
                     </h3>
                  </div>

                  <div class="flex flex-row place-content-between">
                     <label class="block tracking-wide  text-base md:text-base font-bold">
                        Total Payment in {tenor} months
                     </label>
                     <h3 class="text-xl md:text-xl font-bold">
                        $ {aggregated}
                     </h3>
                  </div>
               </div>
            </section>

            <section className="mt-4">
               <h2 className="text-2xl py-2 font-bold">About</h2>
               <p>
                  This is a simple loan Calculator you can use if you are
                  considering to take a loan from a bank or microfinance company
                  in Zimbabwe .
               </p>
               <h3 className="text-xl py-2 font-bold mt-4">Contributions</h3>
               <p>
                  If you want to contribute to this project,{" "}
                  <a
                     className="text-blue-600"
                     href="https://github.com/theonga/loan_calculator"
                  >
                     {" "}
                     here is the gihub repository.
                  </a>
               </p>
            </section>
            <footer className="my-8">
               <h2 className="font-bold">
                  Made with love by{" "}
                  <a
                     className="text-blue-600"
                     href="https://github.com/theonga"
                  >
                     Theophilus Ngaribvume
                  </a>
               </h2>
            </footer>
         </div>
      </div>
   );
}

export default App;

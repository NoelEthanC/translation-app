"use client";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session) return;
    // push doc into firestore
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user?.id, "checkout_sessions"),
      {
        price: "price_1OFCwvCpzq2nAGo8d3xWL8OT",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        // Show an error to your customer and inspect
        // your cloud functions
        alert(`An error occurred: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        // we have a stripe checkout URL
        window.location.assign(url);
        setLoading(false);
      }
    });
    // stripe extension on firebase will create a checkout  session
    // redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2  ">
      <button
        onClick={() => createCheckoutSession()}
        className="
      mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
      leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indig-600
      cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-disabled  "
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default CheckoutButton;

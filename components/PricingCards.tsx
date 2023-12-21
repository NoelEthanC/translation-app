import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

const tiers = [
  {
    name: "Starter",
    id: null,
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywehere",
    features: [
      "20 message Chat Limit in chats",
      "2 participant limit in chats",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48 hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "$0.10",
    description: "Unlcok the full potential with PRO!",
    features: [
      "Unlimited messages in chats",
      "Unlimited participants in chats",
      "Unlimited Chat Rooms",
      "Supports up  10 languages",
      "Multimedia suppport in chats (Coming soon!)",
      "1-hour, dedicated support response time",
      "Early access to New features",
    ],
  },
];

export default function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div className="">
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 ">
        {tiers.map((tier) => (
          <div
            className="flex flex-col justify-between rounded-3xl bg-white  p-8  shadow-xl 
            ring-1 ring-gray-900/10 sm:p-10 "
            key={tier.id}
          >
            <h3
              className="text-base font-semibold leading-7  text-indigo-600"
              id={tier.id + tier.name}
            >
              {tier.name}
            </h3>
            <div className="flex mt-4 items-baseline gap-x-2">
              {tier.priceMonthly ? (
                <>
                  <span className="text-5xl font-semibold leading-7  text-gray-900 ">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-base font-semibold leading-7  text-gray-600">
                    /Monthly
                  </span>
                </>
              ) : (
                <span className="text-5xl font-semibold leading-7  text-gray-900">
                  Free
                </span>
              )}
            </div>

            <p className="mt-6 text-base leading-7 text-gray-600 ">
              {tier.description}
            </p>
            <ul
              className="mt-10 space-y-4 text-sm  leading-6 text-gray-600"
              role="list"
            >
              {tier.features.map((feature) => (
                <li className="flex gap-6-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600 "
                    aria-hidden={true}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {redirect ? (
              <Link
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
              leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indig-600
              cursor-pointer disabled:opacity-80  "
                href="/register"
              >
                Get Started
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import CustomerForm from "@/components/forms/CustomerForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen container mx-auto flex items-center">
      <section className="container mx-auto my-auto">
        <div className="px-12">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patein"
            className="mb-12 h-10 w-fit "
          />

          <CustomerForm />

          <div className="text-sm text-white flex items-center justify-center mt-20 ">
            © 2025 BookingCare For EveryOne
            <Link href={"/?admin=true"} className="text-green-500 ml-1"> Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patein"
        className="mb-12 w-1/2 h-2/3 px-12 "
      />
    </div>
  );
}

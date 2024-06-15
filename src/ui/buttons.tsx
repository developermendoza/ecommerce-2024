import Link from "next/link";

export function PrimaryButton({
  buttonUrl,
  buttonName,
}: {
  buttonUrl: string;
  buttonName: string;
}) {
  return (
    <Link href={buttonUrl}>
      <p className="py-3 w-full sm:w-[250px] text-center text-white bg-black border border-2 border-black rounded hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-opacity-50">
        {buttonName}
      </p>
    </Link>
  );
}

export function SecondaryButton({
  buttonUrl,
  buttonName,
}: {
  buttonUrl: string;
  buttonName: string;
}) {
  return (
    <Link href={buttonUrl}>
      <p className="py-3 w-full sm:w-[250px] text-center text-black bg-white border border-2 border-black rounded hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-opacity-50">
        {buttonName}
      </p>
    </Link>
  );
}

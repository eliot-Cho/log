import { Svg } from "@/assets";
import { useRouter } from "next/router";

export const Back = () => {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push("/")}
      className="flex items-center gap-2 text-lg cursor-pointer mt-11 hover:opacity-60"
    >
      <Svg.Arrow />
      BACK
    </a>
  );
};

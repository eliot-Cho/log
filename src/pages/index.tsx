import Link from "next/link";
import { WithHeaderFooter } from "@/layouts/WithHeaderFooter";

export default () => {
  return (
    <WithHeaderFooter>
      <p className="mb-5">
        Hello, I am <b>Eliot-Cho</b> 👋.
        <br /> Currently working as a developer at{" "}
        <Link
          href={"https://blog.getliner.com/"}
          target="_blank"
          className="hover:opacity-60"
        >
          <b>LINER.</b>
        </Link>
      </p>
      <p className="mb-4">
        저는 개발 외에도 흥미로운 문제들을 푸는 것을 좋아해요.
        <br /> 그리고 요즘에는 데이터 분석, PO에 관심을 가지고 있어요.
      </p>
      <p className="mb-4">
        오픈소스에 기여하는 것을 좋아해요.
        <br />
        특정 기술에 대해서 discussion하는 것을 즐겨요.
      </p>
      <p>제 취미는 헬스와 코딩이에요. 관심을 가져주셔서 감사합니다~!</p>
    </WithHeaderFooter>
  );
};

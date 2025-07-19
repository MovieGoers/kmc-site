import Image from "next/image";
import { socialLinks } from "./lib/config"; // socialLinks가 github와 devlog 링크를 포함하도록 설정 필요

export default function Page() {
  return (
    <section>
      {/* socialLinks.twitter 대신 github 링크를 사용하는 것이 더 적합해 보입니다. */}
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <Image
          src="/profile.png" // 프로필 이미지 경로가 맞는지 확인해주세요.
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="prose mb-8 text-2xl font-medium">사용자의 입장에서 공감하고 고민하는 프론트엔드 개발자, 김민철입니다.</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          안녕하세요! 다양한 기술 스택을 활용하여 사용자 경험을 최우선으로 생각하는 개발자 김민철입니다.
          React, Next.js, React Native를 기반으로 PWA 및 모바일 앱 개발 경험이 있으며,
          타입스크립트를 활용한 안정적인 프론트엔드 개발 경험을 다수 보유하고 있습니다.
        </p>
        <p>
          백엔드 개발 또한 Java와 Spring Boot를 사용하여 RESTful API 서버 구축 경험이 있으며,
          Unity Engine을 활용한 게임 개발 및 퍼블리싱 경험도 있습니다.
        </p>
        <p>
          현재 HTML, CSS, 웹 표준, 웹 접근성에 대해서 심도 있는 학습을 진행하고 있습니다.
        </p>
        {/* 추가적인 섹션을 여기에 포함할 수 있습니다. 예를 들어, 핵심 역량, 경험, 수상 내역 등. */}
        
        <h2 className="mt-8 text-xl font-medium">주요 기술 스택</h2>
        <ul>
          <li><strong>프론트엔드:</strong> HTML, CSS, React, Next.js, React Native, JavaScript, TypeScript, Vue.js</li>
          <li><strong>백엔드:</strong> Java, Spring Boot, MyBatis, MySQL</li>
          <li><strong>기타:</strong> C, C++, Unity Engine</li>
        </ul>

        <h2 className="mt-8 text-xl font-medium">경력 및 교육</h2>
        <ul>
          <li><strong>엔테크서비스(NTS) UI 개발 인턴 (2025.07 ~ 현재)</strong>
          </li>
            
          <li>
            <strong>삼성 청년 SW 아카데미 12기 자바 전공반 1200시간 (2024.07 ~ 2025.06)</strong>
            <div className="text-sm">(Java, 알고리즘, SpringBoot, MySQL, Vue.js, React.js, React Native 학습 및 팀 프로젝트 진행)</div>
          </li>
          <li><strong>서강대학교 컴퓨터공학과 졸업 (2018.02 ~ 2024.08)</strong></li>
        </ul>

        <h2 className="mt-8 text-xl font-medium">수상 및 자격</h2>
        <ul>
          <li><strong>삼성 청년 소프트웨어 아카데미 12기 특화 프로젝트 (사각, React Native) 우수상 (2025.04.22)</strong></li>
          <li><strong>OPIc Advanced Low (AL) 등급 (2024.03.14)</strong></li>
          <li><strong>정보처리기사 (2023.11.15)</strong></li>
        </ul>
       
      </div>
    </section>
  );
}
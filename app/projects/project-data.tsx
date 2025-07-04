export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "다시, 봄 (Re:Spring)",
    year: 2025,
    description:
      "퇴직자들을 위한 웹/앱 공익 서비스",
    url: "https://reinvented-perfume-2f5.notion.site/Re-Spring-15a32d73ef708171aba2f1fd0fd1a12c",
  },
  {
    title: "사각 (Square)",
    year: 2025,
    description:
      "사용자 통계 및 투표 기반 모바일 토론 플랫폼",
    url: "https://reinvented-perfume-2f5.notion.site/Square-1da32d73ef70809990d1e44edf0d6ccb",
  },
  {
    title: "집피티 (ZipPT)",
    year: 2024,
    description:
      "ChatGPT 기반 부동산 챗봇 웹 서비스",
    url: "https://reinvented-perfume-2f5.notion.site/ZipPT-15a32d73ef7081e5b8e7ce99f9673690",
  },
  {
    title: "시카 (CICA)",
    year: 2025,
    description:
      "콜센터 상담사를 위한 AI 상담 보조 프로그램",
    url: "https://reinvented-perfume-2f5.notion.site/CICA-1ff32d73ef7080dd8442e00aaec85450",
  },
];

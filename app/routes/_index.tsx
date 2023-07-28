import Layout from "~/components/ui/layout";
import { AnchorLink } from "~/components/ui/typography/anchor-link";
import { Paragraph } from "~/components/ui/typography/paragraph";

import "../styles/home.css";

const pagesList = [
  {
    id: 1,
    route: "/comments",
  },
  {
    id: 2,
    route: "/digidaw",
  },
  {
    id: 3,
    route: "/faceless",
  },
  {
    id: 4,
    route: "/grolin/register",
  },
  {
    id: 5,
    route: "/jobless",
  },
  {
    id: 6,
    route: "/kourse",
  },
  {
    id: 7,
    route: "/musix-player",
  },
  {
    id: 8,
    route: "/nowted-hero",
  },
  {
    id: 9,
    route: "/priced",
  },
  {
    id: 10,
    route: "/swiftship",
  },
  {
    id: 11,
    route: "/testimonial",
  },
  {
    id: 12,
    route: "/twitter-embed",
  },
  {
    id: 13,
    route: "/movies",
  },
  {
    id: 14,
    route: "/holadok",
  },
  {
    id: 15,
    route: "/enlighten",
  },
  {
    id: 16,
    route: "/grolin/login",
  },
  {
    id: 17,
    route: "/authed/login",
  },
  {
    id: 18,
    route: "/authed/daftar",
  },
  {
    id: 19,
    route: "/authed/forgot-password",
  },
  {
    id: 20,
    route: "/authed/reset-password",
  },
];

export default function Index() {
  return (
    <Layout>
      <div className="mb-5">
        <AnchorLink
          type="a"
          to="https://github.com/haikelz/slicing"
          intent="withGradient"
          size="extra-large"
          target="_blank"
        >
          haikelz/slicing
        </AnchorLink>
        <Paragraph intent="gray">
          My result for 1 day 1 slicing. Design didapat dari{" "}
          <AnchorLink type="a" intent="withoutGradient" to="https://codedesign.dev" target="_blank">
            codedesign.dev
          </AnchorLink>{" "}
          . Mayoritas desain yang dislicing berbentuk component karena untuk ngejar waktu, tapi
          tidak dipungkiri bakal ngambil yang page juga. Berikut hasil slicingnya(pilih salah satu
          link):
        </Paragraph>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {pagesList.map((item) => (
          <AnchorLink intent="withoutGradient" type="Link" to={item.route} key={item.id}>
            {item.route}
          </AnchorLink>
        ))}
      </div>
    </Layout>
  );
}

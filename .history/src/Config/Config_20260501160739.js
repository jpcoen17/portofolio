import { FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";


export const SkillSet=[
    {
        id: "1",
        name: "AptosYo",
        imgsrc: process.env.PUBLIC_URL + "/images/aptos.png"
    },
    {
        id: "2",
        name: "Bitsong",
        imgsrc: process.env.PUBLIC_URL + "/images/bitsong.jpg"
    },
    {
        id: "3",
        name: "Coral Finance",
        imgsrc: process.env.PUBLIC_URL + "/images/coral.png"
    },
    {
        id: "4",
        name: "GameFi.org",
        imgsrc: process.env.PUBLIC_URL + "/images/gamefi.jpg"
    },
    {
        id: "5",
        name: "IDriss",
        imgsrc: process.env.PUBLIC_URL + "/images/idriss.jpg"
    },
    {
        id: "6",
        name: "MetaTdex",
        imgsrc: process.env.PUBLIC_URL + "/images/meta.png"
    },
    {
        id: "7",
        name: "Mun Blockchain",
        imgsrc: process.env.PUBLIC_URL + "/images/mun.jpg"
    },
    {
        id: "8",
        name: "Payper Finance",
        imgsrc: process.env.PUBLIC_URL + "/images/payper.png"
    },
    {
        id: "9",
        name: "Plexus",
        imgsrc: process.env.PUBLIC_URL + "/images/plexus.png"
    },
    {
        id: "10",
        name: "Point Network",
        imgsrc: process.env.PUBLIC_URL + "/images/point.png"
    },
    {
      id: "11",
      name: "Sacred Finance",
      imgsrc: process.env.PUBLIC_URL + "/images/sacred.jpg"
    },
    {
        id: "12",
        name: "Stader.BNB",
        imgsrc: process.env.PUBLIC_URL + "/images/stader.jpg"
    },
    {
        id: "13",
        name: "Ultrade",
        imgsrc: process.env.PUBLIC_URL + "/images/Ultrade.jpg"
    },

]
    export const Experience = [
        {
          id: 1,
          date: "2024 - Present",
          name: "Community Manager",
          company: "Multiple Web3 Projects",
          desc: [
            "Managing and scaling Discord & Telegram communities",
            "Driving engagement and increasing active user participation",
            "Handling announcements, campaigns, and community events",
            "Providing user support and resolving issues efficiently"
          ]
        },
        {
          id: 2,
          date: "2023 - 2024",
          name: "Moderator",
          company: "Aptos, Point Network, Sacred Finance, Payper Finance, Plexus, UltraTrade, Astroport, Idriss",
          desc: [
            "Monitoring community channels and enforcing rules",
            "Preventing spam, scams, and maintaining a safe environment",
            "Assisting users with inquiries and technical issues",
            "Supporting team operations during campaigns and launches"
          ]
        },
        {
          id: 3,
          date: "2023 - 2024",
          name: "Ambassador",
          company: "Coral Finance, MetaDex, Stader BNB, GameFi.org",
          desc: [
            "Representing projects and promoting brand awareness",
            "Creating and sharing content to attract new users",
            "Helping onboard new community members",
            "Supporting marketing campaigns and community growth"
          ]
        },
      ];
      export const Education = [
        {
          id: 1,
          date: "2020 - 2024",
          name: "Universitas Nahdlatul Ulama Sunan Giri Bojonegoro",
          company: "Bojonegoro, Indonesia",
          desc: "Bachelor Degree in Informatics Engineering (Teknik Informatika)"
        },
        {
          id: 2,
          date: "2017 - 2020",
          name: "Senior High School (SMA)",
          company: "Indonesia",
          desc: "Social Sciences Major (IPS)"
        },
        {
          id: 3,
          date: "2022",
          name: "Webinar: Organizational Skills & Leadership",
          company: "Online Event",
          desc: "Participated in a webinar focused on effective organization, teamwork, and leadership skills development."
        }
      ];
export const Services = [
  {
    icon: <FaUsers />,
    name: "Community Manager",
    desc: "Managing and growing online communities, engaging with members, and building strong relationships across platforms like Discord and Telegram."
  },
  {
    icon: <FaShieldAlt />,
    name: "Moderation",
    desc: "Ensuring community safety by monitoring chats, enforcing rules, and maintaining a healthy and active environment."
  },
  {
    icon: <FaRocket />,
    name: "Ambassador",
    desc: "Representing projects, promoting brand awareness, and driving user adoption through campaigns and community engagement."
  }
];
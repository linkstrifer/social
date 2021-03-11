import { container } from "./styles.module.css";

import Links from "./components/Links/index";
import { Link as LinkType } from "./components/Links/types";
import Profile from "./components/Profile";

const links: LinkType[] = [
  {
    url: "https://instragram.com/LinkStrifer",
    text: "Instagram"
  },
  {
    url: "http://AnotherNoob.com/Discord",
    text: "Discord"
  },
  {
    url: "https://twitch.com/LinkStrifer",
    text: "Twitch"
  },
  {
    url: "https://youtube.com/AnotherNoob",
    text: "YouTube"
  },
  {
    url: "https://twitter.com/LinkStrifer",
    text: "Twitter"
  }
];

export default function App() {
  return (
    <div className={container}>
      <Profile />
      <Links links={links} />
    </div>
  );
}

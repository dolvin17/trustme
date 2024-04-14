import Image from "next/image";
import styles from "@/styles/app.module.css";
import {
  DocsCard,
  HelloComponentsCard,
  HelloNearCard,
} from "@/components/cards";
import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";


export default function Home() {
  return (
	<>
 <Proposal />
<SecondNav />

	</>
  );
}

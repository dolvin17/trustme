import Image from "next/image";
import styles from "@/styles/app.module.css";
import {
  DocsCard,
  HelloComponentsCard,
  HelloNearCard,
} from "@/components/cards";
import Proposal from "@/components/proposal";
import Candidates from "@/components/candidates";

export default function Home() {
  return (
	<>
 <Proposal />
 <Candidates />
	</>
  );
}

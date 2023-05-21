import Htext from "@/shared/Htext";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil earum numquam culpa facere aperiam.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil earum numquam culpa facere aperiam.",

  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil earum numquam culpa facere aperiam.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

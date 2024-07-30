import { motion, AnimatePresence } from "framer-motion";
import {
  FolderIcon,
  Video,
  Music2,
  Image,
  File,
  ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";

export const RecursiveRender = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = () => {
    if (data.nodes) {
      return (
        <FolderIcon
          className={`size-6 text-sky-500 ${
            data.nodes.length === 0 ? "ml-[22px]" : ""
          }`}
        />
      );
    } else if (data.name.includes(".mp4")) {
      return <Video className="ml-[22px] size-6 text-orange-400" />;
    } else if (data.name.includes(".mp3")) {
      return <Music2 className="ml-[22px] size-5 text-cyan-700" />;
    } else if (data.name.includes(".png") || data.name.includes(".jpg")) {
      return <Image className="ml-[22px] size-5 text-slate-500" />;
    } else {
      return <File className="ml-[22px] size-6 text-gray-900" />;
    }
  };

  return (
    <li className="">
      <span className="flex items-center gap-1.5 py-1">
        {data.nodes && data.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "tween", bounce: 0, duration: 0.4 }}
              className="flex"
            >
              <ChevronRightIcon className="size-4 text-gray-500" />
            </motion.span>
          </button>
        )}

        {getIcon()}
        {data.name}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="pl-6 overflow-hidden flex flex-col justify-end"
          >
            {data.nodes?.map((node: any) => (
              <RecursiveRender data={node} key={node.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

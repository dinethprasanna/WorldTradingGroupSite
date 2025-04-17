import { Milestone, ChevronRight  } from "lucide-react";

export function PanelHeader(props) {
  return (
    <>
      <div className="panel-header-breadcrumb mb-6 md:mb-8 lg:mb-10 flex items-start gap-3.5">
        <Milestone color="#FFFFFF" size={24} />
        <p className="text-sm md:text-base m-0 text-white flex gap-2">
          {props.name.map((item, i) => (
            <span key={i} className="flex justify-center items-center">
              {item}
              {i !== props.name.length - 1 && <ChevronRight color="#FFF" size={24} />}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}

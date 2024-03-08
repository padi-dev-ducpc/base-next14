'use client';

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import chevron from "@/assets/icons/chevron-down.svg";
import { useCallback } from "react";

export interface IStatusAccordionProps {}

export default function StatusAccordion({}: IStatusAccordionProps) {

  const AccordionItem = useCallback(({ header, children, ...rest }: any) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          {!isEnter && (
            <Image className="ml-auto" src={chevron} alt="Open" />
          )}
        </>
      )}
      className=""
      buttonProps={{
        className: ({ isEnter }) =>
          `cursor-pointer flex items-center w-full m-0 p-4 text-base text-center border-none hover:bg-[#f3f3f3] ${isEnter && "hover:bg-white"}`,
        
      }}
      contentProps={{ className: 'itmContent' }}
      panelProps={{ className: 'p-4' }}
    >
      {({ toggle }) => (
        <>
          {children}
  
          <button className="block mt-4 ml-auto" onClick={() => toggle(false)}>
            <Image className="rotate-180" src={chevron} alt="Close" />
          </button>
        </>
      )}
    </Item>
  ), []);

  return (
    <div>
      <div className="bg-white text-black">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="What is Lorem Ipsum?" initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

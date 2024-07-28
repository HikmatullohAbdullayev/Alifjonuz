import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import faqData from '../../data/faq.json'

function Faq() {
  const [faqItems, setFaqItems] = useState(faqData)

  return (
    <section className="container max-h-full mb-[40px]">
      <h2 className="text-center my-[20px] py-[16px] text-[28px] font-semibold text-primary mobil670:text-[22px] ">
        Ko'p beriladigan savollar
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-[600px] mx-auto bg-white px-[14px] rounded-[12px]"
      >
        {faqItems.faqData.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="text-[22px] text-start mobil670:text-[18px]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] text-start mobil670:text-[16px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Faq

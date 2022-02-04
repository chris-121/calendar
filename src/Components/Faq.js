import React, { useState } from "react";
import Accordion from "./Accordion";

const Faq = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData1 = [
    {
      title: 'How Can I access Premium Content',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'How Can I access Premium Content',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'How Can I access Premium Content',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  const accordionData2 = [
    {
      title: 'How Can I access Premium Content',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'How Can I access Premium Content',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    }
  ];

 
  return (
    <div style={{backgroundColor: '#EEF3FC'}} className="px-32 py-20">
      <h1 className="text-4xl font-bold text-center mb-5">FAQ's</h1>
      <div className="grid grid-cols-2 gap-3">
      <div className="accordion bg-white">
        {accordionData1.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <div className="accordion bg-white">
        {accordionData2.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Faq;

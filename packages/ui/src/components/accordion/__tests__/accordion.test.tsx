import * as React from 'react';
import { render } from '@testing-library/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../index';

const data = [
  {
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
  },
  {
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },
  {
    title: 'Can other info be added to an invoice?',
    content:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
];

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Accordion type={'single'}>
        {data.map((x, i) => (
          <AccordionItem key={i} value={`${i}`}>
            <AccordionTrigger>{x.title}</AccordionTrigger>
            <AccordionContent>{x.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Accordion type={'single'} ref={ref}>
        {data.map((x, i) => (
          <AccordionItem key={i} value={`${i}`}>
            <AccordionTrigger>{x.title}</AccordionTrigger>
            <AccordionContent>{x.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should display the correct number of items', () => {
    const wrapper = render(
      <Accordion type={'single'}>
        {data.map((x, i) => (
          <AccordionItem key={i} value={`${i}`}>
            <AccordionTrigger>{x.title}</AccordionTrigger>
            <AccordionContent>{x.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );

    expect(wrapper.getAllByRole('button')).toHaveLength(data.length);
  });
});

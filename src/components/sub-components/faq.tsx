import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What is the best streaming equipment for beginners?',
      answer: 'Start with a Logitech C920 webcam, Blue Yeti mic, and OBS Studio. Add a ring light and you’re good to go.',
      schema: {
        '@type': 'Question',
        name: 'What is the best streaming equipment for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best beginner streaming setup includes a Logitech C920 webcam, Blue Yeti microphone, and OBS Studio. This combo delivers great video and audio without advanced setup.'
        }
      }
    },
    {
      question: 'What do I need to stream on Twitch or YouTube?',
      answer: 'You need a camera, mic, lighting, a stable PC, and streaming software like OBS or AVIE’s MultiStream plugin.',
      schema: {
        '@type': 'Question',
        name: 'What do I need to stream on Twitch or YouTube?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need a camera, mic, lighting, a stable PC, and streaming software like OBS or AVIE’s MultiStream plugin.'
        }
      }
    },
    {
      question: 'Is a capture card necessary for PC streaming?',
      answer: 'No, only if you are streaming console gameplay or using a DSLR as your webcam.',
      schema: {
        '@type': 'Question',
        name: 'Is a capture card necessary for PC streaming?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A capture card is only needed if you are streaming console gameplay or using a DSLR/mirrorless camera. For PC-only streaming, it’s not required.'
        }
      }
    },
    {
      question: 'Do I need a powerful PC to stream?',
      answer: 'Yes, for high-quality 1080p60 streaming, you’ll need a strong CPU and GPU. A dual-PC setup is ideal for advanced streamers.',
      schema: {
        '@type': 'Question',
        name: 'Do I need a powerful PC to stream?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for high-quality 1080p60 streaming, you’ll need a strong CPU and GPU. A dual-PC setup is ideal for advanced streamers.'
        }
      }
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions About Streaming Equipment (2025)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(faq => faq.schema)
        })}
      </script>
    </div>
  );
};

export default FAQ;
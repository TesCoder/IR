import { FAQSchema, SchemaScript } from './Schema';

export default function FAQ({ faqs, title = "Frequently Asked Questions" }) {
  if (!faqs || faqs.length === 0) return null;
  
  const schema = FAQSchema({ faqs });

  return (
    <>
      <SchemaScript schema={schema} />
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-semibold mb-2 text-ivy-blue">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


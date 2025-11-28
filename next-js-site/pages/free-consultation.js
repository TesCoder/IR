import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import { OrganizationSchema, SchemaScript } from '@/components/Schema';
import Section from '@/components/Section';

export default function FreeConsultation() {
  const orgSchema = OrganizationSchema();

  return (
    <>
      <SEOHead 
        title="Free College Admissions Consultation"
        description="Book your free 15-minute strategy call with a former admissions officer. Get personalized advice on your college application journey from Ivy Ready experts."
        url="/free-consultation"
        image="/images/logo-circle.png"
      />
      <SchemaScript schema={orgSchema} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4 text-ivy-blue">
          Get Your Free College Admissions Consultation
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Speak with a former admissions officer from a top university. 
          Get personalized guidance on your college application strategy in just 15 minutes.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-ivy-blue">What You'll Get:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span>Personalized assessment of your current profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span>Strategic recommendations for your college list</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span>Action plan for the next steps</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span>Answers to your specific questions</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-ivy-blue">Schedule Your Free Call</h2>
          <ContactForm type="CALL" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Or call us directly:</p>
          <a 
            href="tel:+16503830352" 
            className="text-2xl font-bold text-ivy-blue hover:underline"
          >
            (650) 383-0352
          </a>
        </div>
      </div>
    </>
  );
}


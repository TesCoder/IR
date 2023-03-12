import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className='font-medium md:font-light text-2xl md:text-4xl text-ivy-blue mb-3'>
        Have any Questions?
      </h1>
      <p className='text-lg my-3 text-gray-700'>Please complete the form below for a prompt reply.</p>
      <ContactForm type="FULL" />
    </>
  )
}
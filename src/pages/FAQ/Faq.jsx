import PageTitle from "../../components/PageTitle/PageTitle";

function Faq() {
  const faqData = [
    {
      question: "1. How do I make a reservation?",
      answer:
        "To make a reservation, simply go to our website, select your desired dates, choose the accommodation that suits your preferences, and follow the booking process. You can also call our customer support for assistance.",
    },
    {
      question: "2. What are the check-in and check-out times?",
      answer:
        "Check-in time is at 3:00 PM, and check-out time is at 11:00 AM. If you need early check-in or late check-out, please contact our front desk in advance for availability and fees.",
    },
    {
      question: "3. Can I cancel or modify my reservation?",
      answer:
        "Yes, you can cancel or modify your reservation, but it may be subject to our cancellation policy. Please refer to the reservation confirmation email or contact our customer support for details.",
    },
    {
      question: "4. Do you offer airport transportation?",
      answer:
        "Yes, we provide airport transportation services. Please let us know your flight details in advance, and we will make the necessary arrangements.",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <PageTitle title="FAQ" />
      <div className="mb-10">
        <img src="/faq.jpg" alt="faq" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6 border-b-2 border-gray-300">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

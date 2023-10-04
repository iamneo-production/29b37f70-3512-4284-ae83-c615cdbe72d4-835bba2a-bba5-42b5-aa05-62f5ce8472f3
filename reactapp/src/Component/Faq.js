import React from 'react';
import '../Asset/CSS/Faq.css';

const FaqPage = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-heading">FAQ - Custom Fragrance Creation Studio</h1>
      </div>
      <div className="faq-content-container">
        <div className="faq-content">
          <ul className="faq-list">
            <li className="faq-item">
              <h2 className="faq-question">How do I create a custom fragrance?</h2>
              <p className="faq-answer">
                To create a custom fragrance, follow these steps:
                <ol>
                  <li>Visit our Fragrance Creation Studio.</li>
                  <li>Choose from a variety of base scents and top notes.</li>
                  <li>Experiment with different combinations until you find your unique fragrance.</li>
                  <li>Customize the intensity and longevity of the scent.</li>
                  <li>Once satisfied, save your custom fragrance for future use.</li>
                </ol>
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">What is the price range for custom fragrances?</h2>
              <p className="faq-answer">
                Our custom fragrances range in price depending on the ingredients and customization options you choose. On average, prices start at $25.99 for a basic custom fragrance.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">Can I order custom fragrances in bulk?</h2>
              <p className="faq-answer">
                Yes, we offer bulk orders for custom fragrances. Please contact our customer support team for more information and pricing details.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">What is the return policy for custom fragrances?</h2>
              <p className="faq-answer">
                We have a 30-day return policy for custom fragrances. If you're not satisfied with your custom fragrance, you can return it within 30 days of purchase for a full refund.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">Are the ingredients in custom fragrances safe for sensitive skin?</h2>
              <p className="faq-answer">
                We prioritize using skin-friendly and hypoallergenic ingredients in our custom fragrances. However, if you have sensitive skin or known allergies, we recommend testing a small amount of the fragrance on your skin before regular use.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">Can I create a custom fragrance as a gift for someone?</h2>
              <p className="faq-answer">
                Absolutely! Creating a custom fragrance makes for a unique and thoughtful gift. You can even personalize the fragrance by choosing scents that you think the recipient will love.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">How long does it take to receive a custom fragrance order?</h2>
              <p className="faq-answer">
                The delivery time for custom fragrance orders may vary depending on your location and shipping preferences. On average, it takes 5-7 business days for standard shipping, but expedited shipping options are available.
              </p>
            </li>
            <li className="faq-item">
              <h2 className="faq-question">Is international shipping available?</h2>
              <p className="faq-answer">
                Yes, we offer international shipping for custom fragrances. Shipping fees and delivery times may vary depending on the destination. Please check our shipping information for more details.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="faq-footer">
        <p>Have more questions? Contact our support team for assistance.</p>
      </div>
    </div>
    
  );
};

export default FaqPage;

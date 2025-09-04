import React from 'react';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>Last updated: September 04, 2025</p>
              
              <p>
                Welcome to Do You See The Sparkle ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: name, email address, and contact data.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul>
                <li>To facilitate account creation and logon process.</li>
                <li>To post testimonials.</li>
                <li>Request feedback.</li>
                <li>To enable user-to-user communications.</li>
                <li>To manage user accounts.</li>
                <li>To send administrative information to you.</li>
              </ul>

              <h2>3. Will Your Information Be Shared With Anyone?</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>

              <h2>4. Do We Use Cookies and Other Tracking Technologies?</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
              </p>

              <h2>5. How Long Do We Keep Your Information?</h2>
              <p>
                We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
              </p>

              <h2>6. How Do We Keep Your Information Safe?</h2>
              <p>
                We aim to protect your personal information through a system of organizational and technical security measures.
              </p>

              <h2>7. What Are Your Privacy Rights?</h2>
              <p>
                In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
              </p>

              <h2>8. Controls for Do-Not-Track Features</h2>
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
              </p>

              <h2>9. Do We Make Updates to This Policy?</h2>
              <p>
                Yes, we will update this policy as necessary to stay compliant with relevant laws.
              </p>

              <h2>10. How Can You Contact Us About This Policy?</h2>
              <p>
                If you have questions or comments about this policy, you may email us at hello@doyouseethesparkle.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
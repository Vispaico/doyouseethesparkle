import React from 'react';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>Last updated: September 04, 2025</p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>

              <h2>3. User Representations</h2>
              <p>
                By using the website, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the website through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the website for any illegal or unauthorized purpose; and (5) your use of the website will not violate any applicable law or regulation.
              </p>

              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>

              <h2>5. Term and Termination</h2>
              <p>
                These Terms of Service shall remain in full force and effect while you use the website. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE WEBSITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
              </p>

              <h2>6. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the website without notice at any time.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms of Service and your use of the website are governed by and construed in accordance with the laws of the State of Oregon applicable to agreements made and to be entirely performed within the State of Oregon, without regard to its conflict of law principles.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at hello@doyouseethesparkle.com.
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

export default TermsOfService;
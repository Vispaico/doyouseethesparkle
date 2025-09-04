import React from 'react';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">Cookie Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>Last updated: September 04, 2025</p>

              <h2>1. What Are Cookies?</h2>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>

              <h2>3. Disabling Cookies</h2>
              <p>
                You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
              </p>

              <h2>4. The Cookies We Set</h2>
              <ul>
                <li>
                  <strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                </li>
                <li>
                  <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                </li>
                <li>
                  <strong>Email newsletters related cookies:</strong> This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                </li>
              </ul>

              <h2>5. Third Party Cookies</h2>
              <p>
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
              </p>

              <h2>6. More Information</h2>
              <p>
                Hopefully, that has clarified things for you. For more information, you can contact us at hello@doyouseethesparkle.com.
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

export default CookiePolicy;
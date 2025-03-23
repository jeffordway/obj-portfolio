import { PageLayout, Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export default function CookiePolicy() {
  return (
    <PageLayout 
      showHero={false}
    >
      <Section className="pt-20 md:pt-24 py-10 sm:py-12 md:py-16">
        <Container width="narrow">
          <Heading>Cookies Policy</Heading>
          <Text className="mt-6 mb-8">
            Last updated: March 23, 2025
          </Text>
          
          <div className="mb-8 p-4 bg-gray-100/50 border border-gray-200 rounded-md">
            <Text className="font-medium mb-2">Cookie Consent Notice</Text>
            <Text className="text-sm text-gray-700">This website uses cookies to enhance your browsing experience and analyze website traffic. By continuing to use this website, you consent to our use of cookies. You can manage your cookie preferences through your browser settings as described in this policy.</Text>
          </div>
          
          <div className="space-y-8">
            <div>
              <Text className="mb-4">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </Text>
              
              <Text className="mb-4">
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
              </Text>
              
              <Text className="mb-4">
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Interpretation and Definitions</Heading>
              
              <Heading as="h3" className="mb-3 mt-6">Interpretation</Heading>
              <Text className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </Text>
              
              <Heading as="h3" className="mb-3 mt-6">Definitions</Heading>
              <Text className="mb-4">For the purposes of this Cookies Policy:</Text>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <Text><span className="font-bold">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Neilson Ossowski Creative LLC, 1317 Edgewater Dr Suite 5758, Orlando FL 32804.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Cookies</span> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Website</span> refers to Jeff Ordway, accessible from <a href="https://jeffordway.com" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://jeffordway.com</a></Text>
                </li>
                <li>
                  <Text><span className="font-bold">You</span> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">The use of the Cookies</Heading>
              
              <Heading as="h3" className="mb-3 mt-6">Type of Cookies We Use</Heading>
              <Text className="mb-4">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
              </Text>
              
              <Text className="mb-4">
                We use both session and persistent Cookies for the purposes set out below:
              </Text>
              
              <ul className="list-none space-y-6 mb-6">
                <li>
                  <Text className="font-bold">Necessary / Essential Cookies</Text>
                  <Text className="mb-1">Type: Session Cookies</Text>
                  <Text className="mb-1">Administered by: Us</Text>
                  <Text>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</Text>
                </li>
                <li>
                  <Text className="font-bold">Functionality Cookies</Text>
                  <Text className="mb-1">Type: Persistent Cookies</Text>
                  <Text className="mb-1">Administered by: Us</Text>
                  <Text>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</Text>
                </li>
                <li>
                  <Text className="font-bold">Analytics Cookies</Text>
                  <Text className="mb-1">Type: Persistent Cookies</Text>
                  <Text className="mb-1">Administered by: Google</Text>
                  <Text>Purpose: These Cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. They help us improve our website and measure the effectiveness of our marketing campaigns.</Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Heading as="h3" className="mb-3 mt-6">Your Choices Regarding Cookies</Heading>
              <Text className="mb-4">
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
              </Text>
              
              <Text className="mb-4">
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
              </Text>
              
              <Text className="mb-4">
                If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
              </Text>
              
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  <Text>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://support.google.com/accounts/answer/32050</a></Text>
                </li>
                <li>
                  <Text>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">http://support.microsoft.com/kb/278835</a></Text>
                </li>
                <li>
                  <Text>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></Text>
                </li>
                <li>
                  <Text>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></Text>
                </li>
              </ul>
              
              <Text className="mb-4">
                For any other web browser, please visit your web browser's official web pages.
              </Text>
            </div>
            
            <div>
              <Heading as="h3" className="mb-3 mt-6">More Information about Cookies</Heading>
              <Text className="mb-4">
                You can learn more about cookies: what they are, how they work, and how to manage them.
              </Text>
            </div>
            
            <div>
              <Heading as="h3" className="mb-3 mt-6">Google Analytics</Heading>
              <Text className="mb-4">
                This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies to help the website analyze how users use the site. The information generated by the cookie about your use of the website will be transmitted to and stored by Google on servers in the United States.
              </Text>
              
              <Text className="mb-4">
                We have implemented the following measures to ensure compliance with privacy regulations:
              </Text>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><Text>IP anonymization (IP addresses are truncated within the EU before being stored)</Text></li>
                <li><Text>Data retention periods are set to the minimum necessary period</Text></li>
                <li><Text>Data sharing with Google is limited to the necessary minimum</Text></li>
                <li><Text>We have a Data Processing Agreement with Google</Text></li>
              </ul>
              
              <Text className="mb-4">
                You can opt-out of Google Analytics by installing the Google Analytics opt-out browser add-on available at: <a href="https://tools.google.com/dlpage/gaoptout" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://tools.google.com/dlpage/gaoptout</a>
              </Text>
            </div>
            
            <div>
              <Heading as="h3" className="mb-3 mt-6">Contact Us</Heading>
              <Text className="mb-4">If you have any questions about this Cookies Policy, You can contact us:</Text>
              
              <ul className="list-disc pl-6 mb-6">
                <li><Text>By visiting this page on our website: <a href="https://jeffordway.com/contact" className="text-primary hover:text-primary-light underline" rel="external nofollow noopener" target="_blank">https://jeffordway.com/contact</a></Text></li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}

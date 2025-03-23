import { PageLayout, Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export default function TermsAndConditions() {
  return (
    <PageLayout 
      showHero={false}
    >
      <Section className="pt-20 md:pt-24 py-10 sm:py-12 md:py-16">
        <Container width="narrow">
          <Heading>Terms and Conditions</Heading>
          <Text className="mt-6 mb-8">
            Last updated: March 23, 2025
          </Text>
          
          <div className="space-y-8">
            <div>
              <Text className="mb-4">
                Please read these terms and conditions carefully before using Our Service.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Interpretation and Definitions</Heading>
              
              <Heading as="h3" className="mb-3 mt-6">Interpretation</Heading>
              <Text className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </Text>
              
              <Heading as="h3" className="mb-3 mt-6">Definitions</Heading>
              <Text className="mb-4">For the purposes of these Terms and Conditions:</Text>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <Text><span className="font-bold">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Country</span> refers to: Florida, United States</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Neilson Ossowski Creative LLC, 1317 Edgewater Dr Suite 5758, Orlando FL 32804.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Service</span> refers to the Website.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Terms and Conditions</span> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Third-party Social Media Service</span> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Website</span> refers to Jeff Ordway, accessible from <a href="https://jeffordway.com" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://jeffordway.com</a></Text>
                </li>
                <li>
                  <Text><span className="font-bold">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Acknowledgment</Heading>
              <Text className="mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </Text>
              
              <Text className="mb-4">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </Text>
              
              <Text className="mb-4">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </Text>
              
              <Text className="mb-4">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </Text>
              
              <Text className="mb-4">
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Links to Other Websites</Heading>
              <Text className="mb-4">
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </Text>
              
              <Text className="mb-4">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </Text>
              
              <Text className="mb-4">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Termination</Heading>
              <Text className="mb-4">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </Text>
              
              <Text className="mb-4">
                Upon termination, Your right to use the Service will cease immediately.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Limitation of Liability</Heading>
              <Text className="mb-4">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
              </Text>
              
              <Text className="mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </Text>
              
              <Text className="mb-4">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</Heading>
              <Text className="mb-4">
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </Text>
              
              <Text className="mb-4">
                Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </Text>
              
              <Text className="mb-4">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Governing Law</Heading>
              <Text className="mb-4">
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Disputes Resolution</Heading>
              <Text className="mb-4">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">For European Union (EU) Users</Heading>
              <Text className="mb-4">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">United States Legal Compliance</Heading>
              <Text className="mb-4">
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Severability and Waiver</Heading>
              
              <Heading as="h3" className="mb-3 mt-6">Severability</Heading>
              <Text className="mb-4">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </Text>
              
              <Heading as="h3" className="mb-3 mt-6">Waiver</Heading>
              <Text className="mb-4">
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Translation Interpretation</Heading>
              <Text className="mb-4">
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Changes to These Terms and Conditions</Heading>
              <Text className="mb-4">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </Text>
              
              <Text className="mb-4">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Contact Us</Heading>
              <Text className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</Text>
              
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

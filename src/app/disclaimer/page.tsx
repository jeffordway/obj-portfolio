import { PageLayout, Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui/typography";

export default function Disclaimer() {
  return (
    <PageLayout 
      showHero={false}
    >
      <Section className="pt-20 md:pt-24 py-10 sm:py-12 md:py-16">
        <Container width="narrow">
          <Heading>Disclaimer</Heading>
          <Text className="mt-6 mb-8">
            Last updated: March 23, 2025
          </Text>
          
          <div className="space-y-8">
            <div>
              <Heading as="h2" className="mb-4">Interpretation and Definitions</Heading>
              
              <Heading as="h3" className="mb-3 mt-6">Interpretation</Heading>
              <Text className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </Text>
              
              <Heading as="h3" className="mb-3 mt-6">Definitions</Heading>
              <Text className="mb-4">For the purposes of this Disclaimer:</Text>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <Text><span className="font-bold">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Neilson Ossowski Creative LLC, 1317 Edgewater Dr Suite 5758, Orlando FL 32804.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Service</span> refers to the Website.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">You</span> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
                </li>
                <li>
                  <Text><span className="font-bold">Website</span> refers to Jeff Ordway, accessible from <a href="https://jeffordway.com" rel="external nofollow noopener" target="_blank" className="text-primary hover:text-primary-light underline">https://jeffordway.com</a></Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Disclaimer</Heading>
              <Text className="mb-4">
                The information contained on the Service is for general information purposes only.
              </Text>
              
              <Text className="mb-4">
                The Company assumes no responsibility for errors or omissions in the contents of the Service.
              </Text>
              
              <Text className="mb-4">
                In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
              </Text>
              
              <Text className="mb-4">
                The Company does not warrant that the Service is free of viruses or other harmful components.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">External Links Disclaimer</Heading>
              <Text className="mb-4">
                The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
              </Text>
              
              <Text className="mb-4">
                Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Errors and Omissions Disclaimer</Heading>
              <Text className="mb-4">
                The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
              </Text>
              
              <Text className="mb-4">
                The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Fair Use Disclaimer</Heading>
              <Text className="mb-4">
                The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
              </Text>
              
              <Text className="mb-4">
                The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
              </Text>
              
              <Text className="mb-4">
                If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Views Expressed Disclaimer</Heading>
              <Text className="mb-4">
                The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
              </Text>
              
              <Text className="mb-4">
                Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">No Responsibility Disclaimer</Heading>
              <Text className="mb-4">
                The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
              </Text>
              
              <Text className="mb-4">
                In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">"Use at Your Own Risk" Disclaimer</Heading>
              <Text className="mb-4">
                All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
              </Text>
              
              <Text className="mb-4">
                The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
              </Text>
            </div>
            
            <div>
              <Heading as="h2" className="mb-4">Contact Us</Heading>
              <Text className="mb-4">If you have any questions about this Disclaimer, You can contact us:</Text>
              
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

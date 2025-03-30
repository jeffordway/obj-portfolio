import { PageLayout } from '@/components/layout';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/typography';

/**
 * Test page to demonstrate the proper scrollable content behavior
 */
export default function TestScrollPage() {
  return (
    <PageLayout
      // Background media configuration
      showBackgroundMedia={true}
      mediaType={'image'}
      mediaSrc={'/images/background.jpg'}
      mediaOpacity={90}
      showColoredOverlay={true}
      overlayColor={'bg-background'}
      overlayOpacity={50}
      blurAmount={8}
      
      // Hero content
      title="Scroll Test Page"
      subtitle="This demonstrates the Spencer Peppiatt-style scrollable content effect"
    >
      {/* First section */}
      <section id="first-section">
        <Container width="container">
          <Heading as="h2" className="mb-8">First Section</Heading>
          
          <div className="space-y-6">
            <p className="text-lg">This is the first section of content that appears when scrolling.</p>
            <p>The scrollable content starts just below the viewport and slides into view as you start to scroll.</p>
            <p>This matches the behavior of Spencer Peppiatt's website, where content appears to be hiding just below the viewport initially.</p>
          </div>
        </Container>
      </section>

      {/* Second section with different background */}
      <section id="second-section" className="bg-muted/30 py-8">
        <Container width="container">
          <Heading as="h2" className="mb-8">Second Section</Heading>
          
          <div className="space-y-6">
            <p className="text-lg">As you continue scrolling, you'll notice the smooth transition.</p>
            <p>The key to this effect is using CSS transforms to position content and then transition based on scroll position.</p>
            <p>This section has a subtle background color change to demonstrate section separation.</p>
          </div>
        </Container>
      </section>

      {/* Repeat sections to ensure enough scrollable content */}
      {Array.from({ length: 3 }).map((_, i) => (
        <section key={i} id={`section-${i+3}`} className={i % 2 === 0 ? '' : 'bg-muted/30 py-8'}>
          <Container width="container">
            <Heading as="h2" className="mb-8">Section {i+3}</Heading>
            
            <div className="space-y-6">
              <p className="text-lg">Additional content section to ensure sufficient scroll height.</p>
              <p>Having enough content ensures we can properly test the scrolling behavior.</p>
              <p>Notice how the header becomes visible as soon as you start scrolling.</p>
            </div>
          </Container>
        </section>
      ))}
    </PageLayout>
  );
}

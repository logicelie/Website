import { Link } from '../components/Router';
import { ArrowLeft } from 'lucide-react';

// Simple Page Template
function SimplePage({ title, description, backLink = "/" }: { title: string; description: string; backLink?: string }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={backLink} className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{description}</p>
          <div className="mt-8">
            <button className="bg-[#007A55] text-white px-8 py-4 rounded hover:bg-[#006644] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-gray-600 text-lg">
              This page is part of the complete RentWorksPlus+ navigation structure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// SOLUTIONS PAGES
export function CarRentalAgenciesPage() {
  return <SimplePage title="Solutions for Car Rental Agencies" description="Complete solutions for daily rental operations, fleet management, and customer service excellence." backLink="/" />;
}

export function MultiLocationPage() {
  return <SimplePage title="Multi-Location & Franchise Operators" description="Scale across multiple locations with centralized control and local flexibility for franchise networks." backLink="/" />;
}

export function CorporateFleetsPage() {
  return <SimplePage title="Corporate & Long-Term Fleets" description="Enterprise solutions for managing corporate vehicle assignments, employee travel, and internal fleet operations." backLink="/" />;
}

export function EquipmentRentalPage() {
  return <SimplePage title="Equipment & Machinery Rental" description="Specialized tools for construction equipment, heavy machinery, and industrial tool rental operations." backLink="/" />;
}

export function DealershipPage() {
  return <SimplePage title="Dealership Loaner & Replacement Fleets" description="Streamlined loaner vehicle management for automotive dealerships and service centers." backLink="/" />;
}

export function OwnersPage() {
  return <SimplePage title="Solutions for Owners & General Managers" description="Strategic insights, business intelligence, and executive dashboards for rental business owners and general managers." backLink="/" />;
}

export function OperationsPage() {
  return <SimplePage title="Solutions for Operations & Fleet Managers" description="Day-to-day optimization tools, fleet management, and operational efficiency solutions." backLink="/" />;
}

export function FrontDeskPage() {
  return <SimplePage title="Solutions for Front Desk & Agents" description="Fast, intuitive tools for customer service, check-in/out, and reservation management." backLink="/" />;
}

export function FinancePage() {
  return <SimplePage title="Solutions for Finance & Accounting" description="Payment processing, financial reporting, and accounting integration tools." backLink="/" />;
}

export function ITPage() {
  return <SimplePage title="Solutions for IT & Digital Transformation" description="API access, integrations, and technical tools for digital transformation initiatives." backLink="/" />;
}

// RESOURCES PAGES
export function BlogPage() {
  return <SimplePage title="Blog & Insights" description="Industry insights, best practices, and expert advice for rental businesses." backLink="/" />;
}

export function GuidesPage() {
  return <SimplePage title="Guides & Playbooks" description="In-depth strategy guides, operational playbooks, and training materials." backLink="/" />;
}

export function TemplatesPage() {
  return <SimplePage title="Templates & Checklists" description="Downloadable tools, templates, and checklists for rental operations." backLink="/" />;
}

export function UpdatesPage() {
  return <SimplePage title="Product Updates & Release Notes" description="Latest platform features, improvements, and release notes." backLink="/" />;
}

export function WebinarsPage() {
  return <SimplePage title="Webinars & Events" description="Live and on-demand training sessions, webinars, and industry events." backLink="/" />;
}

// PRICING PAGE
export function PricingPage() {
  return <SimplePage title="Pricing" description="Simple, transparent pricing based on your fleet size and needs. No hidden fees." backLink="/" />;
}

// COMPANY PAGES
export function AboutPage() {
  return <SimplePage title="About RentWorksPlus+" description="Our vision, mission, values, and the team transforming the car rental industry." backLink="/" />;
}

export function PartnersPage() {
  return <SimplePage title="Partners & Integrations" description="Our ecosystem of technology partners and integrations." backLink="/" />;
}

export function CareersPage() {
  return <SimplePage title="Careers at RentWorksPlus+" description="Join our team and help shape the future of rental management technology." backLink="/" />;
}

export function PressPage() {
  return <SimplePage title="Press & Media" description="Press releases, media coverage, and brand assets for journalists and media." backLink="/" />;
}

// SUPPORT PAGES
export function HelpCenterPage() {
  return <SimplePage title="Help Center" description="Browse help articles, tutorials, and FAQs to find answers quickly." backLink="/" />;
}

export function DocumentationPage() {
  return <SimplePage title="Documentation" description="Complete technical documentation for administrators and power users." backLink="/" />;
}

export function APIDocsPage() {
  return <SimplePage title="API Documentation" description="Developer resources, API reference, and integration guides." backLink="/" />;
}

export function TrainingPage() {
  return <SimplePage title="Training & Onboarding" description="Comprehensive training programs and onboarding resources for new users." backLink="/" />;
}

export function ContactPage() {
  return <SimplePage title="Contact Support" description="Get help from our expert support team - available 24/7." backLink="/" />;
}

export function StatusPage() {
  return <SimplePage title="System Status" description="Current system status, uptime monitoring, and historical performance data." backLink="/" />;
}

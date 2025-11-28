import { Car, Calendar, Cloud, Smartphone, CreditCard, Settings } from 'lucide-react';
import { FeaturePageTemplate } from '../components/templates/FeaturePageTemplate';

// Auto Rental System Page
export function AutoRentalSystemPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Car className="w-10 h-10" />,
        title: "Auto Rental System",
        subtitle: "Complete end-to-end operational management for vehicle and equipment rental businesses with intelligent workflow automation."
      }}
      painPoints={[
        "Managing reservations across multiple spreadsheets and disconnected systems",
        "Time-consuming manual check-in/out processes with paper agreements",
        "No real-time visibility into fleet availability and utilization",
        "Difficulty tracking maintenance, damage claims, and vehicle history",
        "Limited reporting capabilities and business intelligence"
      ]}
      solutions={[
        "Centralized platform managing all aspects of your rental operations in one place",
        "Digital check-in/out with e-signatures, automated workflows, and photo documentation",
        "Real-time fleet dashboard with availability, status, and utilization metrics",
        "Integrated maintenance tracking, claims management, and complete vehicle lifecycle history",
        "Comprehensive reporting and analytics with customizable KPI dashboards"
      ]}
      howItWorks={[
        { step: 1, title: "Configure Your Fleet", description: "Add your vehicles, set pricing rules, define locations, and customize workflows to match your operations." },
        { step: 2, title: "Start Processing Rentals", description: "Create reservations, check-out vehicles, process payments, and manage the entire rental lifecycle digitally." },
        { step: 3, title: "Monitor & Optimize", description: "Track performance metrics, analyze utilization data, and receive AI-powered recommendations for improvement." }
      ]}
      benefits={[
        { metric: "50%", label: "Faster Check-in" },
        { metric: "90%", label: "Paperless Operations" },
        { metric: "Real-time", label: "Fleet Visibility" },
        { metric: "24/7", label: "Access Anywhere" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// Online Reservation Plugin Page
export function OnlineReservationPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Calendar className="w-10 h-10" />,
        title: "Online Reservation Plugin",
        subtitle: "Embed a branded, mobile-friendly booking widget directly into your website and start accepting online reservations instantly."
      }}
      painPoints={[
        "Losing bookings to competitors with better online presence",
        "High dependency on phone calls and manual booking processes",
        "No way for customers to check availability or book after hours",
        "Expensive third-party booking platforms taking high commissions",
        "Lack of brand control on booking experience"
      ]}
      solutions={[
        "Fully branded booking widget that matches your website design perfectly",
        "Real-time availability checking directly from your fleet inventory",
        "24/7 online booking capability capturing after-hours and international customers",
        "Zero commission fees - all bookings go directly to your system",
        "Complete control over pricing, terms, and customer experience"
      ]}
      howItWorks={[
        { step: 1, title: "Customize Widget", description: "Configure colors, branding, available vehicle categories, and booking rules to match your business." },
        { step: 2, title: "Embed on Website", description: "Add a simple code snippet to your website - works with any platform (WordPress, Wix, custom sites)." },
        { step: 3, title: "Start Taking Bookings", description: "Customers book online, reservations sync automatically, and you receive instant notifications." }
      ]}
      benefits={[
        { metric: "40%", label: "More Online Bookings" },
        { metric: "0%", label: "Commission Fees" },
        { metric: "24/7", label: "Booking Availability" },
        { metric: "<5min", label: "Setup Time" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// Rentall API Page
export function RentallAPIPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Cloud className="w-10 h-10" />,
        title: "Rentall API",
        subtitle: "Build your own mobile app or connect external systems with our developer-friendly REST APIs. Full documentation and sandbox environment included."
      }}
      painPoints={[
        "Vendor lock-in with no ability to customize or extend functionality",
        "Cannot integrate with existing business systems (CRM, accounting, telematics)",
        "No way to build custom mobile apps or unique customer experiences",
        "Limited by what the vendor provides - no flexibility for innovation",
        "Difficulty accessing your own data for analysis or reporting"
      ]}
      solutions={[
        "Complete API access to all platform features and data with RESTful architecture",
        "Pre-built integrations with popular tools (QuickBooks, Salesforce, Zapier)",
        "Build custom mobile apps, kiosks, or unique customer-facing experiences",
        "Webhook support for real-time event notifications and automated workflows",
        "Full ownership of your data with flexible export and analysis options"
      ]}
      howItWorks={[
        { step: 1, title: "Get API Credentials", description: "Generate your API keys from the dashboard and access comprehensive documentation with examples." },
        { step: 2, title: "Build & Test", description: "Use our sandbox environment to develop and test your integration without affecting live data." },
        { step: 3, title: "Deploy & Scale", description: "Move to production, monitor API usage, and scale your integration as your business grows." }
      ]}
      benefits={[
        { metric: "REST", label: "Modern API" },
        { metric: "100%", label: "Feature Coverage" },
        { metric: "99.9%", label: "Uptime SLA" },
        { metric: "24/7", label: "Developer Support" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// Mobile Application Page
export function MobileApplicationPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Smartphone className="w-10 h-10" />,
        title: "Mobile Application",
        subtitle: "Check-out & check-in made simple on any device. Give your team the power to manage rentals from anywhere with our mobile-optimized interface."
      }}
      painPoints={[
        "Staff tied to desktop computers limiting flexibility and service speed",
        "Cannot process rentals at customer locations, events, or remote sites",
        "Difficult to conduct vehicle inspections and upload photos on the go",
        "Poor user experience on mobile browsers with desktop-only software",
        "Lost productivity when team members are away from the office"
      ]}
      solutions={[
        "Fully responsive mobile interface optimized for smartphones and tablets",
        "Process complete rentals from anywhere - check-out, check-in, payments, contracts",
        "Built-in camera integration for instant damage documentation and photo uploads",
        "Offline capability for areas with poor connectivity - syncs when online",
        "Native mobile app experience through progressive web app technology"
      ]}
      howItWorks={[
        { step: 1, title: "Access from Any Device", description: "Simply open your browser on any smartphone or tablet - no app store downloads required." },
        { step: 2, title: "Mobile Check-Out/In", description: "Complete rental processes on-site with customers using touch-optimized interface and camera." },
        { step: 3, title: "Sync Automatically", description: "All actions sync instantly to your main system with offline support for spotty connections." }
      ]}
      benefits={[
        { metric: "70%", label: "Faster Field Service" },
        { metric: "100%", label: "Mobile Optimized" },
        { metric: "Offline", label: "Mode Supported" },
        { metric: "Any", label: "Device Compatible" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

// RENTALL Payments Page
export function PaymentsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <CreditCard className="w-10 h-10" />,
        title: "RENTALL Payments",
        subtitle: "Integrated payment processing with 5 methods: Cash, Card Present, Pay By Link, Direct Debit, Check. Accept payments seamlessly within your workflow."
      }}
      painPoints={[
        "Using separate payment terminals that don't integrate with rental software",
        "Manual reconciliation between payment systems and rental transactions",
        "Limited payment options frustrating customers who prefer specific methods",
        "High payment processing fees eating into margins",
        "Security concerns with handling card information manually"
      ]}
      solutions={[
        "Fully integrated payment processing built directly into your rental workflows",
        "Automatic reconciliation - payments matched to rentals instantly",
        "5 payment methods supporting every customer preference and use case",
        "Competitive processing rates with transparent pricing and no hidden fees",
        "PCI-compliant card handling with tokenization and fraud prevention tools"
      ]}
      howItWorks={[
        { step: 1, title: "Activate Payment Methods", description: "Choose which payment types to enable and connect your merchant account or use our integrated processor." },
        { step: 2, title: "Process Payments", description: "Accept payments during check-out, send payment links via email, or set up auto-billing for long-term rentals." },
        { step: 3, title: "Auto-Reconcile", description: "All transactions automatically match to rentals with detailed reports and accounting system exports." }
      ]}
      benefits={[
        { metric: "5", label: "Payment Methods" },
        { metric: "100%", label: "Auto-Reconciled" },
        { metric: "PCI", label: "Compliant" },
        { metric: "2.9%", label: "Processing Rate" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1703206814593-b54decff15cd?w=800"
    />
  );
}

// Add-on Modules Page
export function AddOnsPage() {
  return (
    <FeaturePageTemplate
      hero={{
        icon: <Settings className="w-10 h-10" />,
        title: "Add-on Modules",
        subtitle: "Extend your workflows with powerful rental add-ons: Corporate Management, Claims Processing, Advanced Reporting, and more specialized tools."
      }}
      painPoints={[
        "One-size-fits-all software that doesn't match your specific business needs",
        "Paying for features you don't use in bloated enterprise packages",
        "Cannot handle specialized workflows (corporate accounts, fleet-to-fleet, etc.)",
        "Missing industry-specific features forcing workarounds and manual processes",
        "Rigid systems that don't adapt to your unique operational requirements"
      ]}
      solutions={[
        "Modular architecture - add only the features you actually need",
        "Specialized modules for corporate management, claims, maintenance, and more",
        "Industry-specific tools for different rental verticals (equipment, fleet, etc.)",
        "Custom workflow builder for unique business processes and automation",
        "Pay only for what you use with flexible pricing per module"
      ]}
      howItWorks={[
        { step: 1, title: "Browse Module Library", description: "Review available add-on modules with detailed descriptions of features and use cases." },
        { step: 2, title: "Activate Modules", description: "Enable modules instantly from your dashboard - no complex installation or configuration required." },
        { step: 3, title: "Customize & Use", description: "Configure each module to your needs and integrate seamlessly with your existing workflows." }
      ]}
      benefits={[
        { metric: "15+", label: "Available Modules" },
        { metric: "Instant", label: "Activation" },
        { metric: "Pay-per-use", label: "Pricing Model" },
        { metric: "100%", label: "Integrated" }
      ]}
      mockupImage="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800"
    />
  );
}

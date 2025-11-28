import { Router, Route } from './components/Router';
import { NavigationWithRouting } from './components/NavigationWithRouting';
import { HomePage } from './pages/HomePage';
import * as Platform from './pages/AllPlatformPages';
import * as Other from './pages/AllOtherPages';
import { Footer } from './components/Footer';

export default function AppWithRouting() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NavigationWithRouting />
        
        {/* HOME */}
        <Route path="/">
          <HomePage />
        </Route>

        {/* PLATFORM PAGES */}
        <Route path="/platform/auto-rental-system">
          <Platform.AutoRentalSystemPage />
        </Route>
        <Route path="/platform/online-reservation">
          <Platform.OnlineReservationPage />
        </Route>
        <Route path="/platform/api">
          <Platform.RentallAPIPage />
        </Route>
        <Route path="/platform/mobile-app">
          <Platform.MobileApplicationPage />
        </Route>
        <Route path="/platform/payments">
          <Platform.PaymentsPage />
        </Route>
        <Route path="/platform/addons">
          <Platform.AddOnsPage />
        </Route>

        {/* SOLUTIONS PAGES - By Business Type */}
        <Route path="/solutions/car-rental-agencies">
          <Other.CarRentalAgenciesPage />
        </Route>
        <Route path="/solutions/multi-location">
          <Other.MultiLocationPage />
        </Route>
        <Route path="/solutions/corporate-fleets">
          <Other.CorporateFleetsPage />
        </Route>
        <Route path="/solutions/truck-commercial">
          <Other.TruckCommercialPage />
        </Route>
        <Route path="/solutions/ev-micromobility">
          <Other.EVMicroMobilityPage />
        </Route>
        <Route path="/solutions/equipment-rental">
          <Other.EquipmentRentalPage />
        </Route>
        <Route path="/solutions/dealership">
          <Other.DealershipPage />
        </Route>

        {/* SOLUTIONS PAGES - By Role */}
        <Route path="/solutions/owners">
          <Other.OwnersPage />
        </Route>
        <Route path="/solutions/operations">
          <Other.OperationsPage />
        </Route>
        <Route path="/solutions/front-desk">
          <Other.FrontDeskPage />
        </Route>
        <Route path="/solutions/finance">
          <Other.FinancePage />
        </Route>
        <Route path="/solutions/it">
          <Other.ITPage />
        </Route>

        {/* RESOURCES PAGES */}
        <Route path="/resources/blog">
          <Other.BlogPage />
        </Route>
        <Route path="/resources/guides">
          <Other.GuidesPage />
        </Route>
        <Route path="/resources/templates">
          <Other.TemplatesPage />
        </Route>
        <Route path="/resources/updates">
          <Other.UpdatesPage />
        </Route>
        <Route path="/resources/webinars">
          <Other.WebinarsPage />
        </Route>

        {/* PRICING */}
        <Route path="/pricing">
          <Other.PricingPage />
        </Route>

        {/* COMPANY PAGES */}
        <Route path="/company/about">
          <Other.AboutPage />
        </Route>
        <Route path="/company/partners">
          <Other.PartnersPage />
        </Route>
        <Route path="/company/careers">
          <Other.CareersPage />
        </Route>
        <Route path="/company/press">
          <Other.PressPage />
        </Route>

        {/* SUPPORT PAGES */}
        <Route path="/support/help-center">
          <Other.HelpCenterPage />
        </Route>
        <Route path="/support/documentation">
          <Other.DocumentationPage />
        </Route>
        <Route path="/support/api-docs">
          <Other.APIDocsPage />
        </Route>
        <Route path="/support/training">
          <Other.TrainingPage />
        </Route>
        <Route path="/support/contact">
          <Other.ContactPage />
        </Route>
        <Route path="/support/status">
          <Other.StatusPage />
        </Route>

        <Footer />
      </div>
    </Router>
  );
}

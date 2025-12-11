import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { WorkspaceSetup } from './pages/WorkspaceSetup'
import OnboardingLayout from './pages/onboarding/Layout'
import { BrandStep } from './pages/onboarding/BrandStep'
import { ToneStep } from './pages/onboarding/ToneStep'
import { GoalsStep } from './pages/onboarding/GoalsStep'
import { DnaStep } from './pages/onboarding/DnaStep'
import { ModernLanding } from './pages/ModernLanding'
import { AuthPage } from './pages/AuthPage'
import { Onboarding } from './pages/Onboarding'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

interface ErrorBoundaryProps { children: React.ReactNode }
interface ErrorBoundaryState { hasError: boolean; info?: string }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    this.setState({ info: String(error?.message || error) });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-6 text-center">
            <div className="text-xl font-display font-bold text-dark mb-2">Something went wrong</div>
            <div className="text-sm text-gray-500 mb-4">Try refreshing the page. If it persists, we'll load a safe fallback.</div>
            <button onClick={() => location.reload()} className="btn-gradient text-white px-4 py-2 rounded-lg font-bold">Refresh</button>
            {this.state.info && <div className="mt-3 text-xs text-gray-400">{this.state.info}</div>}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* Restored Landing Page */}
          <Route path="/" element={<App />} />

          {/* Other Routes */}
          <Route path="/modern-landing" element={<ModernLanding />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/workspace-setup" element={<WorkspaceSetup />} />
          <Route path="/onboarding" element={<OnboardingLayout />}>
            <Route path="brand" element={<BrandStep />} />
            <Route path="tone" element={<ToneStep />} />
            <Route path="goals" element={<GoalsStep />} />
            <Route path="dna" element={<DnaStep />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

document.getElementById('initial-loader')?.remove()

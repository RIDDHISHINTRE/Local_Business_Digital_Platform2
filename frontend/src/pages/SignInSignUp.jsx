import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignInSignUp() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/user-dashboard'); // standard redirect
  };
  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-x-hidden">
      {/* Screen Content */}
      
<main className="min-h-screen flex flex-col md:flex-row">
{/* Left Column: Editorial Content (The Guardian) */}
<section className="hidden md:flex md:w-5/12 lg:w-4/12 bg-primary relative flex-col justify-between p-12 overflow-hidden">
{/* Decorative Elements */}
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>
<div className="relative z-10">
<div className="mb-12">
<span className="text-secondary-fixed-dim font-label text-xs uppercase tracking-[0.2em] mb-4 block">The Digital Frontier</span>
<h1 className="font-headline text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Your complete digital platform.
                    </h1>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_12px_rgba(29,184,135,0.8)] flex-shrink-0"></div>
<div>
<h3 className="text-white font-medium text-lg leading-none mb-2">Omnichannel Management</h3>
<p className="text-on-primary-container text-sm leading-relaxed">Control every touchpoint of your customer journey from a single, high-stakes dashboard.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_12px_rgba(29,184,135,0.8)] flex-shrink-0"></div>
<div>
<h3 className="text-white font-medium text-lg leading-none mb-2">Automated Optimization</h3>
<p className="text-on-primary-container text-sm leading-relaxed">Let intelligent algorithms scale your local reach while you focus on the craft of your business.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_12px_rgba(29,184,135,0.8)] flex-shrink-0"></div>
<div>
<h3 className="text-white font-medium text-lg leading-none mb-2">Secure Institutional Growth</h3>
<p className="text-on-primary-container text-sm leading-relaxed">Enterprise-grade security protocols ensuring your data remains your most valuable asset.</p>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-12">
<div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
<p className="text-primary-fixed-dim italic text-sm mb-4">"LocalBoost has fundamentally shifted how we perceive our local market. It's not just a tool; it's our digital infrastructure."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-300">
<img alt="Testimonial User" className="w-full h-full object-cover" data-alt="portrait of a confident business professional man in his 40s looking at the camera against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh9OjphBS5nHQ9tiX_feqqCtfrtRAPpgZ2yby3CVDdH7CfV8pc_zGJTUVkCYntUxq5gYKUBew3u8G581xmnS73MCLAs6YZqDU9VC5ehKIXiRf_uPOCQJlptdmcbG8vUokvMoDcIasgS-jNRvRmzaoqjVLkJ65R0gUvHqqdPuygjBgPmPYmoTSELfXVouEMGybSDhPz2jFNvqwVQhFFjRtwkqrjy5xlSKAYiPcoZWp6dfBqKw7qmf7wJoSS89IMlmoFBFB2_MDHCKg"/>
</div>
<div>
<p className="text-white font-bold text-xs">Marcus Thorne</p>
<p className="text-on-primary-container text-[10px] uppercase tracking-wider">CEO, Metro Dynamics</p>
</div>
</div>
</div>
</div>
{/* Background subtle pattern */}
<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
</section>
{/* Right Column: Interactive Form (The Shell) */}
<section className="flex-1 bg-surface flex flex-col justify-center items-center px-6 py-12 md:p-12">
<div className="w-full max-w-md">
{/* Header / Logo Area */}
<div className="flex justify-between items-center mb-16">
<div className="font-headline text-2xl font-extrabold text-primary tracking-tighter">
                        LocalBoost
                    </div>
<a className="group flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="/">
<span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </a>
</div>
{/* Role Toggle (Tabs) */}
<div className="flex p-1 bg-surface-container-low rounded-xl mb-10">
<button className="flex-1 py-3 px-4 text-sm font-bold rounded-lg transition-all duration-200 bg-surface-container-lowest text-primary editorial-shadow">
                        Business Owner
                    </button>
<button className="flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 text-on-surface-variant hover:text-primary">
                        Admin
                    </button>
</div>
{/* Sign In Form Content */}
<div id="signin-section">
<div className="mb-8">
<h2 className="font-headline text-3xl font-bold text-primary mb-2">Welcome back</h2>
<p className="text-on-surface-variant">Enter your credentials to access your management suite.</p>
</div>
<form className="space-y-6" onSubmit={handleSignIn}>
<div className="space-y-1.5">
<label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary/40 text-on-surface text-sm transition-all shadow-sm" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-end">
<label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="password">Password</label>
<a className="text-[11px] font-bold text-secondary-fixed-variant hover:underline" href="#">Forgot password?</a>
</div>
<div className="relative">
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary/40 text-on-surface text-sm transition-all shadow-sm" id="password" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary" type="button">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</div>
</div>
<button className="w-full py-4 bg-secondary text-white font-bold rounded-xl shadow-[0_8px_24px_rgba(0,108,77,0.25)] hover:shadow-[0_12px_32px_rgba(0,108,77,0.35)] hover:-translate-y-0.5 transition-all active:scale-95" type="submit">
                            Sign In
                        </button>
</form>
{/* Social Provider */}
<div className="mt-8 flex items-center gap-4 text-outline-variant">
<div className="h-[1px] flex-1 bg-surface-container-high"></div>
<span className="text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">or continue with</span>
<div className="h-[1px] flex-1 bg-surface-container-high"></div>
</div>
<button className="mt-8 w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-sm font-bold hover:bg-surface-container-low transition-colors active:scale-98">
<svg className="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                        Google
                    </button>
{/* Footer toggle */}
<p className="mt-10 text-center text-sm text-on-surface-variant">
                        Don't have an account? 
                        <button className="text-primary font-bold hover:underline">Create your account</button>
</p>
</div>
{/* Admin Restricted Access Note (Conditional Appearance Style) */}
<div className="mt-12 p-5 rounded-xl border border-tertiary-fixed bg-tertiary-fixed/10 flex items-start gap-4">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant" data-weight="fill">shield</span>
<div className="space-y-1">
<p className="text-xs font-bold text-on-tertiary-fixed uppercase tracking-wider">Restricted Access</p>
<p className="text-[11px] leading-relaxed text-on-tertiary-fixed-variant">Administrative logins are audited and monitored. System oversight permissions required for portal entry.</p>
</div>
</div>
</div>
</section>
</main>
{/* Success Feedback / Ghost Layers (Optional Visual Polish) */}
<div className="fixed bottom-8 right-8 z-[100] pointer-events-none">
<div className="p-4 bg-primary text-white rounded-xl editorial-shadow flex items-center gap-3 opacity-0 translate-y-4">
<span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
<span className="text-xs font-bold uppercase tracking-widest">Login Successful</span>
</div>
</div>

    </div>
  );
}

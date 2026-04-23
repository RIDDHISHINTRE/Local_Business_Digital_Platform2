import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── Template Data ───────────────────────────────────────────────────────────

const TEMPLATES = [
  {
    id: 'tpl-001',
    icon: 'waving_hand',
    iconBg: 'bg-[#1DB887]/10 text-[#1DB887]',
    name: 'Welcome Email (New Signup)',
    status: 'Active',
    subject: 'Welcome to LocalBoost, {{name}}!',
    preview: 'We\'re thrilled to have you on board. Your journey to growing your local business starts now...',
    updated: 'Oct 24, 2023',
    body: '<p>Hi {{name}},</p><p>Welcome to LocalBoost! We\'re excited to help you grow your business.</p>',
  },
  {
    id: 'tpl-002',
    icon: 'schedule_send',
    iconBg: 'bg-amber-50 text-amber-600',
    name: 'Business Verification Reminder',
    status: 'Active',
    subject: 'Action Required: Verify {{business_name}}',
    preview: 'Your business verification is pending. Please complete the process to unlock all features...',
    updated: 'Oct 18, 2023',
    body: '<p>Hi {{name}},</p><p>We noticed that {{business_name}} hasn\'t been verified yet. Please complete the verification to unlock premium features.</p>',
  },
  {
    id: 'tpl-003',
    icon: 'verified',
    iconBg: 'bg-blue-50 text-blue-600',
    name: 'Approval Confirmation',
    status: 'Active',
    subject: 'Great news! {{business_name}} is now verified.',
    preview: 'Your business has been approved and is now live on the platform. Start managing your listing...',
    updated: 'Sep 12, 2023',
    body: '<p>Hi {{name}},</p><p>Congratulations! {{business_name}} has been successfully verified and is now live on LocalBoost.</p>',
  },
  {
    id: 'tpl-004',
    icon: 'cancel',
    iconBg: 'bg-red-50 text-red-500',
    name: 'Rejection Notification',
    status: 'Active',
    subject: 'Update regarding {{business_name}} application',
    preview: 'Unfortunately, your application did not meet our verification criteria at this time...',
    updated: 'Sep 05, 2023',
    body: '<p>Hi {{name}},</p><p>We regret to inform you that {{business_name}} did not pass verification. Please review the requirements and resubmit.</p>',
  },
  {
    id: 'tpl-005',
    icon: 'autorenew',
    iconBg: 'bg-purple-50 text-purple-600',
    name: 'Subscription Renewal Reminder',
    status: 'Draft',
    subject: 'Your {{plan}} plan expires soon',
    preview: 'Your current subscription is about to expire. Renew now to avoid any service interruption...',
    updated: 'Nov 01, 2023',
    body: '<p>Hi {{name}},</p><p>Your {{plan}} subscription for {{business_name}} will expire soon. Renew now to keep enjoying uninterrupted access.</p>',
  },
  {
    id: 'tpl-006',
    icon: 'local_offer',
    iconBg: 'bg-[#1DB887]/10 text-[#1DB887]',
    name: 'Promotional Offer / Discount',
    status: 'Draft',
    subject: 'Exclusive offer just for you, {{name}}!',
    preview: 'As a valued member, we\'re offering you an exclusive discount. Upgrade your plan today...',
    updated: 'Oct 30, 2023',
    body: '<p>Hi {{name}},</p><p>We have an exclusive offer just for you! Upgrade your {{plan}} plan today and get 20% off for the next 3 months.</p>',
  },
  {
    id: 'tpl-007',
    icon: 'person_off',
    iconBg: 'bg-orange-50 text-orange-500',
    name: 'Inactive User Re-engagement',
    status: 'Draft',
    subject: 'We miss you, {{name}}!',
    preview: 'It\'s been a while since you logged in. Come back and see what\'s new on your dashboard...',
    updated: 'Oct 28, 2023',
    body: '<p>Hi {{name}},</p><p>We haven\'t seen you in a while! Log back in to {{business_name}} and check out new features we\'ve added.</p>',
  },
];

const TEMPLATE_VARS = [
  { tag: '{{name}}', desc: "The user's full registered name." },
  { tag: '{{business_name}}', desc: 'The verified name of the associated business entity.' },
  { tag: '{{email}}', desc: "The recipient's primary email address." },
  { tag: '{{plan}}', desc: 'The user\'s current subscription plan name.' },
];

const LOGS = [
  { id: 1, subject: 'Welcome to Premium Service', campaign: 'Onboarding V2', recipient: 'sarah.jenkins@example.com', broadcast: false, status: 'Sent', date: 'Oct 24, 2023', time: '14:32:05 UTC' },
  { id: 2, subject: 'Monthly Performance Report - October', campaign: 'Template: Provider Monthly', recipient: null, broadcast: '1,402 users', status: 'Pending', date: 'Oct 24, 2023', time: '14:30:00 UTC' },
  { id: 3, subject: 'Password Reset Request', campaign: 'Transactional', recipient: 'unknown.user@baddomain.com', broadcast: false, status: 'Failed', date: 'Oct 24, 2023', time: '12:15:42 UTC' },
  { id: 4, subject: 'Your Invoice #INV-8492 is Ready', campaign: 'System Generated', recipient: 'billing@megacorp.com', broadcast: false, status: 'Sent', date: 'Oct 23, 2023', time: '09:00:11 UTC' },
  { id: 5, subject: 'Service Maintenance Alert', campaign: 'Campaign: Urgent Notification', recipient: null, broadcast: '8,941 users', status: 'Sent', date: 'Oct 22, 2023', time: '23:45:00 UTC' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const map = {
    Active: 'bg-[#1DB887]/10 text-[#1DB887] ring-[#1DB887]/20',
    Draft: 'bg-primary/5 text-primary/40 ring-primary/10',
    Sent: 'bg-[#1DB887]/10 text-[#1DB887] ring-[#1DB887]/20',
    Pending: 'bg-amber-100 text-amber-700 ring-amber-200',
    Failed: 'bg-red-100 text-red-600 ring-red-200',
  };
  const dot = { Sent: 'bg-[#1DB887]', Pending: 'bg-amber-500 animate-pulse', Failed: 'bg-red-500' };
  const isLog = ['Sent', 'Pending', 'Failed'].includes(status);
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${map[status]}`}>
      {isLog && <span className={`w-1.5 h-1.5 rounded-full ${dot[status]}`}></span>}
      {status}
    </span>
  );
}

// ─── Tab 1: Templates ─────────────────────────────────────────────────────────

function TemplatesTab() {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState(TEMPLATES);
  const [previewId, setPreviewId] = useState(null);

  const handleDelete = (id) => {
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  };

  const previewTemplate = templates.find((t) => t.id === previewId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Template Cards */}
      <div className="lg:col-span-2 space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          {[
            { label: 'Total Templates', value: templates.length, icon: 'article', color: 'text-blue-600 bg-blue-50' },
            { label: 'Active', value: templates.filter((t) => t.status === 'Active').length, icon: 'check_circle', color: 'text-[#1DB887] bg-[#1DB887]/10' },
            { label: 'Drafts', value: templates.filter((t) => t.status === 'Draft').length, icon: 'edit_note', color: 'text-orange-500 bg-orange-50' },
          ].map((s) => (
            <div key={s.label} className="bg-surface-container-lowest rounded-2xl p-4 border border-primary/5 shadow-[0_4px_20px_rgba(27,42,94,0.05)] flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${s.color}`}>
                <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-primary/40">{s.label}</p>
                <p className="font-mono text-xl font-black text-primary">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Template List */}
        {templates.map((t) => (
          <div
            key={t.id}
            className={`bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.07)] p-6 hover:shadow-[0_16px_40px_rgba(27,42,94,0.12)] transition-all group flex items-start gap-4 ${t.status === 'Draft' ? 'opacity-80' : ''}`}
          >
            <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${t.iconBg}`}>
              <span className="material-symbols-outlined text-[22px]">{t.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-['Bricolage_Grotesque'] text-sm font-bold text-primary truncate">{t.name}</h3>
                <StatusBadge status={t.status} />
              </div>
              <p className="text-xs text-primary/50 truncate mb-1">
                <span className="font-black text-[9px] uppercase tracking-widest text-primary/30 mr-2">Subject</span>
                {t.subject}
              </p>
              <p className="text-xs text-primary/30 truncate mb-3">{t.preview}</p>
              <div className="flex items-center justify-between pt-3 border-t border-primary/5">
                <div className="flex items-center gap-1.5 text-[11px] text-primary/30">
                  <span className="material-symbols-outlined text-[13px]">update</span>
                  Last updated: {t.updated}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => navigate(`/admin/commandcentre/emailing/create-template?edit=${t.id}`)}
                    className="flex items-center gap-1 text-[#1DB887] hover:text-[#18a67a] text-xs font-bold px-2 py-1 rounded-lg hover:bg-[#1DB887]/5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">edit</span>
                    Edit
                  </button>
                  <button
                    onClick={() => setPreviewId(t.id)}
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-xs font-bold px-2 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">visibility</span>
                    Preview
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="flex items-center gap-1 text-red-400 hover:text-red-600 text-xs font-bold px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">delete</span>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar — Variables or Preview */}
      <div className="lg:col-span-1">
        {previewId && previewTemplate ? (
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.07)] sticky top-24 overflow-hidden">
            <div className="bg-[#0F1A3D] px-7 py-5 flex items-center justify-between">
              <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1DB887]">visibility</span>
                Preview
              </h3>
              <button onClick={() => setPreviewId(null)} className="text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="p-7">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-1">Template</p>
              <p className="font-bold text-sm text-primary mb-4">{previewTemplate.name}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-1">Subject</p>
              <p className="text-sm text-primary/70 mb-4">{previewTemplate.subject}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">Body</p>
              <div className="bg-surface-container rounded-xl p-4 border border-primary/5 text-sm text-primary/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: previewTemplate.body }} />
              <div className="mt-5 pt-4 border-t border-primary/5">
                <StatusBadge status={previewTemplate.status} />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.07)] p-7 sticky top-24">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary/30">data_object</span>
              <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-primary">Template Variables</h3>
            </div>
            <p className="text-sm text-primary/50 mb-5 leading-relaxed">
              Use these dynamic tags in your subject lines or email bodies. They will be automatically replaced with user data upon sending.
            </p>
            <div className="space-y-3">
              {TEMPLATE_VARS.map((v) => (
                <div key={v.tag} className="bg-surface-container rounded-xl p-3 border border-primary/5 flex items-start gap-3">
                  <code className="text-xs font-mono bg-[#1DB887]/10 text-[#1DB887] px-2 py-1 rounded-lg border border-[#1DB887]/20 shrink-0 whitespace-nowrap">{v.tag}</code>
                  <p className="text-xs text-primary/50 mt-0.5">{v.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-primary/5">
              <button className="text-sm text-[#1DB887] hover:text-[#18a67a] font-bold flex items-center gap-1 transition-colors">
                View full variable documentation
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Tab 2: Send Email ────────────────────────────────────────────────────────

function SendEmailTab() {
  const [audience, setAudience] = useState('individual');
  const [delivery, setDelivery] = useState('now');
  const [filters, setFilters] = useState({ new: false, pending: true, approved: true, inactive: false });
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const audienceOptions = [
    { value: 'individual', label: 'Individual User', desc: 'Send to a specific account', icon: 'person' },
    { value: 'selected', label: 'Selected Users', desc: 'Pick multiple recipients', icon: 'group_add' },
    { value: 'broadcast', label: 'All Users', desc: 'Broadcast to everyone', icon: 'campaign' },
  ];

  const recipientCount = audience === 'broadcast' ? '1,402' : audience === 'selected' ? '—' : '1';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ── LEFT COLUMN: Audience + Compose (8 cols) ── */}
      <div className="lg:col-span-8 space-y-6">

        {/* 1. Target Audience */}
        <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
          <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#1DB887]">group</span>
            <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-primary">1. Target Audience</h3>
          </div>
          <div className="p-7 space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-3">Select Audience Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {audienceOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`relative flex cursor-pointer rounded-2xl border p-5 transition-all ${audience === opt.value ? 'border-[#1DB887] bg-[#1DB887]/5 ring-1 ring-[#1DB887]/30 shadow-md shadow-[#1DB887]/10' : 'border-primary/10 bg-surface-container/50 hover:border-[#1DB887]/30'}`}
                  >
                    <input className="sr-only" name="audience" type="radio" value={opt.value} checked={audience === opt.value} onChange={() => setAudience(opt.value)} />
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="text-sm font-bold text-primary">{opt.label}</span>
                      <span className="text-xs text-primary/40">{opt.desc}</span>
                    </span>
                    <span className={`material-symbols-outlined text-[22px] ${audience === opt.value ? 'text-[#1DB887]' : 'text-primary/20'}`}>{opt.icon}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Search Users</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/30 text-[18px]">search</span>
                <input className="block w-full rounded-xl border border-primary/10 bg-surface-container py-3 pl-10 pr-4 text-sm text-primary placeholder:text-primary/30 focus:ring-2 focus:ring-[#1DB887]/30 focus:border-[#1DB887] focus:outline-none transition-all" placeholder="Search by name, email, or ID..." type="text" />
              </div>
            </div>
            <div className="pt-5 border-t border-primary/5">
              <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-3">Filter Audience by Status</label>
              <div className="flex flex-wrap gap-4">
                {Object.entries(filters).map(([key, checked]) => (
                  <label key={key} className="inline-flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" checked={checked} className="rounded border-primary/20 text-[#1DB887] focus:ring-[#1DB887]/30" onChange={() => setFilters((f) => ({ ...f, [key]: !f[key] }))} />
                    <span className="text-sm font-medium text-primary/60 capitalize group-hover:text-primary transition-colors">{key}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Compose Message */}
        <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
          <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-blue-500">edit_note</span>
              <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-primary">2. Compose Message</h3>
            </div>
            <button className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1DB887] hover:text-[#18a67a] bg-[#1DB887]/10 hover:bg-[#1DB887]/20 px-3.5 py-1.5 rounded-xl transition-colors">
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              Preview
            </button>
          </div>
          <div className="p-7 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Load Template</label>
                <select className="block w-full rounded-xl border border-primary/10 bg-surface-container py-3 px-3 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none">
                  <option value="">Select a template...</option>
                  <option>Welcome Email (New Signup)</option>
                  <option>Business Verification Reminder</option>
                  <option>Approval Confirmation</option>
                  <option>Rejection Notification</option>
                  <option>Subscription Renewal Reminder</option>
                  <option>Promotional Offer / Discount</option>
                  <option>Inactive User Re-engagement</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Subject Line</label>
                <input
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="block w-full rounded-xl border border-primary/10 bg-surface-container py-3 px-4 text-sm text-primary placeholder:text-primary/30 focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none"
                  placeholder="Enter email subject"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary/40">Message Body</label>
                <span className="text-[11px] text-primary/30">Supports HTML</span>
              </div>
              <div className="border border-primary/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#1DB887]/30 focus-within:border-[#1DB887] transition-all">
                <div className="bg-surface-container border-b border-primary/5 px-4 py-2.5 flex items-center gap-1.5">
                  {['format_bold', 'format_italic', 'format_underlined', 'link', 'format_list_bulleted', 'format_list_numbered', 'code'].map((icon, i) => (
                    <React.Fragment key={icon}>
                      {(i === 3 || i === 5) && <div className="w-px h-4 bg-primary/10 mx-1"></div>}
                      <button type="button" className="p-1.5 text-primary/30 hover:text-primary hover:bg-surface-container-high rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[16px]">{icon}</span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="block w-full border-0 py-4 px-4 text-sm text-primary bg-surface-container-lowest placeholder:text-primary/30 focus:ring-0 resize-y leading-relaxed"
                  placeholder="Type your message here. Use {{name}}, {{business_name}} for personalization..."
                  rows="12"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Delivery + Variables + Actions (4 cols) ── */}
      <div className="lg:col-span-4 space-y-6">

        {/* Delivery Options */}
        <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
          <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-purple-500">schedule_send</span>
            <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-primary">Delivery Options</h3>
          </div>
          <div className="p-7 space-y-4">
            {[
              { value: 'now', label: 'Send Now', desc: 'Dispatch immediately', icon: 'send' },
              { value: 'schedule', label: 'Schedule Later', desc: 'Pick date and time', icon: 'schedule' },
            ].map((opt) => (
              <label key={opt.value} className={`relative flex cursor-pointer rounded-2xl border p-4 transition-all ${delivery === opt.value ? 'border-[#1DB887] ring-1 ring-[#1DB887]/30 bg-[#1DB887]/5' : 'border-primary/10 hover:border-primary/20'}`}>
                <input className="sr-only" name="delivery" type="radio" value={opt.value} checked={delivery === opt.value} onChange={() => setDelivery(opt.value)} />
                <span className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-bold text-primary">{opt.label}</span>
                  <span className="text-xs text-primary/40">{opt.desc}</span>
                </span>
                <span className={`material-symbols-outlined text-[20px] ${delivery === opt.value ? 'text-[#1DB887]' : 'text-primary/20'}`}>{opt.icon}</span>
              </label>
            ))}
            <div className={`space-y-3 pt-3 transition-all ${delivery === 'schedule' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1.5">Date</label>
                <input type="date" className="block w-full rounded-xl border border-primary/10 bg-surface-container py-2.5 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" disabled={delivery !== 'schedule'} />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1.5">Time</label>
                <input type="time" className="block w-full rounded-xl border border-primary/10 bg-surface-container py-2.5 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" disabled={delivery !== 'schedule'} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Variables */}
        <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
          <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary/30">data_object</span>
            <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-primary">Quick Variables</h3>
          </div>
          <div className="p-7">
            <p className="text-xs text-primary/40 mb-4">Click to insert into message body.</p>
            <div className="grid grid-cols-2 gap-2">
              {TEMPLATE_VARS.map((v) => (
                <button
                  key={v.tag}
                  type="button"
                  onClick={() => setEmailBody((prev) => prev + v.tag)}
                  className="bg-surface-container rounded-xl p-2.5 border border-primary/5 text-left hover:border-[#1DB887]/30 hover:bg-[#1DB887]/5 transition-all group cursor-pointer"
                >
                  <code className="text-[11px] font-mono text-[#1DB887] font-bold block">{v.tag}</code>
                  <p className="text-[10px] text-primary/30 group-hover:text-primary/50 mt-0.5 truncate">{v.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary & Actions */}
        <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden sticky top-24">
          <div className="bg-[#0F1A3D] px-7 py-5">
            <h3 className="font-['Bricolage_Grotesque'] text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#1DB887]">summarize</span>
              Campaign Summary
            </h3>
          </div>
          <div className="p-7">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="text-xs font-bold text-primary/40">Audience</span>
                <span className="text-sm font-bold text-primary capitalize">{audience}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="text-xs font-bold text-primary/40">Recipients</span>
                <span className="text-sm font-bold text-[#1DB887]">{recipientCount}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="text-xs font-bold text-primary/40">Delivery</span>
                <span className="text-sm font-bold text-primary capitalize">{delivery === 'now' ? 'Immediate' : 'Scheduled'}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="text-xs font-bold text-primary/40">Subject</span>
                <span className="text-sm font-bold text-primary truncate max-w-[140px]">{emailSubject || '—'}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button type="button" className="w-full px-5 py-3 text-sm font-bold bg-surface-container border border-primary/10 text-primary rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">save</span>
                Save Draft
              </button>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold bg-[#1DB887] hover:bg-[#18a67a] text-white rounded-xl shadow-lg shadow-[#1DB887]/20 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined text-[18px]">send</span>
                Send Email
              </button>
            </div>
            <p className="text-[11px] text-primary/30 mt-4 text-center italic">This action cannot be undone once sent.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Tab 3: Email Logs ────────────────────────────────────────────────────────

function EmailLogsTab() {
  return (
    <div>
      <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.07)] p-5 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/30 text-[18px]">search</span>
          <input className="w-full pl-10 pr-4 py-2.5 border border-primary/10 bg-surface-container rounded-xl text-sm text-primary placeholder:text-primary/30 focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="Search subject or recipient..." type="text" />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/30 text-[16px]">calendar_today</span>
            <select className="pl-9 pr-8 py-2.5 border border-primary/10 bg-surface-container rounded-xl text-sm text-primary/60 focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none appearance-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
            </select>
          </div>
          <select className="px-4 py-2.5 border border-primary/10 bg-surface-container rounded-xl text-sm text-primary/60 focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none appearance-none">
            <option>All Statuses</option>
            <option>Sent</option>
            <option>Failed</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.07)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-primary/5">
                <th className="px-8 py-5 text-[11px] font-black text-primary/40 uppercase tracking-widest">Subject</th>
                <th className="px-6 py-5 text-[11px] font-black text-primary/40 uppercase tracking-widest">Recipient(s)</th>
                <th className="px-6 py-5 text-[11px] font-black text-primary/40 uppercase tracking-widest">Status</th>
                <th className="px-6 py-5 text-[11px] font-black text-primary/40 uppercase tracking-widest">Sent Date</th>
                <th className="px-6 py-5 text-right text-[11px] font-black text-primary/40 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 text-sm">
              {LOGS.map((log) => (
                <tr key={log.id} className="hover:bg-surface-container/40 transition-colors">
                  <td className="px-8 py-4">
                    <p className="font-bold text-primary">{log.subject}</p>
                    <p className="text-xs text-primary/30 mt-0.5">{log.campaign}</p>
                  </td>
                  <td className="px-6 py-4 text-primary/60">
                    {log.broadcast ? (
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary/30 text-[16px]">groups</span>
                        Broadcast ({log.broadcast})
                      </span>
                    ) : log.recipient}
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={log.status} /></td>
                  <td className="px-6 py-4 text-primary/50">{log.date}<br /><span className="text-xs text-primary/30">{log.time}</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#1DB887] hover:text-[#18a67a] font-bold text-sm flex items-center justify-end gap-0.5 ml-auto transition-colors">
                      View Details
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-primary/5 px-8 py-4 flex items-center justify-between bg-surface-container/30">
          <span className="text-sm text-primary/40">Showing 1 to 5 of 1,248 entries</span>
          <div className="flex gap-2">
            <button disabled className="px-4 py-1.5 border border-primary/10 rounded-xl text-sm font-medium text-primary/30 bg-surface-container disabled:opacity-40">Previous</button>
            <button className="px-4 py-1.5 border border-primary/10 rounded-xl text-sm font-medium text-primary/60 bg-surface-container hover:bg-surface-container-high transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'templates', label: 'Templates', icon: 'article' },
  { id: 'send', label: 'Send Email', icon: 'send' },
  { id: 'logs', label: 'Email Logs', icon: 'history' },
];

export default function Emailing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('templates');

  return (
    <div className="p-8 min-h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-['Bricolage_Grotesque'] text-2xl font-black text-primary tracking-tight">Emailing &amp; Notifications</h2>
          <p className="text-sm text-primary/40 mt-1">Manage communication templates and delivery history.</p>
        </div>
        <button
          onClick={() => navigate('/admin/commandcentre/emailing/create-template')}
          className="flex items-center gap-2 bg-[#1DB887] hover:bg-[#18a67a] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-[#1DB887]/20"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create New Template
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-primary/10 mb-8">
        <nav className="-mb-px flex space-x-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 px-5 border-b-2 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#1DB887] text-[#1DB887]'
                  : 'border-transparent text-primary/40 hover:text-primary/60 hover:border-primary/20'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'templates' && <TemplatesTab />}
      {activeTab === 'send' && <SendEmailTab />}
      {activeTab === 'logs' && <EmailLogsTab />}
    </div>
  );
}

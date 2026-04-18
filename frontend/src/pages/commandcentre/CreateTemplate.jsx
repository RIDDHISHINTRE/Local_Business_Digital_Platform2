import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// ─── Dummy template store (mirrors Emailing.jsx) ─────────────────────────────

const TEMPLATE_STORE = {
  'tpl-001': {
    name: 'Welcome Email (New Signup)',
    subject: 'Welcome to LocalBoost, {{name}}!',
    body: 'Hi {{name}},\n\nWelcome to LocalBoost! We\'re excited to help you grow your business.\n\nYour journey to reaching more local customers starts now. Here\'s what you can do next:\n\n• Complete your business profile\n• Add your first service listing\n• Invite your team members\n\nIf you have any questions, our support team is always here to help.\n\nCheers,\nThe LocalBoost Team',
    status: 'active',
  },
  'tpl-002': {
    name: 'Business Verification Reminder',
    subject: 'Action Required: Verify {{business_name}}',
    body: 'Hi {{name}},\n\nWe noticed that {{business_name}} hasn\'t been verified yet.\n\nPlease complete the verification process to unlock all premium features including:\n\n• Advanced analytics dashboard\n• Priority customer support\n• Featured listing placement\n\nVerify now to get the most out of your LocalBoost experience.\n\nBest regards,\nLocalBoost Verification Team',
    status: 'active',
  },
  'tpl-003': {
    name: 'Approval Confirmation',
    subject: 'Great news! {{business_name}} is now verified.',
    body: 'Hi {{name}},\n\nCongratulations! {{business_name}} has been successfully verified and is now live on LocalBoost.\n\nYou now have access to:\n\n• Full analytics suite\n• Customer engagement tools\n• Promotional campaigns\n• Priority search ranking\n\nStart managing your listing today!\n\nWelcome aboard,\nThe LocalBoost Team',
    status: 'active',
  },
  'tpl-004': {
    name: 'Rejection Notification',
    subject: 'Update regarding {{business_name}} application',
    body: 'Hi {{name}},\n\nWe regret to inform you that {{business_name}} did not pass our verification criteria at this time.\n\nCommon reasons include:\n\n• Incomplete business documentation\n• Unverifiable address or contact info\n• Duplicate listing detected\n\nPlease review the requirements and resubmit your application. Our team is happy to help you resolve any issues.\n\nBest regards,\nLocalBoost Verification Team',
    status: 'active',
  },
  'tpl-005': {
    name: 'Subscription Renewal Reminder',
    subject: 'Your {{plan}} plan expires soon',
    body: 'Hi {{name}},\n\nYour {{plan}} subscription for {{business_name}} will expire in 7 days.\n\nRenew now to keep enjoying:\n\n• Uninterrupted service access\n• All premium features\n• Priority support\n\nDon\'t let your listing go offline — renew today!\n\nBest,\nLocalBoost Billing',
    status: 'draft',
  },
  'tpl-006': {
    name: 'Promotional Offer / Discount',
    subject: 'Exclusive offer just for you, {{name}}!',
    body: 'Hi {{name}},\n\nAs a valued LocalBoost member, we have an exclusive offer just for you!\n\nUpgrade your {{plan}} plan today and get 20% off for the next 3 months.\n\nThis limited-time offer includes:\n\n• All premium features unlocked\n• Priority customer support\n• Advanced analytics and reporting\n\nUse code BOOST20 at checkout.\n\nHurry — offer expires in 48 hours!\n\nCheers,\nLocalBoost Promotions',
    status: 'draft',
  },
  'tpl-007': {
    name: 'Inactive User Re-engagement',
    subject: 'We miss you, {{name}}!',
    body: 'Hi {{name}},\n\nIt\'s been a while since you logged into {{business_name}} on LocalBoost.\n\nHere\'s what you\'ve missed:\n\n• New customer inquiries waiting for you\n• Updated analytics dashboard\n• New promotional tools\n\nLog back in today and see what\'s new!\n\nWe\'d love to have you back,\nThe LocalBoost Team',
    status: 'draft',
  },
};

const AVAILABLE_VARIABLES = [
  { tag: '{{name}}', desc: "User's full name" },
  { tag: '{{business_name}}', desc: 'Business entity name' },
  { tag: '{{email}}', desc: 'Recipient email' },
  { tag: '{{plan}}', desc: 'Subscription plan' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreateTemplate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('edit');

  const prefill = editId && TEMPLATE_STORE[editId] ? TEMPLATE_STORE[editId] : null;

  const [name, setName] = useState(prefill?.name || '');
  const [subject, setSubject] = useState(prefill?.subject || '');
  const [body, setBody] = useState(prefill?.body || '');
  const [status, setStatus] = useState(prefill?.status || 'draft');

  // Live preview with variables replaced by example values
  const previewBody = useMemo(() => {
    return body
      .replace(/\{\{name\}\}/g, 'John Doe')
      .replace(/\{\{business_name\}\}/g, 'Sharma Chai Stall')
      .replace(/\{\{email\}\}/g, 'john@example.com')
      .replace(/\{\{plan\}\}/g, 'Premium');
  }, [body]);

  const previewSubject = useMemo(() => {
    return subject
      .replace(/\{\{name\}\}/g, 'John Doe')
      .replace(/\{\{business_name\}\}/g, 'Sharma Chai Stall')
      .replace(/\{\{email\}\}/g, 'john@example.com')
      .replace(/\{\{plan\}\}/g, 'Premium');
  }, [subject]);

  const handleSaveDraft = () => {
    setStatus('draft');
    navigate('/admin/commandcentre/emailing');
  };

  const handlePublish = () => {
    setStatus('active');
    navigate('/admin/commandcentre/emailing');
  };

  return (
    <div className="p-8 min-h-full">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate('/admin/commandcentre/emailing')}
          className="p-2 rounded-xl hover:bg-surface-container text-primary/40 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_back</span>
        </button>
        <div>
          <h2 className="font-['Syne'] text-2xl font-black text-primary tracking-tight">
            {editId ? 'Edit Template' : 'Create New Template'}
          </h2>
          <p className="text-sm text-primary/40 mt-0.5">
            {editId ? 'Modify your email template and republish.' : 'Design a new email template for your campaigns.'}
          </p>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ── LEFT: Main Editor (8 cols) ── */}
        <div className="lg:col-span-8 space-y-6">

          {/* Template Details Card */}
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
            <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5">
              <h3 className="font-['Syne'] text-base font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1DB887]">edit_note</span>
                Template Details
              </h3>
            </div>
            <div className="p-7 space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Template Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-xl border border-primary/10 bg-surface-container py-3 px-4 text-sm text-primary placeholder:text-primary/30 focus:ring-2 focus:ring-[#1DB887]/30 focus:border-[#1DB887] focus:outline-none transition-all"
                  placeholder="e.g. Welcome Email"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Email Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="block w-full rounded-xl border border-primary/10 bg-surface-container py-3 px-4 text-sm text-primary placeholder:text-primary/30 focus:ring-2 focus:ring-[#1DB887]/30 focus:border-[#1DB887] focus:outline-none transition-all"
                  placeholder="e.g. Welcome to LocalBoost, {{name}}!"
                  type="text"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary/40">Email Body</label>
                  <span className="text-[11px] text-primary/30">Supports rich text &amp; HTML</span>
                </div>
                <div className="border border-primary/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#1DB887]/30 focus-within:border-[#1DB887] transition-all">
                  {/* Toolbar */}
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
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="block w-full border-0 py-4 px-4 text-sm text-primary bg-surface-container-lowest placeholder:text-primary/30 focus:ring-0 resize-y font-mono leading-relaxed"
                    placeholder="Type your email content here. Use variables like {{name}} to personalize..."
                    rows="14"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Available Variables */}
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
            <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5">
              <h3 className="font-['Syne'] text-base font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary/30">data_object</span>
                Available Variables
              </h3>
            </div>
            <div className="p-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {AVAILABLE_VARIABLES.map((v) => (
                  <button
                    key={v.tag}
                    type="button"
                    onClick={() => setBody((prev) => prev + v.tag)}
                    className="bg-surface-container rounded-xl p-3 border border-primary/5 text-left hover:border-[#1DB887]/30 hover:bg-[#1DB887]/5 transition-all group cursor-pointer"
                  >
                    <code className="text-xs font-mono text-[#1DB887] font-bold block mb-1">{v.tag}</code>
                    <p className="text-[11px] text-primary/40 group-hover:text-primary/60 transition-colors">{v.desc}</p>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-primary/30 mt-3 italic">Click any variable to insert it at the end of the body.</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Controls Panel (4 cols) ── */}
        <div className="lg:col-span-4 space-y-6">

          {/* Template Settings */}
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden">
            <div className="border-b border-primary/5 bg-surface-container/50 px-7 py-5">
              <h3 className="font-['Syne'] text-base font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary/30">tune</span>
                Template Settings
              </h3>
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-2xl border border-primary/5">
                <div>
                  <p className="text-sm font-bold text-primary">Status</p>
                  <p className="text-[11px] text-primary/40 mt-0.5">{status === 'active' ? 'Live and available for use' : 'Saved but not yet published'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus((s) => (s === 'active' ? 'draft' : 'active'))}
                  className={`relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 ${status === 'active' ? 'bg-[#1DB887]' : 'bg-primary/15'}`}
                >
                  <span className={`inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${status === 'active' ? 'translate-x-5' : 'translate-x-0'}`}></span>
                </button>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${status === 'active' ? 'bg-[#1DB887]/10 text-[#1DB887] ring-[#1DB887]/20' : 'bg-primary/5 text-primary/40 ring-primary/10'}`}>
                  {status === 'active' ? '● Active' : '○ Draft'}
                </span>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] overflow-hidden sticky top-24">
            <div className="bg-[#0F1A3D] px-7 py-5">
              <h3 className="font-['Syne'] text-base font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1DB887]">visibility</span>
                Live Preview
              </h3>
              <p className="text-xs text-white/40 mt-0.5">Variables are replaced with sample data.</p>
            </div>
            <div className="p-7">
              {subject ? (
                <>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-1">Subject</p>
                  <p className="text-sm font-bold text-primary mb-4 pb-4 border-b border-primary/5">{previewSubject}</p>
                </>
              ) : null}

              {body ? (
                <>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">Body</p>
                  <div className="bg-surface-container rounded-xl p-4 border border-primary/5 text-sm text-primary/60 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                    {previewBody}
                  </div>
                </>
              ) : (
                <div className="text-center py-10 text-primary/20">
                  <span className="material-symbols-outlined text-4xl mb-2">mail</span>
                  <p className="text-sm">Start typing to see a preview</p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-surface-container-lowest rounded-[20px] border border-primary/5 shadow-[0_12px_40px_rgba(27,42,94,0.08)] p-7">
            <h3 className="font-['Syne'] text-base font-bold text-primary mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary/30">rocket_launch</span>
              Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={handleSaveDraft}
                className="w-full px-5 py-3 text-sm font-bold bg-surface-container border border-primary/10 text-primary rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                Save as Draft
              </button>
              <button
                onClick={handlePublish}
                className="w-full px-5 py-3 text-sm font-bold bg-[#1DB887] hover:bg-[#18a67a] text-white rounded-xl shadow-lg shadow-[#1DB887]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">publish</span>
                Publish Template
              </button>
            </div>
            <p className="text-[11px] text-primary/30 mt-4 text-center italic">Publishing makes this template available for all campaigns.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

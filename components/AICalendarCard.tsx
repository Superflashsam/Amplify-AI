import React from 'react'

type Props = {
  status?: string
  avatarSrc?: string
  name?: string
  role?: string
  ownerAvatarSrc?: string
  companySize?: string
  lifeCycleStage?: string
  accountOwner?: string
  fitGrade?: string
}

export const AICalendarCard: React.FC<Props> = ({
  status = 'Online',
  avatarSrc = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&fit=crop',
  name = 'Jane Cooper',
  role = 'Head of Marketing @Dropbox',
  ownerAvatarSrc = 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop',
  companySize = '1000+',
  lifeCycleStage = 'Opportunity',
  accountOwner = 'Ronald Richards',
  fitGrade = 'A'
}) => {
  return (
    <div className="ai-calendar-card">
      <div className="card-header">
        <span className="status-badge"><span className="dot" /> {status}</span>
        <div className="user">
          <img className="avatar" src={avatarSrc} alt="" />
          <div className="meta">
            <div className="name">{name}</div>
            <div className="role">{role}</div>
            <div className="socials">
              <button className="social icon-ln" aria-label="LinkedIn" />
              <button className="social icon-x" aria-label="X/Twitter" />
              <button className="social icon-mail" aria-label="Email" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="source-chips">
          <button className="chip chip-source"><span className="chip-icon" /> HubSpot Data</button>
          <button className="chip chip-source"><span className="chip-icon" /> Salesforce Data</button>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <div className="label">Company size</div>
            <div className="value">{companySize}</div>
          </div>
          <div className="info-card">
            <div className="label">Life cycle stage</div>
            <div className="value">{lifeCycleStage}</div>
          </div>
          <div className="info-card">
            <div className="label">Account owner</div>
            <div className="value"><img className="mini-avatar" src={ownerAvatarSrc} alt="" /> {accountOwner}</div>
          </div>
          <div className="info-card">
            <div className="label">Fit grade</div>
            <div className="value grade">{fitGrade}</div>
          </div>
        </div>
        <div className="status-row">
          <span className="status-live">Visitor is active now</span>
          <span className="subtle">Pricing page</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn primary">Schedule</button>
        <button className="btn">Details</button>
      </div>
    </div>
  )
}

export default AICalendarCard


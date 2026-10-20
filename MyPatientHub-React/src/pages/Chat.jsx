import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PatientPageHeader from "../components/PatientPageHeader";
import "./Chat.css";

const initialContacts = [
  { id: "ahmadi", name: "ahmadi khan", role: "Doctor", online: true, initials: "AK", color: "#9f5260" },
  { id: "noman", name: "noman khan", role: "Doctor", online: true, initials: "NK", color: "#415d83" },
  { id: "murtaza", name: "Pro Murtaza", role: "Patient", online: true, initials: "PM", color: "#64748b" },
];

const initialMessages = {
  ahmadi: [
    { id: 1, text: "Hi hope you feel better", from: "them", time: "2:30" },
    { id: 2, text: "Please let me know if you have any questions.", from: "them", time: "2:31" },
  ],
  noman: [{ id: 3, text: "Hi hope you feel better", from: "them", time: "2:30" }],
  murtaza: [{ id: 4, text: "Welcome to MyPatientHUB!", from: "them", time: "2:20" }],
};

function Chat({ goToLogin, goToSettings, goToDashboard, ...navigation }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selected, setSelected] = useState("ahmadi");
  const [contactQuery, setContactQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [showEmoji, setShowEmoji] = useState(false);
  const [mobileConversation, setMobileConversation] = useState(false);
  const selectedContact = initialContacts.find((contact) => contact.id === selected);
  const visibleContacts = initialContacts.filter((contact) => contact.name.toLowerCase().includes(contactQuery.toLowerCase()));

  function toggleMenu() {
    if (window.innerWidth <= 768) setIsMobileOpen((value) => !value);
    else setIsCollapsed((value) => !value);
  }

  function sendMessage(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((previous) => ({
      ...previous,
      [selected]: [...(previous[selected] || []), { id: Date.now(), text, from: "me", time }],
    }));
    setDraft("");
    setShowEmoji(false);
  }

  return (
    <div className={`app mph-new-page ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar isCollapsed={isCollapsed} isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} activePage="chat"
        {...navigation} goToDashboard={goToDashboard} goToSettings={goToSettings} />
      <main className="main mph-page-main">
        <PatientPageHeader title="Chat" onMenuClick={toggleMenu} onLogout={goToLogin} onSettings={goToSettings} onDashboard={goToDashboard} navigation={{...navigation,goToDashboard,goToSettings}} />
        <section className={`mph-chat-card ${mobileConversation ? "mph-chat-show-thread" : ""}`} aria-label="Chat interface">
          <aside className="mph-chat-contacts">
            <div className="mph-chat-me">
              <span className="mph-avatar mph-avatar-me">PM</span>
              <span><strong>Pro Murtaza</strong><small>online</small></span>
              <span className="mph-chat-pencil" aria-hidden="true">✎</span>
            </div>
            <label className="mph-contact-search"><input value={contactQuery} onChange={(event) => setContactQuery(event.target.value)} placeholder="Search Contacts" aria-label="Search Contacts" /><span>⌕</span></label>
            <div className="mph-contact-list">
              {visibleContacts.length === 0 && <p className="mph-no-contacts">No contacts found.</p>}
              {visibleContacts.map((contact) => {
                const last = (messages[contact.id] || []).at(-1);
                return (
                  <button type="button" key={contact.id} className={`mph-contact ${selected === contact.id ? "selected" : ""}`}
                    onClick={() => { setSelected(contact.id); setMobileConversation(true); setShowEmoji(false); }}>
                    <span className="mph-avatar" style={{ background: contact.color }}>{contact.initials}</span>
                    <span className="mph-contact-meta"><strong>{contact.name}</strong><small>{last?.text || "Start a conversation"}</small></span>
                    <span className="mph-contact-time">{last?.time || ""}</span>
                  </button>
                );
              })}
            </div>
          </aside>
          <div className="mph-chat-thread">
            <div className="mph-chat-thread-header">
              <button type="button" className="mph-chat-back" onClick={() => setMobileConversation(false)} aria-label="Back to contacts">←</button>
              <span className="mph-avatar" style={{ background: selectedContact.color }}>{selectedContact.initials}</span>
              <span className="mph-thread-name"><strong>{selectedContact.name}</strong><small>{selectedContact.online ? "online" : "offline"}</small></span>
              <span className="mph-video-icon" title="Video calling is not available in this demo" aria-label="Video calling unavailable">▣</span>
            </div>
            <div className="mph-chat-messages" aria-live="polite">
              {(messages[selected] || []).map((message) => (
                <div key={message.id} className={`mph-chat-message ${message.from === "me" ? "mph-mine" : ""}`}>
                  {message.from === "them" && <span className="mph-avatar mph-message-avatar" style={{ background: selectedContact.color }}>{selectedContact.initials}</span>}
                  <div className="mph-message-content"><span className="mph-message-author">{message.from === "me" ? "You" : selectedContact.name}</span><p>{message.text}</p><time>{message.time}</time></div>
                </div>
              ))}
            </div>
            <form className="mph-chat-compose" onSubmit={sendMessage}>
              <div className="mph-emoji-wrap">
                <button type="button" className="mph-emoji-button" aria-label="Choose emoji" onClick={() => setShowEmoji((value) => !value)}>☻</button>
                {showEmoji && <div className="mph-emoji-panel">{["🙂", "😊", "❤️", "👍", "🙏", "👋"].map((emoji) => <button type="button" key={emoji} onClick={() => { setDraft((value) => value + emoji); setShowEmoji(false); }}>{emoji}</button>)}</div>}
              </div>
              <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Enter Message" aria-label="Enter Message" />
              <button type="submit" className="mph-send" aria-label="Send message" disabled={!draft.trim()}>➤</button>
            </form>
          </div>
        </section>
        <p className="mph-demo-note">Chat preview: messages are stored only while this page is open. Sending messages to real users requires a backend.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Chat;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const defaultMessages = [
    {
      id: "#001",
      name: "Alex Mercer",
      email: "alex@gaming.com",
      project: "YouTube Reel Edit",
      message: "Need high retention gaming trailer edit with VFX, custom sound design, and speed ramps.",
      date: "2026-07-25",
      status: "NEW",
    },
    {
      id: "#002",
      name: "Sarah Connor",
      email: "sarah@media.org",
      project: "Thumbnail Design",
      message: "Looking for 5 high CTR YouTube thumbnails for a tech podcast channel.",
      date: "2026-07-24",
      status: "NEW",
    },
    {
      id: "#003",
      name: "Vikram Sharma",
      email: "vikram@studio.in",
      project: "Cinematic Edit",
      message: "Cinematic wedding & travel trailer color grading in DaVinci Resolve and Premiere Pro.",
      date: "2026-07-23",
      status: "IN PROGRESS",
    },
    {
      id: "#004",
      name: "David Miller",
      email: "david@brand.com",
      project: "Blender 3D",
      message: "3D product animation intro and logo sting crafted using Blender 3D and After Effects.",
      date: "2026-07-22",
      status: "REPLIED",
    },
    {
      id: "#005",
      name: "Priya Roy",
      email: "priya@reels.co",
      project: "Reel Creator",
      message: "10 Instagram Reels editing package with modern captions, sound FX, and retention cuts.",
      date: "2026-07-21",
      status: "NEW",
    },
  ];

  const [messages, setMessages] = useState(() => {
    try {
      const stored = localStorage.getItem("admin_inquiries");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultMessages;
  });

  useEffect(() => {
    try {
      localStorage.setItem("admin_inquiries", JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete message ID ${id}?`)) {
      setMessages(messages.filter((msg) => msg.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, status: newStatus } : msg
      )
    );
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.project.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "ALL") return matchesSearch;
    return matchesSearch && msg.status === activeFilter;
  });

  const totalCount = messages.length;
  const newCount = messages.filter((m) => m.status === "NEW").length;
  const inProgressCount = messages.filter((m) => m.status === "IN PROGRESS").length;
  const repliedCount = messages.filter((m) => m.status === "REPLIED").length;

  return (
    <div className="admin-dashboard-page">
      {/* Top Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="header-icon">
            <i className="fa-solid fa-gauge-high"></i>
          </div>
          <div>
            <h1>SARKAR ADMIN PANEL</h1>
            <span className="header-subtitle">Client Inquiries & Project Management</span>
          </div>
        </div>

        <div className="header-right-buttons">
          <Link to="/" className="btn-home">
            <i className="fa-solid fa-globe"></i> View Website
          </Link>
          <button className="btn-logout" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* 4 Stat Cards */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-info">
              <h3>TOTAL INQUIRIES</h3>
              <div className="stat-value">{totalCount}</div>
            </div>
            <div className="stat-icon-wrapper red">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h3>NEW MESSAGES</h3>
              <div className="stat-value text-red">{newCount}</div>
            </div>
            <div className="stat-icon-wrapper gold">
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h3>IN PROGRESS</h3>
              <div className="stat-value">{inProgressCount}</div>
            </div>
            <div className="stat-icon-wrapper blue">
              <i className="fa-solid fa-spinner"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h3>REPLIED</h3>
              <div className="stat-value">{repliedCount}</div>
            </div>
            <div className="stat-icon-wrapper green">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="dashboard-controls-bar">
          <div className="search-box-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search by ID (#001), Name, Email or Project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dashboard-search-input"
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="filter-tab-buttons">
            {["ALL", "NEW", "IN PROGRESS", "REPLIED"].map((status) => (
              <button
                key={status}
                className={`filter-btn ${activeFilter === status ? "active" : ""}`}
                onClick={() => setActiveFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Messages Table Card */}
        <div className="table-card">
          <div className="table-header-flex">
            <h2>
              <i className="fa-solid fa-list-check icon-red"></i> Client Inquiries List
            </h2>
            <span className="results-count-badge">
              Showing {filteredMessages.length} of {messages.length} Records
            </span>
          </div>

          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "90px" }}>ID NUM</th>
                  <th>CLIENT NAME</th>
                  <th>EMAIL</th>
                  <th>PROJECT TYPE</th>
                  <th>MESSAGE DETAILS</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                  <th style={{ width: "160px" }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((msg) => (
                    <tr key={msg.id} className={msg.status === "NEW" ? "highlight-new-row" : ""}>
                      <td>
                        <span className="id-badge">{msg.id}</span>
                      </td>
                      <td className="font-semibold">{msg.name}</td>
                      <td>
                        <a href={`mailto:${msg.email}`} className="table-email-link">
                          {msg.email}
                        </a>
                      </td>
                      <td>
                        <span className="project-tag-pill">{msg.project}</span>
                      </td>
                      <td className="message-cell" title={msg.message}>
                        {msg.message}
                      </td>
                      <td>
                        <span
                          className={`status-pill ${
                            msg.status === "NEW"
                              ? "pill-new"
                              : msg.status === "IN PROGRESS"
                              ? "pill-progress"
                              : "pill-replied"
                          }`}
                        >
                          {msg.status}
                        </span>
                      </td>
                      <td className="date-cell">{msg.date}</td>
                      <td>
                        <div className="action-buttons-group">
                          <button
                            className="btn-action-reply"
                            title="Mark as Replied"
                            onClick={() =>
                              handleStatusChange(
                                msg.id,
                                msg.status === "REPLIED" ? "IN PROGRESS" : "REPLIED"
                              )
                            }
                          >
                            <i className="fa-solid fa-reply"></i>
                          </button>

                          <button
                            className="btn-action-view"
                            title="View Full Message"
                            onClick={() => setSelectedMessage(msg)}
                          >
                            <i className="fa-solid fa-eye"></i>
                          </button>

                          <button
                            className="btn-action-delete"
                            title="Delete Inquiry"
                            onClick={() => handleDelete(msg.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="empty-table-cell">
                      <i className="fa-solid fa-folder-open empty-icon"></i>
                      <p>No client inquiries found matching your filter.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Message Modal Preview */}
      {selectedMessage && (
        <div className="modal-backdrop-overlay" onClick={() => setSelectedMessage(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                Inquiry Details <span className="id-badge-large">{selectedMessage.id}</span>
              </h3>
              <button className="modal-close-btn" onClick={() => setSelectedMessage(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-info-grid">
                <div>
                  <label>Client Name:</label>
                  <p>{selectedMessage.name}</p>
                </div>
                <div>
                  <label>Email Address:</label>
                  <p>{selectedMessage.email}</p>
                </div>
                <div>
                  <label>Project Type:</label>
                  <p>{selectedMessage.project}</p>
                </div>
                <div>
                  <label>Date Received:</label>
                  <p>{selectedMessage.date}</p>
                </div>
              </div>
              <div className="modal-message-box">
                <label>Full Message:</label>
                <div className="message-content-text">{selectedMessage.message}</div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href={`mailto:${selectedMessage.email}?subject=Regarding your ${selectedMessage.project} Inquiry`}
                className="btn-action-add"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-paper-plane"></i> Send Email Reply
              </a>
              <button
                className="btn-secondary"
                onClick={() => setSelectedMessage(null)}
                style={{ padding: "8px 18px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
import React, { useState, useEffect, useCallback } from "react";
import "./Profile.css";

import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

import {
  FiEdit2,
  FiMusic,
  FiDownload,
  FiHeart,
  FiArrowUpRight,
  FiX
} from "react-icons/fi";

import ProfileUpload from "./ProfileUpload/Profileuploads";
import ProfileDownload from "./ProfileDownload/Profiledownload";
import ProfileFavorites from "./ProfileFovorites/Profilefovorites";
import EditProfile from "../editprofile/editprofile";

const API = "http://localhost:5000";

function Profile() {
  const [activeTab, setActiveTab] = useState("uploads");
  const [showEditModal, setShowEditModal] = useState(false);
  const [user, setUser] = useState(null);

  const [uploadCount, setUploadCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const fetchUserData = useCallback(async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const userData = storedUser
        ? JSON.parse(storedUser)
        : null;

      const userId = userData?._id;
      const token = localStorage.getItem("token");

      if (!userId) return;

      setUser(userData);

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const [uploads, downloads, favorites] =
        await Promise.allSettled([
          fetch(`${API}/api/user/${userId}/uploads`),
          fetch(`${API}/api/user/${userId}/downloads`, {
            headers
          }),
          fetch(`${API}/api/user/${userId}/favorites`, {
            headers
          })
        ]);

      if (uploads.status === "fulfilled" && uploads.value.ok) {
        const data = await uploads.value.json();
        setUploadCount(Array.isArray(data) ? data.length : 0);
      }

      if (downloads.status === "fulfilled" && downloads.value.ok) {
        const data = await downloads.value.json();
        setDownloadCount(Array.isArray(data) ? data.length : 0);
      }

      if (favorites.status === "fulfilled" && favorites.value.ok) {
        const data = await favorites.value.json();
        setFavoriteCount(Array.isArray(data) ? data.length : 0);
      }

    } catch (error) {
      console.error("Profile loading error:", error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();

    const handleProfileUpdated = (event) => {
      if (event.detail) {
        setUser(event.detail);
        localStorage.setItem(
          "user",
          JSON.stringify(event.detail)
        );
      }
    };

    window.addEventListener("uploadSuccess", fetchUserData);
    window.addEventListener("favoriteChanged", fetchUserData);
    window.addEventListener("profileUpdated", handleProfileUpdated);

    return () => {
      window.removeEventListener("uploadSuccess", fetchUserData);
      window.removeEventListener("favoriteChanged", fetchUserData);
      window.removeEventListener("profileUpdated", handleProfileUpdated);
    };
  }, [fetchUserData]);

  const handleUpdateProfile = (updatedUser) => {
    if (updatedUser) {
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } else {
      fetchUserData();
    }

    setShowEditModal(false);
  };

  const getAvatar = () => {
    const avatar = user?.avatar || user?.picture;

    if (!avatar) {
      return `${API}/uploads/logo.png`;
    }

    if (avatar.startsWith("http") || avatar.startsWith("data:")) {
      return avatar;
    }

    return `${API}/${avatar.replace(/^\/+/, "")}`;
  };

  const tabs = [
    {
      id: "uploads",
      label: "Uploads",
      count: uploadCount,
      icon: <FiMusic />
    },
    {
      id: "downloads",
      label: "Downloads",
      count: downloadCount,
      icon: <FiDownload />
    },
    {
      id: "favorites",
      label: "Favorites",
      count: favoriteCount,
      icon: <FiHeart />
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "uploads":
        return <ProfileUpload />;

      case "downloads":
        return <ProfileDownload />;

      case "favorites":
        return <ProfileFavorites />;

      default:
        return null;
    }
  };

  return (
    <main className="ss-profile-page">

      {/* PROFILE HEADER */}

      <section className="ss-profile-header">

        <div className="ss-profile-heading">
          <div>
            <span className="ss-profile-overline">
              SHARK SOUND / MEMBER SPACE
            </span>

            <h1>My Profile</h1>

            <p>
              Your music. Your space. Your sound.
            </p>
          </div>

          <button
            className="ss-edit-profile-btn"
            onClick={() => setShowEditModal(true)}
          >
            <FiEdit2 />
            Edit Profile
          </button>
        </div>

        {/* USER INFORMATION */}

        <div className="ss-profile-card">

          <div className="ss-avatar-wrap">

            <img
              className="ss-profile-avatar"
              src={getAvatar()}
              alt="Profile"
              onError={(e) => {
                e.currentTarget.src = `${API}/uploads/logo.png`;
              }}
            />

            <button
              className="ss-avatar-edit"
              onClick={() => setShowEditModal(true)}
              title="Edit profile picture"
            >
              <FiEdit2 />
            </button>

          </div>

          <div className="ss-profile-user-info">

            <span className="ss-member-label">
              MEMBER
            </span>

            <h2>
              {user?.username || "Music Lover"}
            </h2>

            <p className="ss-profile-email">
              {user?.email || "Welcome to SHARK SOUND"}
            </p>

            <p className="ss-profile-bio">
              {user?.bio || "Add a bio to tell everyone about yourself."}
            </p>

            <div className="ss-profile-social">

              {user?.facebook && (
                <a
                  href={user.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
              )}

              {user?.instagram && (
                <a
                  href={user.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              )}

              {user?.tiktok && (
                <a
                  href={user.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                >
                  <SiTiktok />
                </a>
              )}

              {!user?.facebook &&
                !user?.instagram &&
                !user?.tiktok && (
                  <span className="ss-no-social">
                    No social links added
                  </span>
                )}

            </div>

          </div>

        </div>

        {/* STATISTICS */}

        <div className="ss-profile-stats">

          <div className="ss-stat-item">
            <span className="ss-stat-icon">
              <FiMusic />
            </span>

            <div>
              <strong>{uploadCount}</strong>
              <span>Uploads</span>
            </div>
          </div>

          <div className="ss-stat-divider" />

          <div className="ss-stat-item">
            <span className="ss-stat-icon">
              <FiDownload />
            </span>

            <div>
              <strong>{downloadCount}</strong>
              <span>Downloads</span>
            </div>
          </div>

          <div className="ss-stat-divider" />

          <div className="ss-stat-item">
            <span className="ss-stat-icon">
              <FiHeart />
            </span>

            <div>
              <strong>{favoriteCount}</strong>
              <span>Favorites</span>
            </div>
          </div>

        </div>

      </section>

      {/* MUSIC COLLECTION */}

      <section className="ss-profile-library">

        <div className="ss-library-heading">
          <div>
            <span className="ss-profile-overline">
              YOUR COLLECTION
            </span>

            <h2>My Music Library</h2>

            <p>
              Manage your music and discover your collection.
            </p>
          </div>

          <FiArrowUpRight className="ss-library-arrow" />
        </div>

        {/* TABS */}

        <div className="ss-profile-tabs">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`ss-profile-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}

              <span>{tab.label}</span>

              <span className="ss-tab-count">
                {tab.count}
              </span>
            </button>
          ))}

        </div>

        {/* TAB CONTENT */}

        <div className="ss-profile-content">
          {renderTabContent()}
        </div>

      </section>

      {/* EDIT PROFILE MODAL */}

      {showEditModal && (
        <div
          className="ss-modal-overlay"
          onClick={() => setShowEditModal(false)}
        >

          <div
            className="ss-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="ss-modal-close"
              onClick={() => setShowEditModal(false)}
            >
              <FiX />
            </button>

            <EditProfile
              onClose={() => setShowEditModal(false)}
              onUpdate={handleUpdateProfile}
            />

          </div>

        </div>
      )}

    </main>
  );
}

export default Profile;
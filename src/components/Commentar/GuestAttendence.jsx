import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import "./GuestAttendence.css";

function GuestAttendance() {
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);
  const [isNameExists, setIsNameExists] = useState(false);
  const [showGuestList, setShowGuestList] = useState(false); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("tamu");
    if (urlName) {
      setGuestName(urlName);
    }

    const q = query(collection(db, "guests"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGuests(guestList);

      const nameExists = guestList.some(
        (guest) => guest.name.toLowerCase() === guestName.toLowerCase()
      );
      setIsNameExists(nameExists);
    });

    return () => unsubscribe();
  }, [guestName]); 

  const handleAddGuest = async (present) => {
    if (!guestName.trim() || isNameExists) return; 
    await addDoc(collection(db, "guests"), {
      name: guestName,
      present: present,
    });

    setGuestName("");
  };

  const toggleGuestList = () => {
    setShowGuestList(!showGuestList);
  };

  return (
    <div className="guest-attendance-container">
      <h2>Kedatangan Tamu</h2>
      {isNameExists && <p style={{ color: 'red' }}>Nama Sudah Terdaftar</p>} {/* Menampilkan pesan jika nama sudah ada */}
      <div style={{display:'flex', flexDirection: 'row',}}>
      <button onClick={() => handleAddGuest(true)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Tandai Hadir</button>
      <button onClick={() => handleAddGuest(false)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Tandai Tidak Hadir</button>
      </div>
      <button style={{margin: 'auto'}} onClick={toggleGuestList}>
        {showGuestList ? "Sembunyikan Daftar Tamu" : "Tampilkan Daftar Tamu"}
      </button>

      {showGuestList && (
        <div style={{height: '200px', width: '200px', display: 'flex', flexDirection:'column', justifyItems: 'center', alignItems: 'center',}}>
          <h3>Daftar Tamu</h3>
          <div className="listContainer" style={{height: '150px', width: 'auto', overflowY: 'auto',}}>
          <ul style={{listStyle: 'none', padding: '0',}}>
            {guests.map((guest) => (
              <li
                key={guest.id}
                style={{
                  backgroundColor: guest.present ? "green" : "red", // Mengatur warna latar belakang
                  color: "white", // Menyesuaikan warna teks agar terlihat jelas
                  padding: "10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                }}
              >
                {guest.name}
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestAttendance;

import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import "./GuestAttendence.css"; 

function GuestAttendance() {
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);
  const [isNameExists, setIsNameExists] = useState(false); // Menyimpan status apakah nama tamu sudah ada
  const [showGuestList, setShowGuestList] = useState(false); // Menyimpan status untuk menampilkan daftar tamu

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

      // Mengecek apakah nama tamu sudah ada di database
      const nameExists = guestList.some(
        (guest) => guest.name.toLowerCase() === guestName.toLowerCase()
      );
      setIsNameExists(nameExists); // Set status nama sudah ada
    });

    return () => unsubscribe();
  }, [guestName]); // Menambahkan guestName ke dependency array agar pengecekan dilakukan saat guestName berubah

  const handleAddGuest = async (present) => {
    if (!guestName.trim() || isNameExists) return; // Menghentikan jika nama kosong atau sudah ada

    await addDoc(collection(db, "guests"), {
      name: guestName,
      present: present,
    });

    setGuestName(""); // Reset input field setelah tamu ditambahkan
  };

  const toggleGuestList = () => {
    setShowGuestList(!showGuestList); // Toggle untuk menampilkan/menghapus daftar tamu
  };

  return (
<<<<<<< HEAD
    <div className="guest-attendance-container">
        <h2>Kedatangan Tamu</h2>
        {isNameExists && <p style={{ color: 'red' }}>Nama Sudah Terdaftar</p>} {/* Menampilkan pesan jika nama sudah ada */}
        <div className="input-container">
          <button onClick={() => handleAddGuest(true)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Tandai Hadir</button>
          <button onClick={() => handleAddGuest(false)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Tandai Tidak Hadir</button>
        </div>
        <button className="list-guest" onClick={toggleGuestList}>
          {showGuestList ? "Sembunyikan Daftar Tamu" : "Tampilkan Daftar Tamu"}
        </button>

        {showGuestList && (
          <div className="guest-list">
            <h3>Daftar Tamu</h3>
            <div className="listContainer">
            <ul style={{listStyle: 'none', padding: '0',}}>
=======
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}} className="guest-attendance-container">
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
>>>>>>> a6f397f618c0bdeecd8c01e1e5a5903c0d54d87b
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

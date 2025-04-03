import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

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
    <div className="guest-attendance-container">
      <h2>Kedatangan Tamu</h2>
      <button onClick={() => handleAddGuest(true)} disabled={isNameExists}>Tandai Hadir</button>
      <button onClick={() => handleAddGuest(false)} disabled={isNameExists}>Tandai Tidak Hadir</button>

      {isNameExists && <p style={{ color: 'red' }}>Nama tamu sudah terdaftar</p>} {/* Menampilkan pesan jika nama sudah ada */}
      
      <button onClick={toggleGuestList}>
        {showGuestList ? "Sembunyikan Daftar Tamu" : "Tampilkan Daftar Tamu"}
      </button>

      {showGuestList && (
        <>
          <h3>Daftar Tamu</h3>
          <ul>
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
        </>
      )}
    </div>
  );
}

export default GuestAttendance;

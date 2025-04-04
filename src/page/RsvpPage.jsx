import Comments from '../components/Commentar/Comment';
import '../page/RsvpPage.css';
import Wave from '../components/Pembatas/PembatasOmbak';

function RsvpPage() {
  return (
    <>
        <section id="RsvpPage">
            <div className="pageContainer">
                <h1>Pesan Dan Kesan</h1>
                <p>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Berikan ucapan terbaik anda untuk kedua pembelai
                </p>
                <Comments />
            </div>
        </section>
    </>
  );
}
export default RsvpPage
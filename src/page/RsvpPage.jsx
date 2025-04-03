import Comments from '../components/Commentar/Comment';
import '../page/RsvpPage.css'

function RsvpPage() {
  return (
    <>
        <section id="RsvpPage">
            <div>
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